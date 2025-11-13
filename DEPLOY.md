# 🚀 Guia de Deployment no GitHub e GitHub Pages

Este guia ajudará você a fazer deploy deste projeto no GitHub e hospedá-lo gratuitamente no GitHub Pages.

## 📋 Pré-requisitos

- Conta no GitHub
- Git instalado no seu computador
- Terminal/PowerShell

## 🔧 Passo a Passo

### 1. Criar um Repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login
2. Clique no ícone **+** no canto superior direito
3. Selecione **New repository**
4. Preencha as informações:
   - **Repository name**: `calculadora-moderna` (ou outro nome que desejar)
   - **Description**: "Calculadora Moderna - FURIOSOFNIGHT"
   - **Visibility**: Selecione **Public** (necessário para GitHub Pages gratuito)
   - **Initialize this repository with**: Deixe desmarcado
5. Clique em **Create repository**

### 2. Preparar o Projeto Localmente

```powershell
# Navegue até a pasta do projeto
cd "d:\projetos finalizados\calculadora-moderna"

# Inicie um repositório Git
git init

# Adicione os arquivos ao Git
git add .

# Crie o commit inicial
git commit -m "Initial commit: Calculadora Moderna"
```

### 3. Conectar ao Repositório Remoto

Na página do repositório recém-criado, você verá uma seção "Quick setup". Execute:

```powershell
# Adicione o repositório remoto (substitua USERNAME e REPOSITORY pelos seus valores)
git remote add origin https://github.com/SEU-USERNAME/calculadora-moderna.git

# Renomeie a branch para main
git branch -M main

# Envie os arquivos para o GitHub
git push -u origin main
```

### 4. Ativar GitHub Pages

1. Acesse seu repositório no GitHub
2. Vá para **Settings** (ícone de engrenagem)
3. Na barra lateral, clique em **Pages**
4. Em "Build and deployment":
   - **Source**: Selecione **Deploy from a branch**
   - **Branch**: Selecione **main** (ou a branch que estiver usando)
   - **Folder**: Selecione **/ (root)**
5. Clique em **Save**

### 5. Aguardar o Deploy

- GitHub Pages tentará fazer deploy automaticamente
- Acesse **Settings > Pages** para ver o status
- Seu site estará disponível em: `https://SEU-USERNAME.github.io/calculadora-moderna`

## 🌐 Acessando sua Calculadora

Após o deploy ser concluído com sucesso, acesse:
```
https://SEU-USERNAME.github.io/calculadora-moderna
```

Exemplo: Se seu usuário é `joaosilva`, o URL será:
```
https://joaosilva.github.io/calculadora-moderna
```

## 📝 Atualizando o Projeto

Para fazer mudanças no projeto:

```powershell
# 1. Faça as alterações nos arquivos

# 2. Adicione os arquivos modificados
git add .

# 3. Crie um commit com uma mensagem descritiva
git commit -m "Descrição das mudanças"

# 4. Envie para o GitHub
git push origin main
```

GitHub Pages será atualizado automaticamente em alguns segundos.

## 🔗 URLs Úteis

- **Seu repositório**: `https://github.com/SEU-USERNAME/calculadora-moderna`
- **Sua calculadora ao vivo**: `https://SEU-USERNAME.github.io/calculadora-moderna`

## ❓ Dúvidas Frequentes

**P: Por que removi o Flask?**
R: GitHub Pages só hospeda arquivos estáticos (HTML, CSS, JavaScript). A versão estática funciona completamente sem um servidor backend.

**P: Como desenvolver localmente?**
R: Basta abrir o arquivo `index.html` diretamente no navegador, ou use um servidor local como:
```powershell
# Com Python 3
python -m http.server 8000

# Depois acesse: http://localhost:8000
```

**P: Posso usar o Flask também?**
R: Sim! Você pode manter o `app.py` para desenvolvimento local e deploy em plataformas como Heroku, Render ou Railway. Mas o GitHub Pages só hospedará a versão estática.

## 📞 Suporte

Para problemas com GitHub Pages, consulte a [documentação oficial](https://docs.github.com/en/pages).
