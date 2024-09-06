import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {



    async consumo() {
        let usuariosStatus = []
        const response = await fetch("https://avaliacao-tecnica-1e225509d94e.herokuapp.com/backend/users", {
            headers: {
                'authorization': 'APIKEY_690c335243fc72a58da0f904aa'
            }
        })
        const usuarios = await response.json() as any[]
        for (const usuario of usuarios)  {
            const status = await this.buscarStatus(usuario.id)
            const usuarioStatus = {id: usuario.id, nome: usuario.name, status: status.status}
            if (usuarioStatus.status === 'ativo') {
                usuariosStatus.push(usuarioStatus)
            }
            //console.log(usuario.id, usuario.name, status.status)
            //console.log(usuario.id)
        }
        console.log(usuariosStatus)
        return usuariosStatus

    }

    async buscarStatus(id: number) {
        const response = await fetch(`https://avaliacao-tecnica-1e225509d94e.herokuapp.com/backend/users/${id}/status`, {
            headers: {
                'authorization': 'APIKEY_690c335243fc72a58da0f904aa'
            }
        })

        return await response.json()
    }
  
}
