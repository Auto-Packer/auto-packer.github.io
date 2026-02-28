export interface Download {
  slug: string;
  data: {
    title: string;
    vendor: string;
    description: string;
    version: string;
    releaseDate: Date;
    fileSize: string;
    osRequirements: string[];
    downloadUrl: string;
    tags: string[];
  };
  content: string;
}
