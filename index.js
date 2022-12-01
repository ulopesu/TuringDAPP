// 1. Declare global variable to store the smart contract instance
let PetContract;

// 2. Set contract address and ABI
const Pet_Contract_Address = "0x76f35087640825606A5077F44701cf67eb0E83f1";
const Pet_Contract_ABI = [
  {
    inputs: [
      {
        internalType: "string",
        name: "newPetName",
        type: "string",
      },
      {
        internalType: "string",
        name: "newPetOwner",
        type: "string",
      },
      {
        internalType: "string",
        name: "newPetAge",
        type: "string",
      },
    ],
    name: "setPet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getPet",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "petAge",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "petName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "petOwner",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

/* 3. Prompt user to sign in to MetaMask */
const provider = new ethers.providers.Web3Provider(window.ethereum, "goerli");
provider.send("eth_requestAccounts", []).then(() => {
  provider.listAccounts().then((accounts) => {
    const signer = provider.getSigner(accounts[0]);

    /* 3.1 Create instance of pet smart contract */
    PetContract = new ethers.Contract(
      Pet_Contract_Address,
      Pet_Contract_ABI,
      signer
    );
  });
});

// 4. Creating variables for reusable dom elements
const profaSec = document.querySelector(".profa-section");
const noobsSec = document.querySelector(".noobs-section");
const voteSection = document.querySelector(".vote-section");

const issueTokenButton = document.querySelector("#issue-token");
const endVotingButton = document.querySelector("#end-voting");
const votarButton = document.querySelector("#votar");

/* 5. Function to set pet details */
const issueToken = () => {
  setPetButton.value = "Criando Turings...";

  /* 5.1 Get inputs from pet form */
  const addrReceptorIn = document.querySelector("#addr-receptor");
  const qtdTurIn = document.querySelector("#qtd-tur");

  // 5.2 Getting values from the inputs
  addrReceptor = addrReceptorIn.value;
  qtdTur = qtdTurIn.value;

  /* 5.3 Set pet details in smart contract */
  PetContract.setPet(addrReceptor, qtdTur)
    .then(() => {
      // update button value
      setPetButton.value = "Criado com Sucesso!";

      /* 5.4 Reset form */
      addrReceptor.value = "";
      qtdTur.value = "";

      // update button value
      setPetButton.value = "Mandar Bala";
    })
    .catch((err) => {
      // If error occurs, display error message
      setPetButton.value = "Mandar Bala";
      alert("Error setting pet details" + err.message);
    });
};

issueTokenButton.addEventListener("click", issueToken);



/// FEITO DAQUI PRA CIMA!!!








/* 6. Function to get pet details */
const getCurrentPet = async () => {
  setPetButton.value = "Getting Pet...";

  /* 6.1 Get pet details from smart contract */
  const pet = await PetContract.getPet();

  /* 6.2 Display the pet details section 
  and
  Hide the pet form in the DOM */
  petSection.style.display = "block";
  petFormSection.style.display = "none";

  /* 6.3 Pet is an array of 3 strings [petName, petOwner, petAge] */
  const petName = pet[0];
  const petOwner = pet[1];
  const petAge = pet[2];

  /* 6.4 Display pet details in DOM */
  document.querySelector(".pet-detail-name").innerText = petName;
  document.querySelector(".pet-detail-owner").innerText = petOwner;
  document.querySelector(".pet-detail-age").innerText = petAge;
};

/* 7. Function to show the pet form on click of button */
showPetFormBtn.addEventListener("click", () => {
  petSection.style.display = "none";
  petFormSection.style.display = "block";
  setPetButton.value = "Submit";
});

/* 8. Function to refresh pet details */
refreshBtn.addEventListener("click", (e) => {
  e.target.innerText = "Refreshing...";
  getCurrentPet().then(() => {
    e.target.innerText = "Refreshed";
    setTimeout(() => {
      e.target.innerText = "Refresh";
    }, 2000);
  });
});
