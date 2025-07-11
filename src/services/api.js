import axios from 'axios'

const api = axios.create({
  baseURL: 'http://35.196.79.227:8000',
})

export async function getProdutos() {
  const response = await api.get('/products/')
  
  // Processar os produtos para construir URLs completas das imagens
  const produtos = response.data.map(produto => ({
    ...produto,
    image_path: produto.image_path 
      ? `http://35.196.79.227:8000${produto.image_path}` 
      : '/placeholder-image.jpg' // Imagem padrão se não houver imagem
  }))
  
  return produtos
}

// Outras funções para produtos, categorias, etc, podem ser adicionadas aqui futuramente. 