import { WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from "socket.io";

@WebSocketGateway({ cors: true }) 
export class SocketGateway {

    @WebSocketServer()
    server: Server;

    sendProjectMessage(type: string, message: string) {
        this.server.emit(`project_message_${type}`, {message});
    }

}