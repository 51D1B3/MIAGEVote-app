# Résolution problème APK invalide

## Causes possibles:

### 1. Manifest.json invalide
✅ **CORRIGÉ** - Changements effectués:
- `"purpose": "any"` au lieu de `"any maskable"`
- `"start_url": "./"` au lieu de `"/index.html"`
- Ajout de `"scope": "./"`
- Chemins icônes sans `./` au début

### 2. Icônes manquantes ou invalides
Vérifiez que `icons/mon_logo-app.png` existe et est une vraie image PNG.

### 3. Service Worker problématique
Le service worker doit utiliser des chemins relatifs.

### 4. APK non signé correctement
PWABuilder génère parfois des APK de test non signés.

## Solutions:

### Solution 1: Re-générer l'APK
1. Poussez les corrections sur GitHub:
```bash
git add .
git commit -m "Fix manifest for APK"
git push
```

2. Attendez 2-3 minutes que GitHub Pages se mette à jour

3. Testez votre PWA dans Chrome mobile d'abord:
   - Ouvrez `https://VOTRE_USERNAME.github.io/VOTRE_REPO/`
   - Menu → "Installer l'application"
   - Si ça marche, continuez

4. Re-générez l'APK sur https://www.pwabuilder.com

### Solution 2: Utiliser l'APK signé
Sur PWABuilder, téléchargez le fichier `.aab` au lieu du `.apk`, puis:
- Uploadez le `.aab` sur Google Play Console (si vous avez un compte développeur)
- OU utilisez bundletool pour convertir en APK signé

### Solution 3: Installer directement la PWA (RECOMMANDÉ)
Au lieu d'utiliser un APK:
1. Ouvrez votre app sur mobile: `https://VOTRE_USERNAME.github.io/VOTRE_REPO/`
2. Chrome → Menu → "Installer l'application"
3. L'icône apparaît sur l'écran d'accueil comme une vraie app

## Vérification avant de re-générer l'APK:

1. Testez sur https://www.pwabuilder.com
   - Entrez votre URL
   - Vérifiez le score PWA (doit être > 80)

2. Vérifiez le manifest:
   - Ouvrez DevTools (F12) → Application → Manifest
   - Vérifiez qu'il n'y a pas d'erreurs

3. Vérifiez les icônes:
   - DevTools → Application → Manifest → Icons
   - Les icônes doivent s'afficher
