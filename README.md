# 🧬 BioInfo Chat - PWA para Bioinformática

Chat gratuito especializado em **Filogenômica, UCEs e Pipelines Bioinformáticos**, funcionando em Android e iOS como Progressive Web App (PWA).

## 🚀 Características

- ✅ **Totalmente Gratuito** - Usa API gratuita do Groq
- 📱 **Android & iOS** - Instalável como app nativo
- 🔬 **Especializado** - Conhecimento profundo em bioinformática
- 💨 **Rápido** - Powered by Llama 3.1 70B
- 🌐 **Offline Ready** - Service Worker para cache
- 🎨 **Interface Moderna** - Design responsivo e intuitivo

## 📋 Pré-requisitos

1. **Conta gratuita no Groq**: https://console.groq.com
2. **Conta GitHub** (para deploy no Vercel)
3. Navegador moderno

## ⚙️ Configuração Rápida

### Passo 1: Obter Chave API Groq (GRATUITO)

1. Acesse: https://console.groq.com
2. Crie uma conta gratuita
3. Vá em **API Keys**
4. Clique em **Create API Key**
5. Copie sua chave (formato: `gsk_...`)

### Passo 2: Configurar o Projeto

1. Abra o arquivo `index.html`
2. Localize a linha 342:
```javascript
const GROQ_API_KEY = 'YOUR_GROQ_API_KEY_HERE';
```
3. Substitua por sua chave:
```javascript
const GROQ_API_KEY = 'gsk_sua_chave_aqui';
```

### Passo 3: Deploy no Vercel (GRATUITO)

#### Opção A: Via Interface Web

1. Acesse: https://vercel.com
2. Faça login com GitHub
3. Clique em **Add New** → **Project**
4. Importe seu repositório
5. Configure:
   - **Framework Preset**: Other
   - **Build Command**: (deixe vazio)
   - **Output Directory**: `./`
6. Clique em **Deploy**
7. Pronto! Seu app estará em: `https://seu-projeto.vercel.app`

#### Opção B: Via Linha de Comando

```bash
# Instalar Vercel CLI
npm install -g vercel

# Na pasta do projeto
cd bioinfo-chat

# Deploy
vercel

# Seguir instruções interativas
```

### Passo 4: Tornar Instalável no Celular

#### Android:
1. Abra o app no Chrome
2. Toque nos 3 pontos → **Instalar app** ou **Adicionar à tela inicial**
3. Pronto! O app aparecerá como ícone no celular

#### iOS:
1. Abra o app no Safari
2. Toque no botão de compartilhar 📤
3. Selecione **Adicionar à Tela de Início**
4. Confirme

## 🎯 Funcionalidades Especializadas

O chatbot é especializado em:

### 🧪 Pipelines UCE
- PHYLUCE
- HybPiper
- SECAPR
- ipyrad

### 🌳 Filogenômica
- RAxML
- IQ-TREE
- MrBayes
- BEAST

### ⚙️ Bioinformática Geral
- NGS data processing
- Assembly (genomas/transcriptomas)
- Alignment e filtering
- Quality control
- Python/R/Bash scripts

### 📊 Análises
- Troubleshooting de erros
- Otimização de parâmetros
- Melhores práticas
- Interpretação de resultados

## 📁 Estrutura do Projeto

```
bioinfo-chat/
├── index.html          # App principal
├── manifest.json       # Configuração PWA
├── sw.js              # Service Worker (cache offline)
├── README.md          # Este arquivo
└── vercel.json        # Configuração Vercel (opcional)
```

## 🔧 Customização

### Mudar o Modelo de IA

No arquivo `index.html`, linha 384, você pode trocar o modelo:

```javascript
model: 'llama-3.1-70b-versatile', // Atual (recomendado)

// Outras opções gratuitas no Groq:
// 'llama-3.1-8b-instant'      // Mais rápido, menos preciso
// 'mixtral-8x7b-32768'        // Ótimo para código
// 'gemma2-9b-it'              // Alternativa leve
```

### Ajustar Personalidade

Modifique o `SYSTEM_PROMPT` (linha 350-364) para mudar o foco:

```javascript
const SYSTEM_PROMPT = `Você é um especialista em [SUA ÁREA]...`;
```

### Adicionar Mais Sugestões

No HTML (linhas 234-250), adicione novos botões:

```html
<button class="suggestion-btn" onclick="sendSuggestion(this)">
    <strong>🔬 Seu Tópico</strong>
    Sua pergunta exemplo
</button>
```

## 🌐 Alternativas de Deploy Gratuito

Além do Vercel, você pode usar:

### Netlify
```bash
# Netlify CLI
npm install -g netlify-cli
netlify deploy
```

### GitHub Pages
1. Suba os arquivos para um repositório GitHub
2. Vá em **Settings** → **Pages**
3. Selecione branch `main` e pasta `/ (root)`
4. Salvar

### Cloudflare Pages
1. Acesse: https://pages.cloudflare.com
2. Conecte seu repositório GitHub
3. Deploy automático

## 🔒 Segurança da API Key

**IMPORTANTE**: A chave API ficará visível no código do navegador. Para uso em produção:

### Opção Segura (Backend Simples)

Crie uma função serverless no Vercel:

1. Crie pasta `api/chat.js`:

```javascript
export default async function handler(req, res) {
  const GROQ_API_KEY = process.env.GROQ_API_KEY;
  
  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${GROQ_API_KEY}`
    },
    body: JSON.stringify(req.body)
  });
  
  const data = await response.json();
  res.json(data);
}
```

2. Configure variável de ambiente no Vercel:
   - Settings → Environment Variables
   - Adicione: `GROQ_API_KEY` = sua chave

3. No `index.html`, mude a URL da API:
```javascript
const response = await fetch('/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ ... })
});
```

## 📊 Limites Gratuitos Groq

- **20 requisições/minuto**
- **6000 tokens/minuto**
- **Uso pessoal ilimitado**

Para projetos com alto tráfego, considere implementar rate limiting.

## 🐛 Troubleshooting

### "Configure sua chave API do Groq"
→ Você esqueceu de adicionar a chave no `index.html`

### "Erro 401" 
→ Chave API inválida, regenere no console Groq

### "Erro 429"
→ Limite de taxa excedido, aguarde 1 minuto

### App não instala no celular
→ Certifique-se que está acessando via HTTPS (Vercel já fornece)

### Service Worker não funciona
→ PWA só funciona em HTTPS ou localhost

## 🎨 Ícones do App

Para adicionar ícones personalizados:

1. Crie ícones PNG:
   - `icon-192.png` (192x192px)
   - `icon-512.png` (512x512px)

2. Use ferramentas como:
   - https://realfavicongenerator.net
   - https://www.pwabuilder.com

3. Coloque os arquivos na pasta raiz

## 📱 Preview Online

Acesse uma demo: `https://seu-projeto.vercel.app`

## 🤝 Contribuindo

Sugestões e melhorias são bem-vindas! Você pode:

1. Adicionar mais pipelines especializados
2. Melhorar prompts do sistema
3. Adicionar mais ferramentas bioinformáticas
4. Traduzir para outros idiomas

## 📄 Licença

MIT License - Use livremente!

## 🔗 Links Úteis

- **Groq Console**: https://console.groq.com
- **Vercel**: https://vercel.com
- **PWA Docs**: https://web.dev/progressive-web-apps
- **PHYLUCE**: https://phyluce.readthedocs.io
- **HybPiper**: https://github.com/mossmatters/HybPiper

## 💡 Próximos Passos

- [ ] Adicionar suporte para upload de arquivos (FASTA, VCF)
- [ ] Integrar visualizações de árvores filogenéticas
- [ ] Adicionar exemplos de scripts prontos
- [ ] Implementar histórico de conversas persistente
- [ ] Modo escuro

## 📧 Suporte

Dúvidas? Abra uma issue no GitHub ou entre em contato!

---

**Desenvolvido com ❤️ para a comunidade de Bioinformática**
