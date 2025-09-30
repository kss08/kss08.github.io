export interface ContactButton {
    name: string;
    link: string;     // external URL
}

export interface NavbarContent {
    title: string;
    contact_buttons: ContactButton[];
}
