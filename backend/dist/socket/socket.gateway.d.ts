import { Server } from "socket.io";
export declare class SocketGateway {
    server: Server;
    sendProjectMessage(type: string, message: string): void;
}
