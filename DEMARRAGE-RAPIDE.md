# 🚀 DÉMARRAGE RAPIDE - Site Plombier Électricien Finistère

## 📦 CE QUE VOUS AVEZ REÇU

Votre site Next.js professionnel complet avec :
- ✅ Design moderne et responsive
- ✅ SEO optimisé pour le Finistère (Commana)
- ✅ Schema.org pour Google Maps
- ✅ 2 services mis en avant (Plomberie + Électricité)
- ✅ robots.txt et sitemap.xml
- ✅ Prêt à déployer sur Internet

---

## 🎯 LES 5 ÉTAPES POUR METTRE EN LIGNE

### 1️⃣ INSTALLER NODE.JS (5 minutes)
1. Allez sur https://nodejs.org
2. Téléchargez la version LTS
3. Installez-le (suivez les instructions)

### 2️⃣ OUVRIR LE PROJET (2 minutes)
1. Ouvrez un terminal/command prompt
2. Naviguez vers le dossier :
   ```bash
   cd chemin/vers/plombier-finistere
   ```
3. Installez les dépendances :
   ```bash
   npm install
   ```

### 3️⃣ PERSONNALISER (30 minutes)
**Fichiers à modifier :**

**app/page.tsx** - Changez :
- `tel:+33200000000` → votre numéro
- `contact@votre-site.com` → votre email
- Votre adresse dans la section contact

**app/layout.tsx** - Changez :
- `telephone` → votre numéro
- `email` → votre email
- `streetAddress` → votre adresse
- `url` → votre future URL

**app/sitemap.ts** - Changez :
- `https://votre-site.com` → votre URL

**public/robots.txt** - Changez :
- `https://votre-site.com` → votre URL

### 4️⃣ TESTER EN LOCAL (1 minute)
```bash
npm run dev
```
Ouvrez http://localhost:3000

### 5️⃣ DÉPLOYER SUR VERCEL (10 minutes)
**Méthode simple :**
1. Créez un compte sur https://vercel.com
2. Installez Vercel CLI :
   ```bash
   npm install -g vercel
   ```
3. Déployez :
   ```bash
   vercel login
   vercel
   vercel --prod
   ```

🎉 **Votre site est en ligne !**

---

## 📚 GUIDES DISPONIBLES

Vous avez 4 guides complets dans le projet :

### 1. README.md
📘 Guide principal avec toutes les instructions

### 2. GUIDE-DEPLOIEMENT.md
🚀 Instructions détaillées pour mettre en ligne

### 3. GUIDE-IMAGES.md
📸 Comment ajouter vos photos de services

### 4. GUIDE-GOOGLE-MAPS.md
🗺️ Comment apparaître sur Google Maps

---

## 🎨 AJOUTER VOS IMAGES (optionnel)

1. Créez le dossier : `public/images/`
2. Ajoutez vos photos :
   - `plomberie.jpg`
   - `electricite.jpg`
3. Modifiez `app/page.tsx` (voir GUIDE-IMAGES.md)

---

## ✅ CHECKLIST AVANT DÉPLOIEMENT

Configuration obligatoire :
- [ ] Numéro de téléphone changé
- [ ] Email changé
- [ ] Adresse changée
- [ ] URL changée dans sitemap.ts
- [ ] URL changée dans robots.txt
- [ ] Test en local (npm run dev)

Configuration optionnelle :
- [ ] Logo ajouté
- [ ] Photos de services ajoutées
- [ ] Google Analytics configuré
- [ ] Nom de domaine acheté

---

## 🗺️ APRÈS LE DÉPLOIEMENT

### Immédiatement :
1. ✅ Créez votre Google My Business
   - https://business.google.com
   - Suivez GUIDE-GOOGLE-MAPS.md

2. ✅ Inscrivez-vous sur Google Search Console
   - https://search.google.com/search-console
   - Ajoutez votre sitemap

### Dans les 7 jours :
1. ✅ Obtenez vos premiers avis Google
2. ✅ Partagez votre site (réseaux sociaux, cartes de visite)
3. ✅ Inscrivez-vous sur Pages Jaunes

### Régulièrement :
1. ✅ Publiez sur Google My Business (1-2x/semaine)
2. ✅ Ajoutez de nouvelles photos
3. ✅ Répondez aux avis clients

---

## 📊 OPTIMISATION SEO INCLUSE

Votre site inclut déjà :
- ✅ Métadonnées optimisées pour le Finistère
- ✅ Schema.org avec coordonnées GPS Commana
- ✅ Structure HTML sémantique
- ✅ Sitemap.xml automatique
- ✅ robots.txt optimisé
- ✅ Mots-clés locaux
- ✅ Open Graph pour réseaux sociaux

**Résultat attendu :**
Score PageSpeed : 90-100/100

---

## 🎯 COORDONNÉES GPS

Votre site utilise les coordonnées exactes de Commana :
```
Latitude : 48.413057
Longitude : -3.955789
```

Ces coordonnées sont déjà configurées dans :
- ✅ app/layout.tsx (Schema.org)
- ✅ Section contact de app/page.tsx

---

## 💰 COÛTS

### GRATUIT :
- ✅ Hébergement Vercel (illimité)
- ✅ HTTPS automatique
- ✅ Bande passante
- ✅ Déploiement

### OPTIONNEL :
- Nom de domaine : ~12€/an (exemple.com)
- Google Workspace : ~5€/mois (email pro)

---

## 🆘 BESOIN D'AIDE ?

### Problème technique :
1. Lisez le README.md (section dépannage)
2. Consultez la doc Next.js : https://nextjs.org/docs
3. Forum Vercel : https://github.com/vercel/next.js/discussions

### Questions SEO/Google Maps :
- Lisez GUIDE-GOOGLE-MAPS.md
- Centre d'aide Google : https://support.google.com/business

---

## 🎨 STRUCTURE DU PROJET

```
plombier-finistere/
├── app/
│   ├── layout.tsx          → Métadonnées SEO + Schema.org
│   ├── page.tsx            → Page d'accueil
│   ├── globals.css         → Styles Tailwind
│   └── sitemap.ts          → Sitemap automatique
├── public/
│   ├── robots.txt          → Configuration robots
│   └── images/             → Vos images (à créer)
├── package.json            → Dépendances
├── next.config.js          → Configuration Next.js
├── tailwind.config.js      → Configuration Tailwind
├── tsconfig.json           → Configuration TypeScript
├── README.md               → Guide principal
├── GUIDE-DEPLOIEMENT.md    → Guide déploiement
├── GUIDE-IMAGES.md         → Guide images
└── GUIDE-GOOGLE-MAPS.md    → Guide Google Maps
```

---

## 🚀 PROCHAINES ÉTAPES

1. **Maintenant :** Personnalisez vos coordonnées
2. **Aujourd'hui :** Déployez sur Vercel
3. **Cette semaine :** Créez Google My Business
4. **Ce mois-ci :** Obtenez 10 avis Google
5. **Continue :** Ajoutez du contenu régulièrement

---

## 💡 CONSEILS D'EXPERT

1. **Photos :** Ajoutez de vraies photos de vos interventions (plus crédible que des emojis)
2. **Avis :** Demandez systématiquement des avis à vos clients satisfaits
3. **Contenu :** Publiez régulièrement sur Google My Business
4. **Réactivité :** Répondez rapidement aux messages Google
5. **Cohérence :** Utilisez les mêmes coordonnées partout (site, Google, annuaires)

---

## 📈 RÉSULTATS ATTENDUS

### 1 mois :
- ✅ Site en ligne et indexé sur Google
- ✅ Profil Google My Business vérifié
- ✅ Premières visites organiques

### 3 mois :
- ✅ Top 10 pour "plombier Commana"
- ✅ 20+ avis Google
- ✅ 50+ visites/mois

### 6 mois :
- ✅ Top 3 pour recherches locales
- ✅ 100+ visites/mois
- ✅ ROI positif

---

## 🎉 FÉLICITATIONS !

Vous avez maintenant :
- ✅ Un site professionnel et moderne
- ✅ Optimisé pour Google et Google Maps
- ✅ Prêt à générer des clients
- ✅ 4 guides complets pour réussir

**Bon succès avec votre site ! 🚀**

---

## 📞 MÉMO RAPIDE

**Commandes utiles :**
```bash
npm run dev      # Lancer en local
npm run build    # Compiler le site
vercel --prod    # Déployer en production
```

**URLs importantes :**
- Vercel : https://vercel.com
- Google My Business : https://business.google.com
- Google Search Console : https://search.google.com/search-console

**Coordonnées GPS Commana :**
- Latitude : 48.413057
- Longitude : -3.955789

---

**Date de création :** Février 2026
**Version :** 1.0
**Framework :** Next.js 14 + Tailwind CSS
