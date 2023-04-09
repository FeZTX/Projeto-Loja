<template>
  <div id="main">
    <div class="containerCabecalho">
      <div class="subCabecalho">
        <div class="cabecalhoPreco">
          <div class="precoUnit">
            <span id="precProd">Unit: R$ 200,00</span>
          </div>
          <div class="containerValores">
            <div class="vlrTotal">
              <span id="vlrTotal">Total: R$ 200,00</span>
            </div>
            <div class="vlrTroco">
              <span id="vlrTroco">Troco: R$ 200,00</span>
            </div>
          </div>
        </div>
        <div class="cabecalhoDesc">
          <span id="descProd">Salada de Fruta</span>
          <div class="sobreProd">
            <p id="sobreProd">
              Saladinha de Fruta muito boa com muitos nutrientes
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  --textColor: white;
}

#main {
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: black;
}

.containerCabecalho {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 20vh;
  border: 1px solid red;
}

.subCabecalho {
  display: flex;
  justify-content: space-between;
  margin: 20px;
  width: 100%;
  border: 1px solid green;
}

.cabecalhoPreco {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid blue;
  width: 20vw;
  padding: 0.8% 1%;
}

#precProd {
  color: var(--textColor);
}

.containerValores {
  display: flex;
}

.vlrTotal {
  border: 1px solid blueviolet;
  width: 50%;
}

#vlrTotal {
  color: var(--textColor);
}

.vlrTroco {
  border: 1px solid firebrick;
  width: 50%;
}

#vlrTroco {
  color: var(--textColor);
}

.cabecalhoDesc {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  border: 1px solid rgb(255, 238, 0);
  padding: 0.8% 1%;
  overflow: auto;
}

.sobreProd {
  border: 1px solid aqua;
  height: 50%;
}

#descProd {
  font-size: 25pt;
  font-weight: bold;
  color: var(--textColor);
}

#sobreProd {
  font-size: 80%;
  color: var(--textColor);
}
</style>
