<template>
    <div class="fixador" >
    <div class="whitebar"></div>
    <header>
        <a class="logo desktop" href="">
        <img src="../components/img/LOGOMANYA-Photoroom.png" alt="" />
        </a>
        <div class="input desktop">
            <input type="text" placeholder="Mangás google buscar" />
            <img src="../components/img/LupaFinal.png" alt="" />
        </div>
        <div class="botoes desktop">
            <button>
                <p>Entrar</p>
                <img src="../components/img/usuariofinal.png" alt="" />
            </button>
            <button>
                <p>Pedidos</p>
                <img src="../components/img/listafinal.png" alt="" />
            </button>
            <button>
            <p>Carrinho</p>
            <img src="../components/img/carrinhofinal.png" alt="" />
            </button>
        </div>
        <div class="topo-mobile mobile">
            <a class="logo" href="">
            <img src="../components/img/ManyaLogo-Photoroom.png" alt="" />
            </a>
            <div class="botoes">
                <button>
                <p>Entrar</p>
                <img src="../components/img/usuariofinal.png" alt="" />
                </button>
                <button>
                <p>Pedidos</p>
                <img src="../components/img/listafinal.png" alt="" />
                </button>
                <button>
                <p>Carrinho</p>
                <img src="../components/img/carrinhofinal.png" alt="" />
                </button>
            </div>
        </div>
        <div class="input mobile">
            <input type="text" placeholder="Pesquisar" />
            <img src="../components/img/LupaFinal.png" alt="" />
        </div>
    </header>

    <div class="Categorias">
        <a href=""> <img src="../components/img/listafinal.png" alt=""> <p>Categorias</p></a>
        <a href=""> <img src="../components/img/Lancamentofinal-Photoroom.png" alt=""> <p>Lançamentos</p></a>
        <a href=""> <img src="../components/img//Livrofinalverdadeiro-Photoroom.png" alt=""> <p>Livros</p></a>
        <a href=""> <img src="../components/img/mangáfinal.png" alt=""> <p>Mangás</p></a>
        <a href=""> <img src="../components/img/pincel.png" alt=""> <p>Artbooks</p></a>
        <a href=""> <img src="../components/img/ofertasfinal.png" alt=""> <p>Ofertas</p></a>
        <a href=""> <img src="../components/img/Tudofinal-Photoroom.png" alt=""> <p>Tudo</p></a>
    </div>
</div>
</template>

<script setup></script>

<style scoped>

.fixador {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
}

header {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffffde;
    min-height: 16vh;
    gap: 6vw;
    flex-wrap: wrap;
    padding: 10px;
}

.logo {
    position: relative;
    left: 20px;
    width: 12%;
    display: flex;
}

.logo img {
    width: auto;
    height: 14vh;
    filter: invert(1);
}

.input {
    display: flex;
    align-items: center;
    background-color: #ffffff;
    border-radius: 30px;
    padding: 0 20px;
    width: 36vw;
    height: 45px;
    gap: 10px;
    flex-shrink: 1;
    border: 1px solid #000000;
}

.input img {
    width: auto;
    height: 4vh;
    filter: brightness(40%);
}

input {
    width: 36vw;
    border: none;
    outline: none;
    background-color: transparent;
    min-width: 100px;
    font-size: 16px;
    color: #333;
}

input::placeholder {
    color: #888;
    font-style: italic;
}

.botoes {
    display: flex;
    gap: 10px;
    font-size: 15px;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    right: 15px;
}

button {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #000000;
    white-space: nowrap;
    background: transparent;
    border: none;
    border-radius: 15px;
    padding: 6px 12px;
    cursor: pointer;
    transition: color 0.2s ease;
    font-weight: 500;
    font-size: 14px;
}

button:hover {
    color: #63b3ed;
}

button img {
    width: auto;
    height: 3vh;
    transition: filter 0.2s ease;
}

button:hover img {
    filter: brightness(0) invert(45%) sepia(65%) saturate(1050%) hue-rotate(160deg) brightness(115%) contrast(100%);
}

.mobile {
    display: none;
}

@media (max-width: 768px) {
    .desktop {
        display: none;
    }
    .mobile {
        display: flex;
    }
    header {
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }

    .topo-mobile {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 90vw;
    }

    .topo-mobile .logo {
        justify-content: flex-start;
        width: auto;
    }

    .topo-mobile .logo img {
        height: 7vh;
    }

    .input {
        width: 90vw;
    }

    input {
        width: 75vw;
    }

    .botoes {
        gap: 20px;
        flex-wrap: nowrap;
        justify-content: flex-end;
    }

    button p {
        font-size: 14px;
    }

    button img {
        height: 4vh;
    }

    .logo {
        position: static;
    }
}


.Categorias {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 7.5vh;
    background: #06080ae8;
    color: #ffffff;
    font-size: 14px;
    gap: 70px;

}

.Categorias img {
    width: 1.1vw;
    min-width: 12px;
    height: auto;
    filter: brightness(0) invert(1);
    transition: all 0.3s ease;
}

.Categorias a {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 5px 10px;
    border-radius: 10px;
    transition: color 0.2s ease;
}

.Categorias a:hover {
    color: #63b3ed;
}

.Categorias a:hover img {
    filter: brightness(0) invert(45%) sepia(65%) saturate(1050%) hue-rotate(160deg) brightness(115%) contrast(100%);
}

@media (max-width: 950px) {
    .Categorias a:nth-child(3),
    .Categorias a:nth-child(5),
    .Categorias a:nth-child(4) {
        display: none;
    }
    .Categorias {
        gap: 55px;
    }
}

@media (max-width: 550px) {
    .Categorias a:nth-child(6) {
        display: none;
    }
    .Categorias {
        gap: 40px;
    }
}

.whitebar {
    height: 30px;
    background: #f8f9fa;

}
</style>
