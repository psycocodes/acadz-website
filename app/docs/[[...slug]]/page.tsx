import { notFound } from "next/navigation";
import { getDocument } from "@/lib/markdown";
import { PageRoutes } from "@/lib/pageroutes";
import { Settings } from "@/lib/meta";

import PageBreadcrumb from "@/components/navigation/pagebreadcrumb";
import Pagination from "@/components/navigation/pagination";
import Toc from "@/components/navigation/toc";
import Feedback from "@/components/navigation/feedback";
import { BackToTop } from "@/components/navigation/backtotop";
import { Typography } from "@/components/ui/typography";

type PageProps = {
  params: { slug: string[] };
};

export default async function Pages({ params: { slug = [] } }: PageProps) {
  const pathName = slug.join("/");
  const res = await getDocument(pathName);

  if (!res) notFound();

  const { frontmatter, content, tocs } = res;

  return (
    <div className="grid grid-cols-[1fr_20%] gap-14">
      <div className="flex-[3] pt-10">
        <PageBreadcrumb paths={slug} />
        <Typography>
          <h1 className="text-3xl -mt-2">{frontmatter.title}</h1>
          <p className="mt-4 text-base text-muted-foreground text-[16.5px]">
            {frontmatter.description}
          </p>
          <div>{content}</div>
          <Pagination pathname={pathName} />
        </Typography>
      </div>
      {Settings.rightbar && (
        <div className="hidden xl:flex xl:flex-col fixed right-0 top-15 gap-3 py-8 min-w-[230px] h-[94.5vh] toc overflow-y-auto text-wrap px-7 max-w-[20vw]">
          {Settings.toc && <Toc tocs={tocs} />}
          {Settings.feedback && <Feedback slug={pathName} title={frontmatter.title} />}
          {Settings.totop && <BackToTop className="mt-6 self-start text-sm text-neutral-800 dark:text-neutral-300/85" />}
        </div>
      )}
    </div>
  );
}

export async function generateMetadata({ params: { slug = [] } }: PageProps) {
  const pathName = slug.join("/");
  const res = await getDocument(pathName);
  
  if (!res) return null;

  const { frontmatter, lastUpdated } = res;

  return {
    title: `${Settings.title}`,
    description: frontmatter.description,
    keywords: frontmatter.keywords,
    ...(lastUpdated && {
      lastModified: new Date(lastUpdated).toISOString(),
    }),
  };
}

export function generateStaticParams() {
  return PageRoutes
    .filter((item) => item.href)
    .map((item) => ({
      slug: item.href.split("/").slice(1),
    }));
}
