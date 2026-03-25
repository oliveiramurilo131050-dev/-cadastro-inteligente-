const nome = document.getElementById('nome');
const email = document.getElementById('email');
const senha = document.getElementById('senha');

// Eventos
nome.addEventListener('blur', () => validarCampo(nome, validarNome));
email.addEventListener('blur', () => validarCampo(email, validarEmail));
senha.addEventListener('input', () => validarCampo(senha, validarSenha));
senha.addEventListener('blur', () => validarCampo(senha, validarSenha)); // extra

// Função genérica de validação
function validarCampo(input, funcaoValidadora) {
  const msgErro = document.getElementById(input.id + '-error');
  if (!msgErro) return; // evita erro se não existir elemento

  const resultado = funcaoValidadora(input.value);

  if (!resultado.valido) {
    input.classList.add('error');
    input.classList.remove('success');
    msgErro.textContent = resultado.mensagem;
  } else {
    input.classList.remove('error');
    input.classList.add('success');
    msgErro.textContent = '';
  }
}

// Validação do nome
function validarNome(valor) {
  if (!valor.trim()) {
    return { valido: false, mensagem: '⚠️ Nome é obrigatório' };
  }

  if (valor.length < 3) {
    return { valido: false, mensagem: '⚠️ Mínimo 3 caracteres' };
  }

  return { valido: true };
}

// Validação de email
function validarEmail(valor) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!valor) {
    return { valido: false, mensagem: '⚠️ E-mail obrigatório' };
  }

  if (!regex.test(valor)) {
    return { valido: false, mensagem: '⚠️ Formato inválido' };
  }

  return { valido: true };
}

// Validação de senha
function validarSenha(valor) {
  if (valor.length < 8) {
    return { valido: false, mensagem: '⚠️ Mínimo 8 caracteres' };
  }

  if (!/[A-Z]/.test(valor)) {
    return { valido: false, mensagem: '⚠️ Precisa de 1 letra maiúscula' };
  }

  if (!/[0-9]/.test(valor)) {
    return { valido: false, mensagem: '⚠️ Precisa de 1 número' };
  }

  return { valido: true };
}
