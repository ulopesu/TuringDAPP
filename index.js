// 1. Declare global variable to store the smart contract instance
let TDAContract;
let membros = [];

// 2. Set contract address and ABI
const Contract_Address = "0xA7C07eb28Ddda3A4e6E86AEE1AC07386832e3dB9";
const Contract_ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "endVoting",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getMembros",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "codinome",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "qtdVotos",
						"type": "uint256"
					}
				],
				"internalType": "struct TuringDapp.MembroSlim[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPapel",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "receiver_addr",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "qtd_ST",
				"type": "uint256"
			}
		],
		"name": "issueToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "qtdMembros",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "qtdVotos",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "codinome",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "qtd_ST",
				"type": "uint256"
			}
		],
		"name": "vote",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

// 4. Creating variables for reusable dom elements
const profaSec = document.querySelector(".profa-section");
const noobsSec = document.querySelector(".noobs-section");
const resultadoSec = document.querySelector(".votacao-section");
const membroSec = document.querySelector(".membros-section");

const issueTokenButton = document.querySelector("#issue-token");
const endVotingButton = document.querySelector("#end-voting");
const votarButton = document.querySelector("#votar");

/* 3. Prompt user to sign in to MetaMask */
const provider = new ethers.providers.Web3Provider(window.ethereum, "goerli");
provider.send("eth_requestAccounts", []).then(() => {
  provider.listAccounts().then((accounts) => {
    const signer = provider.getSigner(accounts[0]);

    /* 3.1 Create instance of smart contract */
    TDAContract = new ethers.Contract(
      Contract_Address,
      Contract_ABI,
      signer
    );

  });
});

const getPapel = async () => {
  // verifica o papel do usuário 
  // e habilitando ou bloqueia seções se necessário
  const papel = await TDAContract.getPapel();
  // console.log(papel);

  if (papel === "Profa" && resultadoSec.style.display !== "block") {
    // habilita apenas a seção da Professora
    profaSec.style.display = "block";
    noobsSec.style.display = "";
  } else if (papel === "Membro" && resultadoSec.style.display !== "block") {
    // habilita apenas a seção de Membros
    noobsSec.style.display = "block";
    profaSec.style.display = ""; 
  } else if (papel === "Nada") {  
    // bloqueia as seções
    profaSec.style.display = "";  
    noobsSec.style.display = "";
  }
}

setInterval(getPapel, 5000); 
// A cada 5 segundos verifica o papel do usuário 
// e bloqueia seções se necessário

const issueToken = () => {
  issueTokenButton.value = "Criando Turings...";

  /* Get inputs from pet form */
  const addrReceptorIn = document.querySelector("#addr-receptor");
  const qtdTurIn = document.querySelector("#qtd-tur");

  // Getting values from the inputs
  const addrReceptor = addrReceptorIn.value;
  const qtdTur = qtdTurIn.value;

  /* issueToken in smart contract */
  TDAContract.issueToken(addrReceptor, qtdTur)
    .then(() => {
      // update button value
      issueTokenButton.value = "Criado com Sucesso!";

      /* 5.4 Reset form */
      addrReceptorIn.value = "";
      qtdTurIn.value = "";

      // update button value
      issueTokenButton.value = "Mandar Bala";
    })
    .catch((err) => {
      // If error occurs, display error message
      issueTokenButton.value = "Mandar Bala";
      if (err.hasOwnProperty("error")) {
        alert(err.error.message);
      }
    });
};
issueTokenButton.addEventListener("click", issueToken);


const endVoting = () => {
  endVotingButton.value = "Finalizando Votação...";

  TDAContract.endVoting()
    .then(() => {
      // update button value
      issueTokenButton.value = "Votação Finalizada!";
    })
    .catch((err) => {
      // If error occurs, display error message
      issueTokenButton.value = "Mandar Bala";
      if (err.hasOwnProperty("error")) {
        alert(err.error.message);
      }
    });
};
endVotingButton.addEventListener("click", endVoting);


const vote = () => {
  votarButton.value = "Votando...";

  /* Get inputs from pet form */
  const codinomeIn = document.querySelector("#codinome");
  const qtdTurIn = document.querySelector("#qtd-tur-v");

  // Getting values from the inputs
  const codinome = codinomeIn.value;
  const qtdTur = qtdTurIn.value;

  /* issueToken in smart contract */
  TDAContract.vote(codinome, qtdTur)
    .then(() => {
      alert("Votado com Sucesso!");
      codinome.value = "";
      qtdTurIn.value = "";
      votarButton.value = "Mandar Bala";
    })
    .catch((err) => {
      votarButton.value = "Mandar Bala";
      if (err.hasOwnProperty("error")) {
        alert(err.error.message);
      }
    });
};
votarButton.addEventListener("click", vote);



const loadMembros = async () => {
  const membros = await TDAContract.getMembros();
  membroSec.replaceChildren();

  for (var i in membros) {
    var membro = membros[i];

    var membroDiv=document.createElement('div');
    membroDiv.classList.add("div-membro");

    var membroCode=document.createElement('div');
    membroCode.classList.add("membro-code");
    const codinome = document.createTextNode(membro["codinome"]);
    membroCode.appendChild(codinome);

    var membroVotos=document.createElement('div');
    membroVotos.classList.add("membro-votos");
    const qtdVotos = document.createTextNode(membro["qtdVotos"]);
    membroVotos.appendChild(qtdVotos);

    membroDiv.appendChild(membroCode);
    membroDiv.appendChild(membroVotos);
  
    membroSec.appendChild(membroDiv);
  }
}


const resultadoVotacao = async () => {
  profaSec.style.display = "";
  noobsSec.style.display = "";
  resultadoSec.style.display = "block";
  await loadMembros();
};

const voltarMain = async () => {
  resultadoSec.style.display = "";
  await getPapel();
};


const atualizarResults = async () => {
  await resultadoVotacao();
  alert("Atualizado!")
}