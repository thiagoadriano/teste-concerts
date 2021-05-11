class ServerRun {
  _server = null;
  _port = process.env.PORT || 3000;

  constructor(Server) {
    this._server = new Server();
    this.listeners();
  }

  listeners() {
    this._server.listen(this._port, () =>
      console.log(`Api rodando na porta: ${this._port}`)
    );
    this._server.on("error", this._onError);
    this._server.on("listening", this._onListening);
  }

  _onError(error) {
    if (error.syscall !== "listen") {
      throw error;
    }
    switch (error.code) {
      case "EACCES":
        console.error(`Necessário ser admin para usar a porta: ${this._port}`);
        process.exit(1);
        break;
      case "EADDRINUSE":
        console.error(`A porta: ${this._port} já está em uso!`);
        process.exit(1);
        break;
      default:
        throw error;
    }
  }

  _onListening() {
    var addr = this._server.address();
    var bind =
      typeof addr === "string" ? `Endereço: ${addr}` : `port: ${addr.port}`;
    console.log(`Rodando: ${bind}`);
  }
}

module.exports = ServerRun;
