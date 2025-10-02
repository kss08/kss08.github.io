export interface AboutSection {
    [sectionName: string]: string[];
}

export interface AboutContent {
    title: string;
    description: string[]; // array of text lines
    about?: AboutSection; // optional list of endeavours
}