// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;
contract TuringDapp {
    struct Voto {
        string codinome;
        uint256 qtd_ST;
    }

    struct Votante {
        address addr;
        string codinome;
        mapping(string => Voto) votos;
    }

    address profa_addr = 0xA5095296F7fF9Bdb01c22e3E0aC974C8963378ad;

    Votante[] votantes;

    bool voting = true;

    constructor() {
        address vaddr = address(0xD07318971e2C15b4f8d3d28A0AEF8F16B9D8EAb6);
        string vcodinome = string("Andre");
        votantes[vaddr] = Votante(
            {
                addr: vaddr,
                codinome: "Andre"
            }
        );

        vaddr = 0x127B963B9918261Ef713cB7950c4AD16d4Fe18c6;
        vcodinome = "Antonio";
        votantes[vaddr] = Votante(
            {
                addr: vaddr,
                codinome: vcodinome
            }
        );

        vaddr = 0x5d84D451296908aFA110e6B37b64B1605658283f;
        vcodinome = "Ratonilo";
        votantes[vaddr] = Votante(
            {
                addr: vaddr,
                codinome: vcodinome
            }
        );

        vaddr = 0x500E357176eE9D56c336e0DC090717a5B1119cC2;
        vcodinome = "eduardo";
        votantes[vaddr] = Votante(
            {
                addr: vaddr,
                codinome: vcodinome
            }
        );

        vaddr = 0x5217A9963846a4fD62d35BB7d58eAB2dF9D9CBb8;
        vcodinome = "Enzo";
        votantes[vaddr] = Votante(
            {
                addr: vaddr,
                codinome: vcodinome
            }
        );

        vaddr = 0xFED450e1300CEe0f69b1F01FA85140646E596567;
        vcodinome = "Fernando";
        votantes[vaddr] = Votante(
            {
                addr: vaddr,
                codinome: vcodinome
            }
        );

        vaddr = 0xFec23E4c9540bfA6BBE39c4728652F2def99bc1e;
        vcodinome = "Juliana";
        votantes[vaddr] = Votante(
            {
                addr: vaddr,
                codinome: vcodinome
            }
        );

        vaddr = 0x6701D0C23d51231E676698446E55F4936F5d99dF;
        vcodinome = "Altoe";
        votantes[vaddr] = Votante(
            {
                addr: vaddr,
                codinome: vcodinome
            }
        );

        vaddr = 0x8321730F4D59c01f5739f1684ABa85f8262f8980;
        vcodinome = "Salgado";
        votantes[vaddr] = Votante(
            {
                addr: vaddr,
                codinome: vcodinome
            }
        );

        vaddr = 0x4A35eFD10c4b467508C35f8C309Ebc34ae1e129a;
        vcodinome = "Regata";
        votantes[vaddr] = Votante(
            {
                addr: vaddr,
                codinome: vcodinome
            }
        );
    
        vaddr = 0xDD551702Dc580B7fDa2ddB7a1Ca63d29E8CDCf33;
        vcodinome = "Luis";
        votantes[vaddr] = Votante(
            {
                addr: vaddr,
                codinome: vcodinome
            }
        );

        vaddr = 0x01fe9DdD4916019beC6268724189B2EED8C2D49a;
        vcodinome = "Nicolas";
        votantes[vaddr] = Votante(
            {
                addr: vaddr,
                codinome: vcodinome
            }
        );
    
        vaddr = 0x726150C568f3C7f1BB3C47fd1A224a5C3F706BB1;
        vcodinome = "Rauta";
        votantes[vaddr] = Votante(
            {
                addr: vaddr,
                codinome: vcodinome
            }
        );
tests
        vaddr = 0xCAFE34A88dCac60a48e64107A44D3d8651448cd9;
        vcodinome = "Silva";
        votantes[vaddr] = Votante(
            {
                addr: vaddr,
                codinome: vcodinome
            }
        );

        vaddr = 0xDfb0B8b7530a6444c73bFAda4A2ee3e482dCB1E3;
        vcodinome = "Sophie";
        votantes[vaddr] = Votante(
            {
                addr: vaddr,
                codinome: vcodinome
            }
        );

        vaddr = 0xBeb89bd95dD9624dEd83b12dB782EAE30805ef97;
        vcodinome = "Thiago";
        votantes[vaddr] = Votante(
            {
                addr: vaddr,
                codinome: vcodinome
            }
        );

        vaddr = 0xEe4768Af8caEeB042Da5205fcd66fdEBa0F3FD4f;
        vcodinome = "Brito";
        votantes[vaddr] = Votante(
            {
                addr: vaddr,
                codinome: vcodinome
            }
        );

        vaddr = 0x89e66f9b31DAd708b4c5B78EF9097b1cf429c8ee;
        vcodinome = "ulopesu";
        votantes[vaddr] = Votante(
            {
                addr: vaddr,
                codinome: vcodinome
            }
        );

        vaddr = 0x48cd1D1478eBD643dba50FB3e99030BE4F84d468;
        vcodinome = "Vinicius";
        votantes[vaddr] = Votante(
            {
                addr: vaddr,
                codinome: vcodinome
            }
        );
    
        vaddr = 0xFADAf046e6Acd9E276940C728f6B3Ac1A043054c;
        vcodinome = "Bonella";
        votantes[vaddr] = Votante(
            {
                addr: vaddr,
                codinome: vcodinome
            }
        );
    }
}           
  
                  
                  
                  
                  




