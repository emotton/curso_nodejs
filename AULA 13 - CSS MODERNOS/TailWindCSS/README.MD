npx tailwindcss-cli@latest build -o tailwind.css

=====================================================
npx tailwindcss init -p

-> criar pasta src, index.html, main.css
-> main.css

@tailwind base;

@tailwind components;

@tailwind utilities;


-> Criar CSS único com base no tailwind + customizações
npx tailwindcss build src/main.css -o src/style.css

npm i win-node-env

NODE_ENV=production npx tailwindcss -i ./src/main.css -o ./src/style.css --minify

Referências
===========
https://tailwindui.com/
https://play.tailwindcss.com/
https://generated.photos/face-generator

https://www.youtube.com/watch?v=1qH3wAtX4So