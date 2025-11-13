# ✅ PRÉ-DEPLOY CHECKLIST

Antes de fazer o deploy, verifique se tudo está pronto:

## 📋 Arquivos do Projeto
- [x] `index.html` - Página principal na raiz (NÃO em templates/)
- [x] `static/css/style.css` - Estilos
- [x] `static/js/script.js` - Lógica da calculadora
- [x] `static/img/fundo.jpg` - Imagem de fundo (opcional)
- [x] `README.md` - Documentação
- [x] `.gitignore` - Configuração Git
- [x] `.github/workflows/deploy.yml` - Automação (opcional)

## 🔧 Configurações
- [x] Repositório criado no GitHub (Public)
- [x] Git inicializado localmente
- [x] Remote adicionado
- [x] Primeiro commit feito
- [x] Push para main executado

## 🌐 GitHub Pages
- [x] Ativado em Settings > Pages
- [x] Source definido como: Deploy from a branch
- [x] Branch selecionada: main
- [x] Folder selecionado: / (root)

## ✨ Qualidade
- [x] Todos os links são relativos (não absolutos)
- [x] Imagens carregam corretamente
- [x] JavaScript funciona sem erros
- [x] Site é responsivo (testado em mobile)

## 🚀 Deploy Final
Execute este comando no PowerShell:

```powershell
git status  # Verifique se não há mudanças pendentes
git push origin main  # Envie para GitHub
```

Após enviar, aguarde 1-2 minutos para GitHub Pages processar o deploy.

Acesse seu site em:
```
https://SEU-USERNAME.github.io/calculadora-moderna
```

---

## 📞 Caso algo não funcione

1. Verifique se o repositório é **Public**
2. Confira se `index.html` está na **raiz** (não em subpasta)
3. Verifique os **caminhos das imagens** no CSS
4. Vá em Settings > Pages e confirme o status do deploy

Boa sorte! 🎉
