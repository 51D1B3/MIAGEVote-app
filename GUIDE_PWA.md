# Guide d'installation PWA - SidiVote

## 🎯 TESTER L'APPLICATION

### Option 1: Serveur local (RECOMMANDÉ)
```bash
# Avec Python 3
python -m http.server 8000

# Avec Node.js (npx)
npx serve

# Avec PHP
php -S localhost:8000
```
Puis ouvrez: http://localhost:8000

### Option 2: Extension VS Code
- Installez "Live Server"
- Clic droit sur index.html → "Open with Live Server"

## 📱 INSTALLER SUR MOBILE

### Android:
1. Ouvrez l'URL dans Chrome
2. Menu (⋮) → "Installer l'application" ou "Ajouter à l'écran d'accueil"
3. L'icône apparaît sur votre écran

### iOS:
1. Ouvrez l'URL dans Safari
2. Bouton Partager (□↑) → "Sur l'écran d'accueil"
3. L'icône apparaît sur votre écran

## 🎨 CHANGER L'ICÔNE

### Méthode rapide:
1. Ouvrez `icon-generator.html` dans votre navigateur
2. Uploadez votre logo/image
3. Téléchargez toutes les tailles générées
4. Placez-les dans le dossier `icons/`

### Mise à jour du manifest.json:
```json
"icons": [
  {
    "src": "icons/icon-192x192.png",
    "sizes": "192x192",
    "type": "image/png"
  },
  {
    "src": "icons/icon-512x512.png",
    "sizes": "512x512",
    "type": "image/png"
  }
]
```

## ✏️ CHANGER LE NOM

Modifiez dans `manifest.json`:
```json
"name": "VotreNom",
"short_name": "VotreNom"
```

## 📦 CRÉER UN .APK (Optionnel)

### Avec PWABuilder:
1. Allez sur https://www.pwabuilder.com
2. Entrez l'URL de votre PWA hébergée
3. Cliquez "Package for stores"
4. Téléchargez le .apk Android

### Avec Bubblewrap (CLI):
```bash
npm install -g @bubblewrap/cli
bubblewrap init --manifest https://votre-url.com/manifest.json
bubblewrap build
```

## ⚠️ IMPORTANT
- La PWA doit être servie en HTTPS (sauf localhost)
- Pour créer un .apk, vous devez héberger l'app en ligne
