# 🚀 GUIDE COMPLET DE DÉPLOIEMENT
## Mettre votre site en ligne sur Internet (GRATUIT)

---

## 🎯 OPTION 1 : VERCEL (LA PLUS SIMPLE - RECOMMANDÉE)

### Pourquoi Vercel ?
- ✅ 100% GRATUIT pour toujours
- ✅ Hébergement ultra-rapide
- ✅ HTTPS automatique (sécurisé)
- ✅ Mises à jour en 1 clic
- ✅ Support Next.js natif

---

### MÉTHODE A : Déploiement avec GitHub (RECOMMANDÉE)

#### Étape 1 : Créer un compte GitHub
1. Allez sur https://github.com
2. Cliquez sur "Sign up"
3. Créez votre compte (gratuit)

#### Étape 2 : Installer GitHub Desktop (pour débutants)
1. Téléchargez GitHub Desktop : https://desktop.github.com
2. Installez-le sur votre ordinateur
3. Connectez-vous avec votre compte GitHub

#### Étape 3 : Créer un repository
1. Ouvrez GitHub Desktop
2. Cliquez sur "File" → "Add local repository"
3. Sélectionnez votre dossier `plombier-finistere`
4. Cliquez sur "Create repository"
5. Ajoutez un message : "Premier commit"
6. Cliquez sur "Publish repository"

#### Étape 4 : Connecter Vercel à GitHub
1. Allez sur https://vercel.com
2. Cliquez sur "Sign up"
3. Choisissez "Continue with GitHub"
4. Autorisez Vercel à accéder à GitHub

#### Étape 5 : Importer votre projet
1. Dans Vercel, cliquez sur "Add New" → "Project"
2. Trouvez votre repository "plombier-finistere"
3. Cliquez sur "Import"
4. **Ne touchez à RIEN dans les paramètres**
5. Cliquez sur "Deploy"

⏳ **Attendez 2-3 minutes...**

🎉 **TERMINÉ !** Votre site est en ligne !

Vous recevrez une URL comme :
`https://plombier-finistere.vercel.app`

---

### MÉTHODE B : Déploiement direct (sans GitHub)

#### Étape 1 : Créer un compte Vercel
1. Allez sur https://vercel.com
2. Inscrivez-vous avec votre email

#### Étape 2 : Installer Vercel CLI
Ouvrez votre terminal et tapez :
```bash
npm install -g vercel
```

#### Étape 3 : Se connecter
```bash
vercel login
```
Suivez les instructions (vérifiez votre email).

#### Étape 4 : Déployer
Dans le dossier de votre projet :
```bash
vercel
```

Répondez aux questions :
- Set up and deploy? → **Y** (Oui)
- Which scope? → Choisissez votre compte
- Link to existing project? → **N** (Non)
- What's your project's name? → **plombier-finistere**
- In which directory is your code located? → **./** (juste appuyez sur Entrée)

⏳ Patientez...

#### Étape 5 : Déploiement en production
```bash
vercel --prod
```

🎉 Votre site est maintenant en ligne sur Internet !

---

## 🌐 OBTENIR UN NOM DE DOMAINE PERSONNALISÉ

### Avec votre propre domaine (exemple.com)

#### Étape 1 : Acheter un nom de domaine
Achetez un domaine sur :
- **OVH** (français) : https://www.ovh.com
- **Namecheap** : https://www.namecheap.com
- **GoDaddy** : https://www.godaddy.com

**Prix** : environ 10-15€/an pour un .com ou .fr

#### Étape 2 : Connecter le domaine à Vercel

##### Dans Vercel :
1. Allez dans votre projet
2. Cliquez sur "Settings" → "Domains"
3. Cliquez sur "Add"
4. Entrez votre nom de domaine : `monsite.com`
5. Vercel vous donnera des instructions DNS

##### Dans votre fournisseur de domaine (OVH, etc.) :
1. Allez dans la gestion DNS
2. Ajoutez ces enregistrements :

**Type A :**
```
@ → 76.76.21.21
```

**Type CNAME :**
```
www → cname.vercel-dns.com
```

⏳ **Attendez 24-48h** pour la propagation DNS.

---

## 🎯 OPTION 2 : NETLIFY (Alternative à Vercel)

### Méthode Drag & Drop (Glisser-Déposer)

#### Étape 1 : Préparer votre site
Dans votre terminal :
```bash
npm run build
```
Cela crée un dossier `.next` avec votre site compilé.

#### Étape 2 : Créer un compte Netlify
1. Allez sur https://www.netlify.com
2. Cliquez sur "Sign up"
3. Créez votre compte

#### Étape 3 : Déployer
1. Sur Netlify, cliquez sur "Add new site" → "Deploy manually"
2. **IMPORTANT** : Glissez le dossier `.next` (PAS tout le projet)
3. Attendez le déploiement

🎉 Votre site est en ligne !

**⚠️ ATTENTION** : Cette méthode n'est PAS idéale pour Next.js. Utilisez plutôt Vercel.

---

## 🎯 OPTION 3 : GITHUB PAGES (Gratuit mais limité)

⚠️ **NON RECOMMANDÉ** pour Next.js (nécessite des modifications).

Si vous voulez vraiment utiliser GitHub Pages, contactez-moi pour une configuration spéciale.

---

## 📝 APRÈS LE DÉPLOIEMENT

### 1. Tester votre site
Visitez votre URL et vérifiez :
- ✅ Toutes les pages se chargent
- ✅ Les liens fonctionnent
- ✅ Les numéros de téléphone sont cliquables
- ✅ Le site est responsive (mobile)

### 2. Configurer Google Search Console
1. Allez sur https://search.google.com/search-console
2. Cliquez sur "Ajouter une propriété"
3. Entrez votre URL
4. Vérifiez avec la méthode proposée

### 3. Soumettre votre sitemap
Dans Google Search Console :
1. Allez dans "Sitemaps"
2. Ajoutez : `https://votre-site.com/sitemap.xml`

---

## 🔄 METTRE À JOUR VOTRE SITE

### Avec Vercel + GitHub :
1. Modifiez vos fichiers localement
2. Dans GitHub Desktop :
   - Écrivez un message de commit
   - Cliquez sur "Commit to main"
   - Cliquez sur "Push origin"
3. **C'EST TOUT !** Vercel déploie automatiquement

### Avec Vercel CLI :
```bash
vercel --prod
```

---

## 🆘 PROBLÈMES COURANTS

### "Command not found: vercel"
```bash
npm install -g vercel
```

### "Build failed"
Vérifiez que vous avez bien exécuté :
```bash
npm install
```

### Le site est vide / erreur 404
Attendez 2-3 minutes après le déploiement.

### Les images ne s'affichent pas
Vérifiez que les images sont dans le dossier `public/`

---

## 💰 COÛTS

### GRATUIT :
- ✅ Hébergement Vercel
- ✅ HTTPS (certificat SSL)
- ✅ Bande passante illimitée
- ✅ Mises à jour illimitées

### PAYANT (optionnel) :
- Nom de domaine personnalisé : ~12€/an
- Google Workspace (email pro) : ~5€/mois

---

## 📊 PERFORMANCE ET VITESSE

Votre site sera ultra-rapide car :
- ✅ Next.js optimise automatiquement
- ✅ Vercel utilise un CDN mondial
- ✅ Images optimisées automatiquement
- ✅ Code compressé (minifié)

**Score attendu sur Google PageSpeed :** 90-100/100

---

## 🔐 SÉCURITÉ

### Déjà inclus :
- ✅ HTTPS automatique (cadenas vert)
- ✅ Protection DDoS
- ✅ Sauvegardes automatiques

### À faire :
- Créez un mot de passe fort pour Vercel
- Activez l'authentification à 2 facteurs

---

## 📈 SUIVRE VOS STATISTIQUES

### Google Analytics (Gratuit)

#### Étape 1 : Créer un compte
1. Allez sur https://analytics.google.com
2. Créez une propriété
3. Obtenez votre ID de suivi (ex: G-XXXXXXXXXX)

#### Étape 2 : Ajouter à votre site
Créez le fichier `app/GoogleAnalytics.tsx` :
```tsx
'use client'
import Script from 'next/script'

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </Script>
    </>
  )
}
```

Puis dans `app/layout.tsx`, ajoutez :
```tsx
import GoogleAnalytics from './GoogleAnalytics'

// Dans le body :
<body>
  <GoogleAnalytics />
  {children}
</body>
```

---

## ✅ CHECKLIST FINALE

Avant de déployer, vérifiez :
- [ ] Numéro de téléphone mis à jour
- [ ] Adresse email mise à jour
- [ ] Adresse physique mise à jour
- [ ] URL du site mise à jour dans sitemap.ts
- [ ] Coordonnées GPS correctes
- [ ] Photos ajoutées (si vous en avez)
- [ ] Test sur mobile et desktop

Après le déploiement :
- [ ] Site accessible via l'URL
- [ ] Google My Business créé
- [ ] Google Search Console configuré
- [ ] Sitemap soumis
- [ ] Inscriptions annuaires locaux

---

## 🎉 FÉLICITATIONS !

Votre site est maintenant en ligne et visible sur Google !

### Prochaines étapes :
1. Partagez votre URL partout (réseaux sociaux, cartes de visite)
2. Demandez des avis à vos clients
3. Ajoutez du contenu régulièrement (articles, photos)
4. Surveillez vos statistiques

**Bon succès avec votre site ! 🚀**

---

**Besoin d'aide ?** Contactez le support Vercel : https://vercel.com/support
