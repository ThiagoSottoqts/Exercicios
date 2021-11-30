function entrar() {
    let inputNome = prompt('Digite o seu Nome:')
    let inputCpf = prompt('Digite o seu Cpf:')
    let inputRg = prompt('Digite o seu Rg:')
  
    
    if (inputNome === '' || inputCpf === ''  || inputRg === '') {
      alert('Preencha os campos corretamente!')
      
    } else if (inputNome !== '' || !inputCpf !== ''  || !inputRg !== '') {
        alert('Cadastro realizado com sucesso')
        
    }

    

    let cpf = parseInt(inputCpf)
    let rg = parseInt(inputRg)
    
}