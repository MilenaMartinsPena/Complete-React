import { useState } from 'react'
import './App.css'
import productsJson from './assets/products.json'
import Product from './components/Product'

function App() {

  const [products, setProducts] = useState(productsJson)
  const [nome, setNome] = useState("")
  const [preco, setPreco] = useState("")
  const [categoria, setCategoria] = useState("")
  const [message, setMessage] = useState("")
 
  

  const eliminarProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId))
  }

  const toggleStock = (productId) => {

    const productsCopy = [...products]

    // Encontrar o product com o id que queremos alterar
    const productToToggle = productsCopy.find(product => product.id === productId)
    productToToggle.emStock = !productToToggle.emStock

    setProducts(productsCopy)

  }

  const toggleEdit = (productId) => {
    
    const productsCopy = [...products]
    const productToToggle = productsCopy.find(product => product.id === productId)
    productToToggle.edit = !productToToggle.edit
    
    setProducts(productsCopy)
   
  }


  const editProduct = (id, novosDados) => {
    setProducts(products.map(product =>
      product.id === id ? { ...product, ...novosDados } : product
    ));

   
  }
   
  const addProduct = (nome, preco, categoria) => {
    // adiciona um botão com dados dummy

    const newProduct = {
      id: Date.now(),
      nome,
      preco,
      categoria,
      emStock: true,
      edit: false
    }

    setProducts([newProduct, ...products])
  }
 

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!nome || !preco || !categoria) {
      setMessage("Please fill all the fields.")
      return
    }

    const form = e.target
    addProduct(form.nome.value, form.preco.value, form.categoria.value)
    
    setNome("")
    setPreco("")
    setCategoria("")

    setMessage("Product Inserted.")
  }

  return (<div className='App'>

    <h3>Adicionar Produto</h3>

    <form onSubmit={handleSubmit} className='add-product'>
      <div className='form-control'>
        <label htmlFor="nome">Nome</label>
        <input onChange={(e) => setNome(e.target.value)} value={nome} name='nome' type="text" />
      </div>
      <div className='form-control'>
        <label htmlFor="preco">Preço</label>
        <input onChange={(e) => setPreco(e.target.value)} value={preco} name='preco' type="number" />
      </div>
      <div className='form-control'>
        <label htmlFor="categoria">Categoria</label>
        <input onChange={(e) => setCategoria(e.target.value)} value={categoria} name='categoria' type="text" />
      </div>

      <div>
        {message}
      </div>

      <button type='submit' className='add'> Adicionar </button>
    </form>


    <div className='products'>
      {products.map(product =>
        <Product
          key={product.id}
          product={product}
          toggleStock={toggleStock}
          eliminarProduct={eliminarProduct}
          toggleEdit={toggleEdit}
          editProduct={editProduct}
        />)}
    </div>
  </div>
  )
}

export default App
