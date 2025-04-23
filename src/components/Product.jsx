import React from 'react'
import { useState } from 'react'


function Product(props) {
    const {
        product: { id, nome, preco, categoria, emStock, edit },
        toggleStock,
        eliminarProduct,
        toggleEdit,
        editProduct
        
    } = props
    const [nomeEdit, setNome] = useState(nome);
    const [precoEdit, setPreco] = useState(preco);
    const [categoriaEdit, setCategoria] = useState(categoria);
      
         return( 
         <div
            className={`product ${emStock ? "in-stock" : "out-of-stock"} ${edit ? "editing" : ""}`}>
                {edit ? (
                <>
             
                 <h3> <input
                      type="text"
                      value={nomeEdit}
                      onChange={(e) => setNome(e.target.value)}
                  /></h3>
                  <h3><input
                      type="number"
                      value={precoEdit}
                      onChange={(e) => setPreco(e.target.value)}
                  /></h3>
                   <h3><input
                      type="text"
                      value={categoriaEdit}
                      onChange={(e) => setCategoria(e.target.value)}
                  /></h3>
                
              </>
                    ) :  (<div
                            className={`product ${emStock ? "in-stock" : "out-of-stock"}`}>
                            <h3 className='nome'>{nome}</h3>
                            <h3 className='preco'>{preco}</h3>
                            <h3 className='categoria'>{categoria}</h3>
                            <h3 className='edit'>{edit}</h3>
                        </div>)
                }

            <button onClick={() => toggleStock(id)}>
                {emStock ? "Em Stock" : "Fora de Stock"}
            </button>

            <button className='delete' onClick={() => eliminarProduct(id)}>
                Eliminar
            </button>

           <button className='edit' onClick={() => toggleEdit(id)}>
            {!edit ? "Editar" : "Cancelar"}
            </button>


            {edit ? <button  onClick={() => editProduct(id, {
                                                            nome: nomeEdit,
                                                            preco: precoEdit, 
                                                            categoria: categoriaEdit, 
                                                            edit: false
                                                            } 
                                                        )
                                        }>Guardar</button> : false}
                    
            
          </div>
          )
 
    
}

export default Product

