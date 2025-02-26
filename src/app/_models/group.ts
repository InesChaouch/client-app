export interface Group {
    name: string;
    connections: Connection[];
}

export interface Connection {
    conntectionId: string;
    username: string;
}
