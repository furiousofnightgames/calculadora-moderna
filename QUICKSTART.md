# 🚀 GUIA RÁPIDO - Deploy em 5 Minutos

## Pré-requisitos
- Git instalado
- Conta no GitHub

## ⚡ Passo a Passo Rápido

### 1️⃣ Crie o repositório no GitHub
- Acesse https://github.com/new
- Nome: `calculadora-moderna`
- Deixe **Public** ✅
- Clique "Create repository"

### 2️⃣ Faça o primeiro push (copie e cole no PowerShell)

```powershell
cd "d:\projetos finalizados\calculadora-moderna"
git init
git add .
git commit -m "Initial commit: Calculadora Moderna"
git branch -M main
git remote add origin https://github.com/SEU-USERNAME/calculadora-moderna.git
git push -u origin main
```

**⚠️ Substitua `SEU-USERNAME` pelo seu usuário do GitHub!**

### 3️⃣ Ative GitHub Pages
1. Vá para seu repositório
2. **Settings** → **Pages**
3. Em "Source" selecione: **Deploy from a branch**
4. Branch: **main**
5. Folder: **/ (root)**
6. Salve

### 4️⃣ Pronto! 🎉
Sua calculadora estará disponível em:
```
https://SEU-USERNAME.github.io/calculadora-moderna
```

---

## 📝 Para Futuras Atualizações

```powershell
# Faça as alterações nos arquivos
# Depois execute:

git add .
git commit -m "Descrição da mudança"
git push origin main
```

GitHub Pages será atualizado automaticamente!

---

## ❓ Dúvidas?

Veja o arquivo `DEPLOY.md` para instruções detalhadas.
