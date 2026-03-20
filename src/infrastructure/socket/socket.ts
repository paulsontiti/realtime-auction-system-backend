import { Server } from "socket.io";


export default function initSocket(server: any) {
 const io = new Server(server, {
    cors: { origin: "*" },
  });

  io.on("connection", (socket:any) => {
    console.log("User connected:", socket.id);

    socket.on("joinAuction", (auctionId:string) => {
      socket.join(auctionId);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });
}
