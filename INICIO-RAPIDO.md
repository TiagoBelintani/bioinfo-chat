# 🚀 Guia Rápido - 5 Minutos para seu Chat funcionando!

## Passo 1️⃣: Criar conta Groq (30 segundos)

1. Abra: https://console.groq.com
2. Clique em **Sign Up** (pode usar Google/GitHub)
3. Confirme seu email

## Passo 2️⃣: Pegar sua Chave API (30 segundos)

1. No console Groq, clique em **API Keys** (menu lateral)
2. Clique em **Create API Key**
3. Dê um nome (ex: "bioinfo-chat")
4. **COPIE A CHAVE** (começa com `gsk_...`)
   - ⚠️ IMPORTANTE: Salve em algum lugar, só aparece uma vez!

## Passo 3️⃣: Configurar o App (1 minuto)

1. Abra o arquivo `index.html` no seu editor
2. Procure por linha 342 (ou busque `YOUR_GROQ_API_KEY_HERE`)
3. Cole sua chave:

```javascript
// ANTES:
const GROQ_API_KEY = 'YOUR_GROQ_API_KEY_HERE';

// DEPOIS:
const GROQ_API_KEY = 'gsk_abc123xyz...'; // Sua chave aqui
```

4. Salve o arquivo

## Passo 4️⃣: Testar Localmente (1 minuto)

### Opção A - Simples (Python já instalado?)
```bash
cd bioinfo-chat
python3 -m http.server 8000
```
Abra: http://localhost:8000

### Opção B - Muito Simples (VS Code?)
1. Instale extensão "Live Server"
2. Clique com botão direito em `index.html`
3. Selecione "Open with Live Server"

### Opção C - Apenas abrir o arquivo
1. Clique duas vezes em `index.html`
2. Abre no navegador
   - ⚠️ Service Worker não funcionará (PWA), mas o chat sim!

## Passo 5️⃣: Deploy GRATUITO no Vercel (2 minutos)

### Primeira vez no Vercel:

1. Acesse: https://vercel.com/signup
2. Faça login com GitHub
3. Autorize o Vercel a acessar seus repositórios

### Deploy do projeto:

#### Via Interface (MAIS FÁCIL):

1. Crie um repositório GitHub com os arquivos
2. No Vercel, clique **Add New** → **Project**
3. Selecione seu repositório
4. Clique **Deploy** (não precisa configurar nada!)
5. Aguarde 30-60 segundos
6. ✅ Pronto! URL: `https://bioinfo-chat-xyz.vercel.app`

#### Via Linha de Comando:

```bash
# Instalar Vercel CLI (primeira vez)
npm install -g vercel

# Na pasta do projeto
cd bioinfo-chat

# Deploy
vercel

# Pressione Enter para todas as perguntas
# Aguarde o deploy
# Copie a URL fornecida
```

## 🎉 FEITO! Agora você tem:

✅ Um chat de bioinformática funcional  
✅ Acessível de qualquer lugar pela internet  
✅ Instalável em Android e iOS  
✅ Totalmente GRATUITO  

## 📱 Instalar no Celular

### Android (Chrome):
1. Abra seu app no Chrome
2. Toque nos ⋮ (3 pontos)
3. Selecione **"Instalar app"** ou **"Adicionar à tela inicial"**

### iPhone (Safari):
1. Abra seu app no Safari
2. Toque no botão 📤 (compartilhar)
3. Role e selecione **"Adicionar à Tela de Início"**
4. Toque em **"Adicionar"**

## 🔧 Problemas Comuns

### ❌ "Configure sua chave API do Groq"
**Solução**: Você esqueceu de colocar a chave no `index.html`

### ❌ "Erro 401 Unauthorized"
**Solução**: Chave API inválida, pegue uma nova no console Groq

### ❌ "Erro ao processar mensagem"
**Solução**: 
1. Verifique sua conexão com internet
2. Confirme que a chave está correta (sem espaços extras)
3. Veja se não excedeu os limites gratuitos (20 msgs/minuto)

### ❌ App não instala no celular
**Solução**: 
- Use sempre HTTPS (Vercel já fornece)
- Se testando local, PWA não funciona (só deploy)
- Tente adicionar à tela inicial manualmente

## 💡 Dicas

1. **Salve sua chave API** em um gerenciador de senhas
2. **Não commite** a chave no GitHub (use arquivo .env depois)
3. **Teste primeiro localmente** antes do deploy
4. **Compartilhe a URL** com colegas após o deploy

## 🎯 Próximos Passos Opcionais

- [ ] Adicionar ícones personalizados
- [ ] Configurar domínio próprio no Vercel
- [ ] Implementar backend seguro (ver README.md)
- [ ] Customizar cores e estilo

## 📚 Quer Mais Detalhes?

Veja o **README.md** completo para:
- Customizações avançadas
- Segurança da API key
- Múltiplas opções de deploy
- Troubleshooting detalhado

---

**Tempo total: ~5 minutos** ⏱️  
**Custo: R$ 0,00** 💰  
**Dificuldade: Fácil** 🟢  

Bom uso! 🧬
