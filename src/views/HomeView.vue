<template>
    <div id="main">
        <div class="containerPreco">
            <div class="preco">
                <span>R$ 678</span>
            </div>
            <div class="dia"></div>
        </div>
    </div>
</template>


<style scoped>

#main {
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: black;
}

.containerPreco {
    display: flex;
    justify-content: space-around;
    gap: 20px;
    width: 100%;
    height: 500px;
    margin: 20px;
}

.preco {
    max-width: 80%;
    height: 100px;
    background-color: white;
    border-radius: 15px;
    padding: 30px;

}

.dia {
    width: 80%;
    height: 100px;
    background-color: white;
    border-radius: 15px;

}
</style>
