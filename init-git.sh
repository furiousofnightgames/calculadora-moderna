#!/bin/bash
# Script para inicializar o repositório Git e fazer primeiro push
# Abra este arquivo com um editor de texto e substitua SEU-USERNAME por seu usuário do GitHub

echo "Inicializando repositório Git..."
git init

echo "Adicionando arquivos..."
git add .

echo "Criando commit inicial..."
git commit -m "Initial commit: Calculadora Moderna FURIOSOFNIGHT"

echo ""
echo "Próximos passos:"
echo "1. Crie um novo repositório em https://github.com/new"
echo "2. Execute o comando abaixo (substitua SEU-USERNAME e REPO-NAME):"
echo ""
echo "git remote add origin https://github.com/SEU-USERNAME/REPO-NAME.git"
echo "git branch -M main"
echo "git push -u origin main"
echo ""
echo "3. Vá para Settings > Pages e ative GitHub Pages"
echo "4. Sua calculadora estará online em: https://SEU-USERNAME.github.io/REPO-NAME"
