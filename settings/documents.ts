import { Paths } from "@/lib/pageroutes";

export const Documdents: Paths[] = [
  {
    title: "Introduction",
    href: "/introduction",
    heading: "Getting started", 
    items: [
      {
        title: "Installation",
        href: "/installation",
      },
      {
        title: "Setup",
        href: "/setup",
      },
      {
        title: "Changelog",
        href: "/changelog",
      },
    ],
  },
  {
    title: "Navigation",
    href: "/navigation",
    heading: "Documents",
  },
  {
    title: "Structure",
    href: "/structure",
    items: [
      {
        title: "Deeper",
        href: "/deeper",
        items : [
          {
            title: "Even deeper",
            href: "/even-deeper",
          },
        ]
      },
    ],
  },
  {
    title: "Markup",
    href: "/markup",
    heading: "Components",
    items: [
      {
        title: "Cards",
        href: "/cards",
      },
      {
        title: "Diagrams",
        href: "/diagrams",
      },
      {
        title: "Filetree",
        href: "/filetree",
      },
      {
        title: "Lists",
        href: "/lists",
      },
      {
        title: "Maths",
        href: "/maths",
      },
      {
        title: "Notes",
        href: "/notes",
      },
      {
        title: "Steps",
        href: "/steps",
      },
      {
        title: "Table",
        href: "/table",
      },
      {
        title: "Tabs",
        href: "/tabs",
      },
    ],
  },
];

export const Documents: Paths[] = [
  {
    title: "Welcome to AcadZ",
    href: "/introduction",
  },
  {
    title: "Getting Started",
    href: "/getting-started",
    items: [
      {
        title: "Installation",
        href: "/installation",
      },
      {
        title: "Setup",
        href: "/setup",
        items: [
          {
            title: "Authentication",
            href: "/authentication",
          },
          {
            title: "Notebooks & Groups",
            href: "/notebooks-and-groups",
          },
        ]
      }
    ]
  },
  {
    title: "Features",
    href: "/features",
    items: [
      {
        title: "Notebook Actions",
        href: "/notebook-actions",
        items: [
          {
            title: "Record Lecture",
            href: "/record-lecture",
          },
          {
            title: "Scan OCR",
            href: "/scan-ocr",
          },
          {
            title: "YouTube to Transcript",
            href: "/youtube-to-transcript",
          },
          {
            title: "Upload PDF",
            href: "/upload-pdf",
          },
        ]

      },
      {
        title: "Transcript Options",
        href: "/transcript-options",
        items: [
          {
            title: "Summarise",
            href: "/summarise",
          },
          {
            title: "Flashcards",
            href: "/flashcards",
            items: [
              {
                title: "Editing",
                href: "/editng-flashcards",
              },
              {
                title: "Sessions",
                href: "/flashcard-sessions",
              },
            ]
          },
          {
            title: "Youtube Suggestions",
            href: "/youtube-suggestions",
          },
        ]
      },
    ]
  },
  {
    title: "Conclusion",  
    href: "/conclusion",
  }
]