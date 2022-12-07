// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TuringDapp is ERC20 {
    struct Membro {
        uint256 id;
        address addr;
        string codinome;
    }
    struct Voto {
        uint256 id;
        uint256 votante_id;
        uint256 votado_id;
        uint256 qtd_ST;
    }

    uint256 public qtdMembros;
    mapping(uint256 => Membro) membros;

    uint256 public qtdVotos;
    mapping(uint256 => Voto) votos;

    address profa_addr = 0xA5095296F7fF9Bdb01c22e3E0aC974C8963378ad;
    bool em_votacao = true;

    constructor() ERC20("TuringDapp", "TDA") {
        qtdMembros = 0;
        qtdVotos = 0;

        addMembro(0xD07318971e2C15b4f8d3d28A0AEF8F16B9D8EAb6, "Andre");
        addMembro(0x127B963B9918261Ef713cB7950c4AD16d4Fe18c6, "Antonio");
        addMembro(0x5d84D451296908aFA110e6B37b64B1605658283f, "Ratonilo");
        addMembro(0x500E357176eE9D56c336e0DC090717a5B1119cC2, "eduardo");
        addMembro(0x5217A9963846a4fD62d35BB7d58eAB2dF9D9CBb8, "Enzo");
        addMembro(0xFED450e1300CEe0f69b1F01FA85140646E596567, "Fernando");
        addMembro(0xFec23E4c9540bfA6BBE39c4728652F2def99bc1e, "Juliana");
        addMembro(0x6701D0C23d51231E676698446E55F4936F5d99dF, "Altoe");
        addMembro(0x8321730F4D59c01f5739f1684ABa85f8262f8980, "Salgado");
        addMembro(0x4A35eFD10c4b467508C35f8C309Ebc34ae1e129a, "Regata");
        addMembro(0xDD551702Dc580B7fDa2ddB7a1Ca63d29E8CDCf33, "Luis");
        addMembro(0x01fe9DdD4916019beC6268724189B2EED8C2D49a, "Nicolas");
        addMembro(0x726150C568f3C7f1BB3C47fd1A224a5C3F706BB1, "Rauta");
        addMembro(0xCAFE34A88dCac60a48e64107A44D3d8651448cd9, "Silva");
        addMembro(0xDfb0B8b7530a6444c73bFAda4A2ee3e482dCB1E3, "Sophie");
        addMembro(0xBeb89bd95dD9624dEd83b12dB782EAE30805ef97, "Thiago");
        addMembro(0xEe4768Af8caEeB042Da5205fcd66fdEBa0F3FD4f, "Brito");
        addMembro(0x89e66f9b31DAd708b4c5B78EF9097b1cf429c8ee, "ulopesu");
        addMembro(0x48cd1D1478eBD643dba50FB3e99030BE4F84d468, "Vinicius");
        addMembro(0xFADAf046e6Acd9E276940C728f6B3Ac1A043054c, "Bonella");
    }

    function addMembro(address addr, string memory codinome) internal {
        membros[qtdMembros] = Membro(
            qtdMembros,
            addr,
            codinome
        );
        qtdMembros++;
    }

    function addVoto(uint256 votante_id, uint256 votado_id, uint256 qtd_ST) internal {
        votos[qtdVotos] = Voto(
            qtdVotos,
            votante_id,
            votado_id,
            qtd_ST
        );
        qtdVotos++;
    }

    function issueToken(address receiver_addr, uint256 qtd_ST) public {
        require(msg.sender == profa_addr, "Permissao negada!");

        bool enviado = false;
        for (uint256 i = 0; i < qtdMembros; i++) {
            Membro storage membro = membros[i];
            if (receiver_addr == membro.addr) {
                enviado = true;
                _mint(receiver_addr, qtd_ST);
                break;
            }
        }

        require(enviado, "Membro nao encontrado!");
    }


    function endVoting() public {
        require(msg.sender == profa_addr, "Permissao negada!");
        em_votacao = false;
    }

    function vote(string calldata codinome, uint256 qtd_ST) public {
        require(em_votacao, "Votacao encerrada!");          // Votacao encerrada pela profa
        require(qtd_ST <= 2 * 10**18, "Valor Excedido!");   // limite de 2 turings

        bool voto_ok = false;
        string memory erro = "Permissao negada!";
        for (uint256 i = 0; i < qtdMembros; i++) {
            Membro storage votante = membros[i];
            if (msg.sender == votante.addr) {
                erro = "Membro nao encontrado!";
                for (uint256 j = 0; j < qtdMembros; j++) {
                    Membro storage votado = membros[j];
                    if (keccak256(abi.encodePacked(codinome)) == keccak256(abi.encodePacked(votado.codinome))) {
                        erro = "Erro durante o Voto";
                        voto_ok = votar(votante.id, votado.id, qtd_ST);
                        if (voto_ok) {
                            _mint(votado.addr, qtd_ST);
                            _mint(votante.addr, 2 * 10**17);  // 0,2 Turings para quem esta votando
                        }
                        break;
                    }
                }
                break;
            }
        }
        require(voto_ok, erro);
    }

    function votar(uint256 votante_id, uint256 votado_id, uint256 qtd_ST) internal returns (bool) {
        if(votante_id == votado_id) {
            require(false, "Voce nao pode votar em si mesmo!");
            return false;
        }

        for (uint256 i = 0; i < qtdVotos; i++) {
            Voto storage voto = votos[i];
            if (voto.votante_id == votante_id && voto.votado_id == votado_id) {
                require(false, "Voto Repetido!");
                return false;
            }
        }

        addVoto(votante_id, votado_id, qtd_ST);
        return true;
    }
}
