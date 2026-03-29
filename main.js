/* ═══════════════════════════════════════════════════════════
   NINE KNOTS MARINE — main.js
   Language switching · Scroll animations · Navigation · Forms
   ═══════════════════════════════════════════════════════════ */

'use strict';

/* ─────────────────────────────────────────────────────────
   1. TRANSLATIONS
───────────────────────────────────────────────────────── */
const translations = {

  en: {
    /* Navigation */
    'nav.logo':        'NINE KNOTS',
    'nav.project':    'Project',
    'nav.yacht':      'The Yacht',
    'nav.design':     'Design',
    'nav.innovation': 'Innovation',
    'nav.gallery':    'Gallery',
    'nav.acquire':    'Acquire',
    'nav.contact':    'Contact',

    'imageband.quote': 'The sea is better at 9 knots.',

    /* Hero */
    'hero.eyebrow':      'Long-Range Electric Trawler',
    'hero.headline':     'Crafted for Those\nWho Cruise Beyond',
    'hero.subheadline':  'The 9K42 is a compact, efficient electric trawler — 12.8 m of considered design, built for offshore passages at 7 knots with near-zero fuel consumption.',
    'hero.cta1':         'Discover the 9K42',
    'hero.cta2':         'Register Interest',
    'hero.stat1':        'Overall Length',
    'hero.stat2':        'Battery Pack',
    'hero.stat3':        'Hulls — First Series',

    /* Project */
    'project.label':   'The Project',
    'project.title':   'A New Vision of\nBlue-Water Cruising',
    'project.p1':      'Nine Knots Marine was born from years of offshore experience and a clear conviction: the perfect ocean passage is one where the yacht disappears into the background, and the sea takes centre stage.',
    'project.p2':      'We questioned every convention. We studied what breaks, what wears, what fatigues crews on long passages — and what, by contrast, inspires confidence and peace of mind. Then we designed a motor yacht that answers those questions honestly.',
    'project.p3':      'Not a performance speedboat. Not a floating apartment. A proper offshore motor yacht: safe, capable, autonomous — and deeply satisfying to live aboard for weeks at a time.',
    'project.quote':   '"The sea demands honesty from a yacht. We designed one that can answer."',
    'project.origin1': 'Founded on deep offshore cruising experience',
    'project.origin2': 'Designed in collaboration with veteran blue-water cruisers',
    'project.origin3': 'Built in Northern Europe, to the highest structural standards',

    /* Yacht */
    'yacht.label':          'The Yacht',
    'yacht.title':          'Designed for Efficient Offshore Cruising',
    'yacht.intro':          'Twelve point eight metres of refined design. A displacement hull conceived for low energy consumption, steady progress at 7 knots, and genuine energy independence offshore.',
    'yacht.spec1.label':    'Overall Length',
    'yacht.spec1.detail':   'LWL ~12 m',
    'yacht.spec2.label':    'Beam',
    'yacht.spec2.detail':   'Displacement hull, efficiency-optimised',
    'yacht.spec3.label':    'Displacement',
    'yacht.spec3.detail':   'Light offshore E-Trawler',
    'yacht.spec4.label':    'Battery Pack',
    'yacht.spec4.detail':   '80–120 kWh lithium iron phosphate, 96V DC',
    'yacht.spec5.label':    'Electric Drive',
    'yacht.spec5.detail':   'Silent twin-motor propulsion',
    'yacht.spec6.label':    'Cruise Speed',
    'yacht.spec6.detail':   'Efficiency sweet-spot at 7~9 knots',
    'yacht.note':           'Composite sandwich construction with foam core. Bilge keels / passive stabilising fins available for offshore comfort. ISO Category A/B depending on final specification and loading.',

    /* Qualities */
    'qualities.label':      'Core Qualities',
    'qualities.title':      'What We Built For',
    'qualities.q1.title':   'Offshore Safety',
    'qualities.q1.text':    'A double-skinned composite hull built to ISO Category A — ocean. Redundant steering, self-draining cockpit, structural integrity designed for survival conditions.',
    'qualities.q2.title':   'True Autonomy',
    'qualities.q2.text':    'Months at anchor without a marina. Solar panels, a 80 kWh battery pack, up to 120 kWh, and the range extender provide complete energy independence. The 9K42 sustains itself so you can focus on the journey.',
    'qualities.q3.title':   'Seakeeping',
    'qualities.q3.text':    'A displacement hull designed for steady, comfortable progress in all sea states. Moderate speed, a deep forefoot, and generous initial stability translate into a calm, predictable motion at sea.',
    'qualities.q4.title':   'Comfort Aboard',
    'qualities.q4.text':    'Live-aboard quality without compromise. Insulated to Scandinavian standards, near-silent under electric power, ergonomically considered. A space that feels like home after thirty days at sea.',
    'qualities.q5.title':   'Considered Simplicity',
    'qualities.q5.text':    'Every system selected for reliability, repairability, and ease of use. Nothing superfluous. The result is a motor yacht that two people can operate confidently, anywhere in the world.',
    'qualities.q6.title':   'Craftsmanship',
    'qualities.q6.text':    'European boatbuilding tradition applied to every surface, joint, and fitting. Premium teak, stainless, and composites, finished with the care that only a limited series allows.',

    /* Philosophy */
    'philosophy.label':     'Design Philosophy',
    'philosophy.title':     'Form Follows\nthe Sea',
    'philosophy.lead':      'We took inspiration from the Scandinavian design tradition: that beauty is a consequence of honesty, not ornament.',
    'philosophy.p1':        'Every line of the 9K42\'s interior was drawn for a purpose — the angle of the navigation station, the height of the companionway, the depth of the cockpit. Where other yachts layer on aesthetics, we stripped back to structure. The result is an interior that feels serene rather than styled.',
    'philosophy.p2':        'On deck, a flush, uncluttered layout allows confident movement in any conditions. The helm offers full 360° visibility, with all instruments close at hand. The cockpit is sheltered, generous, and sized for long offshore passages.',
    'philosophy.p3':        'The colour of oiled oak. The weight of a stainless fitting. The silence of an electric drivetrain at cruising speed. These details are not decorative. They are the measure of a serious motor yacht.',
    'philosophy.signature': '— The Nine Knots Design Studio, Nantes',

    /* For Whom */
    'forwhom.label':    'For Whom',
    'forwhom.title':    'For the Captain Who Has Already Crossed Oceans',
    'forwhom.p1':       'You have accumulated miles and wisdom offshore. You know the difference between a yacht that looks capable and one that is. You have lived through the compromises of previous boats and have a clear picture of what you would do differently.',
    'forwhom.p2':       'The 9K42 is for the owner who intends to use their yacht — not to keep it on a pontoon and charter it out. For the couple who want to cross the Pacific without a professional crew. For the experienced captain who plans a circumnavigation and expects the boat to be ready before they are.',
    'forwhom.profile1': 'The transatlantic couple planning extended bluewater passages',
    'forwhom.profile2': 'The experienced solo or shorthanded offshore captain',
    'forwhom.profile3': 'The owner seeking a lasting, considered investment in serious offshore cruising',

    /* Innovation */
    'innovation.label':    'Innovation & Energy',
    'innovation.title':    'Technology in\nthe Service of Independence',
    'innovation.intro':    'Nine Knots Marine incorporates advanced systems with one guiding principle: they should make your life at sea quieter, safer, and more self-sufficient — not more complicated.',
    'innovation.i1.title': 'Hybrid Propulsion',
    'innovation.i1.text':  'Twin 25 kW electric motors on a 96V DC bus, providing redundancy and precise manoeuvring. A 7.5–9 kW diesel generator acts as a considered range extender — not a primary drive, but a reliable backup that extends offshore autonomy without complexity.',
    'innovation.i2.title': 'Energy Independence',
    'innovation.i2.text':  'Significant solar integration paired with a Victron architecture and MPPT charge controllers. Sized for partial recharge from solar alone, hotel loads at anchor, and reduced generator hours. In sunny latitudes, months of autonomy without running the engine.',
    'innovation.i3.title': 'Watermaker System',
    'innovation.i3.text':  'A 80 L/h reverse-osmosis watermaker, backed by 400 L of tank capacity. Fresh water independence, anywhere. A secondary manually-operated emergency unit is fitted as standard.',
    'innovation.i4.title': 'Navigation & Safety Systems',
    'innovation.i4.text':  'Integrated Furuno radar, AIS, and chart plotter. Iridium satellite communication. EPIRB and life raft sized for the crew. All critical systems duplicated with analogue fallback. The electronics serve you — not the reverse.',

    /* Gallery */
    'gallery.label': 'Gallery',
    'gallery.title': 'Nine Knots Marine at Sea',
    'gallery.cap1':  'Arctic passage, calm fjord waters',
    'gallery.cap2':  'Underway, Mediterranean coast',
    'gallery.cap3':  'At anchor, French Polynesia',
    'gallery.cap4':  'Aerial view, Greek islands',
    'gallery.cap5':  'At anchor, Corsica',
    'gallery.cap6':  'Terrace deck, evening light',
    'gallery.cap7':  'Open sea passage',
    'gallery.cap8':  'Hull at anchor, clear water',
    'gallery.exterior.title': 'Exterior',
    'gallery.interior.title': 'Interior Design',
    'gallery.int1':  'Main salon & helm station',
    'gallery.int2':  'Galley & dining',
    'gallery.int3':  'Master cabin',

    /* Acquisition */
    'acq.label':         'Acquisition',
    'acq.title':         'Join the First Series',
    'acq.intro':         'The initial production run is limited to twelve hulls. If the 9K42 corresponds to your vision of offshore cruising, we invite you to register your interest. A member of our team will contact you personally to discuss your project.',
    'acq.form.name':     'Full Name',
    'acq.form.email':    'Email Address',
    'acq.form.country':  'Country',
    'acq.form.background': 'Cruising Background',
    'acq.form.bg0':      'Please select…',
    'acq.form.bg1':      'Coastal & inshore cruising',
    'acq.form.bg2':      'Offshore passages',
    'acq.form.bg3':      'Transatlantic crossings',
    'acq.form.bg4':      'Circumnavigation experience',
    'acq.form.message':  'Your Project (optional)',
    'acq.form.submit':   'Register My Interest',
    'acq.form.note':     'Your information is treated with complete discretion and is never shared with third parties.',
    'acq.form.success':  'Thank you, your request has been sent. We will get back to you within 24 hours.',

    /* Contact */
    'contact.label':        'Contact',
    'contact.title':        'Speak with\nthe Studio',
    'contact.text':         'We welcome enquiries from qualified buyers and serious offshore cruising enthusiasts. Reach us directly or complete the form.',
    'contact.studio':       'Studio',
    'contact.emailLabel':   'Email',
    'contact.form.name':    'Name',
    'contact.form.email':   'Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.submit':  'Send Message',
    'contact.form.success': 'Thank you, your message has been sent. We will get back to you within 24 hours.',

    /* Footer */
    'footer.tagline': 'Built for the long passage. Designed for life aboard.',
    'footer.copy':    '© 2025 Nine Knots Marine. All rights reserved.',
  },

  /* ────────────────────────── FRENCH ────────────────────── */
  fr: {
    'nav.logo':       'NINE KNOTS',
    'nav.project':    'Le Projet',
    'nav.yacht':      'Le Yacht',
    'nav.design':     'Design',
    'nav.innovation': 'Innovation',
    'nav.gallery':    'Galerie',
    'nav.acquire':    'Acquérir',
    'nav.contact':    'Contact',

    'imageband.quote': 'La mer est plus belle à 9 nœuds.',

    'hero.eyebrow':      'E-Trawler de Grand Large',
    'hero.headline':     'Conçu pour ceux\nqui naviguent plus loin',
    'hero.subheadline':  'Le 9K42 est un e-trawler compact et efficient — 12,8 m de design réfléchi, construit pour les traversées offshore à 7 nœuds avec une consommation quasi nulle.',
    'hero.cta1':         'Découvrir le 9K42',
    'hero.cta2':         'Manifester son intérêt',
    'hero.stat1':        'Longueur hors-tout',
    'hero.stat2':        'Parc batterie',
    'hero.stat3':        'Coques — Première série',

    'project.label':   'Le Projet',
    'project.title':   'Une nouvelle vision\nde la croisière hauturière',
    'project.p1':      'Nine Knots Marine est né d\'années d\'expérience offshore et d\'une conviction simple : la traversée océanique idéale est celle où le yacht s\'efface pour laisser la mer occuper toute la place.',
    'project.p2':      'Nous avons remis en question chaque convention. Nous avons étudié ce qui casse, ce qui s\'use, ce qui fatigue les équipages lors des longues traversées — et ce qui, à l\'inverse, inspire la confiance et la sérénité. Puis nous avons conçu un yacht à moteur qui répond honnêtement à ces questions.',
    'project.p3':      'Pas un hors-bord de vitesse. Pas un appartement flottant. Un vrai yacht hauturier à moteur électrique : sûr, capable, autonome — et profondément satisfaisant à vivre à bord pendant des semaines.',
    'project.quote':   '« La mer exige l\'honnêteté d\'un yacht. Nous en avons conçu un qui peut répondre. »',
    'project.origin1': 'Fondé sur une expérience profonde de la croisière hauturière',
    'project.origin2': 'Conçu en collaboration avec des navigateurs hauturiers confirmés',
    'project.origin3': 'Construit en Europe du Nord, selon les normes structurelles les plus élevées',

    'yacht.label':          'Le Yacht',
    'yacht.title':          'Conçu pour la croisière hauturière efficiente',
    'yacht.intro':          'Douze mètres quatre vingt de design maîtrisé. Une carène de déplacement conçue pour une faible consommation énergétique, une progression régulière à 7 nœuds et une réelle indépendance offshore.',
    'yacht.spec1.label':    'Longueur hors-tout',
    'yacht.spec1.detail':   'LFl ~12 m',
    'yacht.spec2.label':    'Largeur',
    'yacht.spec2.detail':   'Carène de déplacement, optimisée pour l\'efficience',
    'yacht.spec3.label':    'Déplacement',
    'yacht.spec3.detail':   'E-Trawler léger et efficient',
    'yacht.spec4.label':    'Parc batterie',
    'yacht.spec4.detail':   '80–120 kWh lithium fer phosphate, bus 96V DC',
    'yacht.spec5.label':    'Propulsion électrique',
    'yacht.spec5.detail':   'Double motorisation silencieuse',
    'yacht.spec6.label':    'Vitesse de croisière',
    'yacht.spec6.detail':   'Plage de fonctionnement idéale entre 7 et 9 nœuds',
    'yacht.note':           'Construction sandwich composite epoxy à âme mousse. Bilge keels / appendices stabilisateurs actifs disponibles pour le confort hauturier. Catégorie ISO A/B selon spécifications finale et charge réelle.',

    'qualities.label':      'Qualités essentielles',
    'qualities.title':      'Ce pour quoi nous avons construit',
    'qualities.q1.title':   'Sécurité hauturière',
    'qualities.q1.text':    'Une coque composite à double peau construite selon la norme ISO Catégorie A — océan. Direction redondante, cockpit auto-videur, intégrité structurelle conçue pour les conditions de survie.',
    'qualities.q2.title':   'Autonomie véritable',
    'qualities.q2.text':    'Des mois au mouillage sans marina. Le solaire, l\'éolien et la propulsion hybride assurent une indépendance énergétique durable. Le yacht se suffit à lui-même pour que vous vous concentriez sur la navigation.',
    'qualities.q3.title':   'Tenue à la mer',
    'qualities.q3.text':    'Une carène conçue pour une progression régulière et confortable dans tous les états de mer. Déplacement modéré, étrave profonde et stabilité initiale généreuse — une route stable et prévisible.',
    'qualities.q4.title':   'Confort à bord',
    'qualities.q4.text':    'Qualité de vie à bord sans compromis. Isolé aux normes scandinaves, parfaitement insonorisé, ergonomiquement pensé. Un espace qui se sent comme chez soi après trente jours en mer.',
    'qualities.q5.title':   'Simplicité réfléchie',
    'qualities.q5.text':    'Chaque système sélectionné pour sa fiabilité, sa facilité de réparation et sa facilité d\'utilisation. Rien de superflu. Le résultat est un yacht que deux personnes peuvent manœuvrer en confiance, partout dans le monde.',
    'qualities.q6.title':   'Artisanat d\'excellence',
    'qualities.q6.text':    'La tradition européenne de construction navale appliquée à chaque surface, chaque joint, chaque accastillage. Teck, inox et composites premium, finis avec le soin que seule une série limitée permet.',

    'philosophy.label':     'Philosophie de design',
    'philosophy.title':     'La forme suit\nla mer',
    'philosophy.lead':      'Nous nous sommes inspirés de la tradition de design scandinave : la beauté est une conséquence de l\'honnêteté, non de l\'ornement.',
    'philosophy.p1':        'Chaque ligne du 9K42 a été tracée dans un but précis — l\'angle du poste de navigation, la hauteur du panneau, la profondeur du cockpit. Là où d\'autres yachts superposent l\'esthétique, nous avons retenu l\'essentiel. Le résultat est un intérieur serein plutôt que stylisé.',
    'philosophy.p2':        'Sur le pont, un aménagement épuré permet de se déplacer en confiance dans toutes les conditions. La barre offre une visibilité à 360° avec tous les instruments à portée de main. Le cockpit est protégé, généreux et dimensionné pour les longues traversées.',
    'philosophy.p3':        'La couleur du chêne huilé. Le poids d\'un accastillage inox. Le silence d\'une propulsion électrique à vitesse de croisière. Ces détails ne sont pas décoratifs. Ils sont la mesure d\'un yacht à moteur sérieux.',
    'philosophy.signature': '— Le Studio de Design Nine Knots, Nantes',

    'forwhom.label':    'Pour qui',
    'forwhom.title':    'Pour le capitaine qui a déjà traversé des océans',
    'forwhom.p1':       'Vous avez accumulé les milles et la sagesse en mer. Vous savez faire la différence entre un yacht qui a l\'air capable et un qui l\'est vraiment. Vous avez vécu les compromis des bateaux précédents et vous avez une idée précise de ce que vous feriez différemment.',
    'forwhom.p2':       'Nine Knots Marine est fait pour l\'armateur qui entend utiliser son yacht — pas pour le laisser à quai et le mettre en charter. Pour le couple qui veut traverser le Pacifique sans équipage professionnel. Pour le navigateur expérimenté qui planifie un tour du monde et attend que le bateau soit prêt avant lui.',
    'forwhom.profile1': 'Le couple transatlantique qui planifie de longues traversées hauturières',
    'forwhom.profile2': 'Le navigateur hauturier solitaire ou en équipage réduit',
    'forwhom.profile3': 'L\'armateur à la recherche d\'un investissement durable et réfléchi dans la navigation sérieuse',

    'innovation.label':    'Innovation & Énergie',
    'innovation.title':    'La technologie au\nservice de l\'indépendance',
    'innovation.intro':    'Nine Knots Marine intègre des systèmes avancés avec un seul principe directeur : ils doivent rendre votre vie en mer plus silencieuse, plus sûre et plus autonome — pas plus complexe.',
    'innovation.i1.title': 'Propulsion hybride',
    'innovation.i1.text':  'Double motorisation électrique 2 × 25 kW sur bus DC 96V : redondance totale, manœuvres précises, silence absolu. Un groupe électrogène d\'appoint de 7,5 à 9 kW agit en range extender raisonné — pas une propulsion principale, mais un prolongateur d\'autonomie fiable en hauturier.',
    'innovation.i2.title': 'Indépendance énergétique',
    'innovation.i2.text':  'Intégration solaire significative couplée à une architecture Victron et des contrôleurs MPPT. Le système est dimensionné pour la recharge partielle par le solaire seul, l\'alimentation hôtelière au mouillage et la réduction des heures de groupe. Sous les tropiques, des mois d\'autonomie sans démarrer le moteur.',
    'innovation.i3.title': 'Système de dessalement',
    'innovation.i3.text':  'Un déssalinisateur de 80 L/h, soutenu par 400 L de cuve inox. Indépendance en eau douce, partout. Un second système manuel d\'urgence est monté en série.',
    'innovation.i4.title': 'Navigation & sécurité',
    'innovation.i4.text':  'Radar Furuno, AIS et traceur de cartes intégrés. Communication satellite Iridium. Balise EPIRB et radeau de survie dimensionnés à l\'équipage. Tous les systèmes critiques sont doublés avec un recours analogique. L\'électronique est à votre service — pas l\'inverse.',

    'gallery.label': 'Galerie',
    'gallery.title': 'Nine Knots Marine en mer',
    'gallery.cap1':  'Passage arctique, eaux calmes du fjord',
    'gallery.cap2':  'En route, côte méditerranéenne',
    'gallery.cap3':  'Au mouillage, Polynésie française',
    'gallery.cap4':  'Vue aérienne, îles grecques',
    'gallery.cap5':  'Au mouillage, Corse',
    'gallery.cap6':  'Terrasse arrière, lumière du soir',
    'gallery.cap7':  'Traversée en haute mer',
    'gallery.cap8':  'Carène au mouillage, eaux claires',
    'gallery.exterior.title': 'Extérieur',
    'gallery.interior.title': 'Design intérieur',
    'gallery.int1':  'Salon principal & poste de barre',
    'gallery.int2':  'Cuisine & espace repas',
    'gallery.int3':  'Cabine principale',

    'acq.label':         'Acquisition',
    'acq.title':         'Rejoindre la première série',
    'acq.intro':         'La première série de production est limitée à douze coques. Si le 9K42 correspond à votre vision de la croisière hauturière, nous vous invitons à manifester votre intérêt. Un membre de notre équipe vous contactera personnellement pour discuter de votre projet.',
    'acq.form.name':     'Nom complet',
    'acq.form.email':    'Adresse e-mail',
    'acq.form.country':  'Pays',
    'acq.form.background': 'Expérience en navigation',
    'acq.form.bg0':      'Sélectionner…',
    'acq.form.bg1':      'Navigation côtière et cabotage',
    'acq.form.bg2':      'Traversées hauturières',
    'acq.form.bg3':      'Traversées transatlantiques',
    'acq.form.bg4':      'Expérience de circumnavigation',
    'acq.form.message':  'Votre projet (facultatif)',
    'acq.form.submit':   'Manifester mon intérêt',
    'acq.form.note':     'Vos informations sont traitées avec une totale discrétion et ne sont jamais communiquées à des tiers.',
    'acq.form.success':  'Merci, votre demande a bien été envoyée. Nous vous recontacterons sous 24 h.',

    'contact.label':        'Contact',
    'contact.title':        'Contacter\nle studio',
    'contact.text':         'Nous accueillons favorablement les demandes d\'acheteurs qualifiés et des passionnés de navigation sérieuse. Contactez-nous directement ou remplissez le formulaire.',
    'contact.studio':       'Studio',
    'contact.emailLabel':   'E-mail',
    'contact.form.name':    'Nom',
    'contact.form.email':   'E-mail',
    'contact.form.subject': 'Objet',
    'contact.form.message': 'Message',
    'contact.form.submit':  'Envoyer',
    'contact.form.success': 'Merci, votre message a bien été envoyé. Nous vous recontacterons sous 24 h.',

    'footer.tagline': 'Construit pour la grande traversée. Conçu pour vivre à bord.',
    'footer.copy':    '© 2025 Nine Knots Marine. Tous droits réservés.',
  },

  /* ─────────────────────── SIMPLIFIED CHINESE ───────────── */
  zh: {
    'nav.logo':       'NINE KNOTS',
    'nav.project':    '项目',
    'nav.yacht':      '游艇',
    'nav.design':     '设计',
    'nav.innovation': '创新',
    'nav.gallery':    '图集',
    'nav.acquire':    '购置',
    'nav.contact':    '联系',

    'imageband.quote': '大海在 9 节时更美。',

    'hero.eyebrow':      '长航程电动拖网巡航艇',
    'hero.headline':     '让我们.逐光而行，静听海浪\n双核驱动,去到地平线的尽头',
    'hero.subheadline':  '9K42 是一艘紧凑而高效的电动拖网巡航艇——12.8 米的精心设计，专为以 7 节速度进行远洋航行而生，燃油消耗几近为零。',
    'hero.cta1':         '探索 9K42',
    'hero.cta2':         '登记意向',
    'hero.stat1':        '总长',
    'hero.stat2':        '电池组',
    'hero.stat3':        '首批系列船体',

    'project.label':   '项目',
    'project.title':   '蓝水巡航的\n全新愿景',
    'project.p1':      'Nine Knots Marine 源自多年的远洋经验，让我们秉持一个清晰的信念：理想的远洋航程，应当让游艇退居背景，而让大海成为真正的主角。',
    'project.p2':      '我们审视了已有远洋游艇的案例；我们研究长航程中哪些部件易损坏、哪些易磨损、哪些会让船员疲惫；另外，我们重点关注哪些因素能够带来信心与安宁。在此基础上，我们竭诚设计出一艘能够回应这些需求的机动游艇。',
    'project.p3':      '它不是仅仅追求性能的快艇，也不是一座简单的漂浮公寓，而是一艘真正的远洋机动游艇：安全、可靠、自主，海洋友好。',
    'project.quote':   '"大海，蔚蓝纯净;大海，深邃辽阔。竭尽设计之力，建造之严谨，追寻我们的星辰大海。"',
    'project.origin1': '源自深厚的远洋巡航经验',
    'project.origin2': '与资深蓝水航海者共同设计',
    'project.origin3': '于北欧建造，遵循最高结构标准',

    'yacht.label':          '游艇',
    'yacht.title':          '为高效远洋巡航而设计',
    'yacht.intro':          '12.8 米的精炼设计。一体排水型船体，专为低能耗、7 节稳定推进以及真正的离岸能源独立而构想。',
    'yacht.spec1.label':    '总长',
    'yacht.spec1.detail':   '水线长约 12 米',
    'yacht.spec2.label':    '船宽',
    'yacht.spec2.detail':   '排水型船体，针对效率优化',
    'yacht.spec3.label':    '排水量',
    'yacht.spec3.detail':   '轻量级远洋电动拖网巡航艇',
    'yacht.spec4.label':    '电池组',
    'yacht.spec4.detail':   '80–120 kWh 磷酸铁锂电池，96V 直流系统',
    'yacht.spec5.label':    '电力推进',
    'yacht.spec5.detail':   '双电机静音推进',
    'yacht.spec6.label':    '巡航速度',
    'yacht.spec6.detail':   '7–9 节为最佳效率区间',
    'yacht.note':           '环氧泡沫夹芯复合结构。可选舭龙骨 / 被动稳定鳍，以提升远洋舒适性。最终 ISO A/B 类别取决于最终配置与载荷。',

    'qualities.label':      '核心品质',
    'qualities.title':      '我们的设计初衷',
    'qualities.q1.title':   '远洋安全',
    'qualities.q1.text':    '双层复合材料船体，按 ISO A 类（远洋）标准打造。冗余转向、自排水驾驶舱，以及面向极端海况的结构完整性设计。',
    'qualities.q2.title':   '真正的自主性',
    'qualities.q2.text':    '无需依赖码头，也能在锚地停留数月。太阳能板、80 kWh 电池组（可扩展至 120 kWh）以及增程系统，共同提供完整的能源独立性。9K42 能够自我维持，让您专注于航程本身。',
    'qualities.q3.title':   '适航性',
    'qualities.q3.text':    '排水型船体专为在各种海况下实现稳定而舒适的前进而设计。适中的航速、深 V 首部与充足的初稳性，带来平和、可预期的海上运动表现。',
    'qualities.q4.title':   '船上舒适性',
    'qualities.q4.text':    '毫不妥协的居住品质。按斯堪的纳维亚标准保温，电力推进下几近无声，并充分考虑人体工学。即使在海上三十天之后，依然像回到家一样。',
    'qualities.q5.title':   '克制而周到的简洁',
    'qualities.q5.text':    '每一套系统都以可靠性、可维修性与易用性为原则而选择。没有多余之物。最终呈现的是一艘只需两人便能在世界任何海域从容操控的机动游艇。',
    'qualities.q6.title':   '工艺',
    'qualities.q6.text':    '欧洲造船传统体现在每一处表面、接缝与五金细节之中。优质柚木、不锈钢与复合材料，以只有限量系列才有的细腻工艺完成。',

    'philosophy.label':     '设计理念',
    'philosophy.title':     '形式追随\n海洋',
    'philosophy.lead':      '我们的灵感来自斯堪的纳维亚设计传统：美，是诚实的结果，而不是装饰的堆砌。',
    'philosophy.p1':        '9K42 内部的每一条线条都有其明确目的——导航台的角度、舱梯的高度、驾驶舱的深度。其他游艇叠加的是表面的美学，我们则回归结构本身。结果，是一个让人感到宁静，而非刻意造型的内部空间。',
    'philosophy.p2':        '在甲板上，平整而不杂乱的布局让人在任何条件下都能自信行动。驾驶位拥有完整的 360° 视野，所有仪表触手可及。驾驶舱受到良好遮蔽、尺度充裕，专为漫长的离岸航程而设。',
    'philosophy.p3':        '涂油橡木的色泽，不锈钢配件的分量，以巡航速度运行时电驱系统的静谧。这些细节并非装饰，而是一艘严肃机动游艇的尺度。',
    'philosophy.signature': '— Nine Knots 设计工作室，南特',

    'forwhom.label':    '适合谁',
    'forwhom.title':    '为那些早已跨越大洋的船长',
    'forwhom.p1':       '您已经积累了足够的海里数与离岸经验。您明白，一艘看上去能干的游艇，与一艘真正有能力的游艇之间有本质区别。您也经历过以往船只中的各种妥协，因此清楚知道自己下一艘船该做出哪些改变。',
    'forwhom.p2':       '9K42 是为真正打算使用自己游艇的船主而造——而不是把它停在码头、再拿去出租。它属于那些希望在没有职业船员的情况下横渡太平洋的伴侣，也属于那些计划环球航行、并希望在自己准备好之前，船就已经准备就绪的资深船长。',
    'forwhom.profile1': '计划进行长期蓝水航程的跨洋伴侣',
    'forwhom.profile2': '经验丰富的单人或精简船员离岸船长',
    'forwhom.profile3': '寻求对严肃远洋巡航进行长期、审慎投入的船主',

    'innovation.label':    '创新与能源',
    'innovation.title':    '让技术服务于\n独立自主',
    'innovation.intro':    'Nine Knots Marine 融合了先进系统，但始终遵循一个原则：这些技术应让您的海上生活更安静、更安全、更自给自足，而不是更复杂。',
    'innovation.i1.title': '混合动力推进',
    'innovation.i1.text':  '双 25 kW 电机，基于 96V 直流系统，提供冗余保障与精准操控。一台 7.5–9 kW 柴油发电机作为审慎设计的增程器存在——它不是主推进，而是在不增加复杂性的前提下，可靠延长离岸自主能力的后备系统。',
    'innovation.i2.title': '能源独立',
    'innovation.i2.text':  '大面积太阳能集成，配合 Victron 架构与 MPPT 充电控制器。系统容量既能依靠太阳能实现部分回充，也能覆盖锚地生活用电，并减少发电机工作时长。在阳光充足的海域，无需启动主机，也可实现数月自主。',
    'innovation.i3.title': '造水系统',
    'innovation.i3.text':  '80 升/小时反渗透造水机，配合 400 升储水容量。无论身在何处，都可获得淡水独立。标配一套手动应急备用装置。',
    'innovation.i4.title': '导航与安全系统',
    'innovation.i4.text':  '集成 Furuno 雷达、AIS 与海图绘图仪，配备 Iridium 卫星通信、适合船员规模的 EPIRB 与救生筏。所有关键系统均设有模拟备用。电子设备应服务于您，而不是反过来。',

    'gallery.label': '图集',
    'gallery.title': 'Nine Knots Marine 海上图集',
    'gallery.cap1':  '北极航段，平静的峡湾水域',
    'gallery.cap2':  '航行中，地中海海岸',
    'gallery.cap3':  '锚泊于法属波利尼西亚',
    'gallery.cap4':  '鸟瞰，希腊群岛',
    'gallery.cap5':  '锚泊于科西嘉',
    'gallery.cap6':  '露台甲板，傍晚光线',
    'gallery.cap7':  '远海航段',
    'gallery.cap8':  '锚泊中的船体，水色清澈',
    'gallery.exterior.title': '外观',
    'gallery.interior.title': '内装设计',
    'gallery.int1':  '主沙龙与驾驶台',
    'gallery.int2':  '厨房与用餐区',
    'gallery.int3':  '主卧舱',

    'acq.label':         '购置',
    'acq.title':         '加入首批系列',
    'acq.intro':         '首批生产将限量十二艘。若 9K42 符合您对远洋巡航的想象，欢迎登记您的意向。我们的团队成员将亲自与您联系，进一步了解您的项目。',
    'acq.form.name':     '姓名',
    'acq.form.email':    '电子邮箱',
    'acq.form.country':  '国家 / 地区',
    'acq.form.background': '航海背景',
    'acq.form.bg0':      '请选择…',
    'acq.form.bg1':      '近岸与沿岸巡航',
    'acq.form.bg2':      '离岸航程',
    'acq.form.bg3':      '横渡大西洋',
    'acq.form.bg4':      '环球航行经验',
    'acq.form.message':  '您的项目（选填）',
    'acq.form.submit':   '登记我的意向',
    'acq.form.note':     '您的信息将被严格保密，绝不会与第三方共享。',
    'acq.form.success':  '感谢您，您的请求已发送。我们将在 24 小时内与您联系。',

    'contact.label':        '联系',
    'contact.title':        '与工作室\n直接交流',
    'contact.text':         '我们欢迎合格买家以及真正热爱远洋巡航的人士垂询。您可以直接联系，或填写表单。',
    'contact.studio':       '工作室',
    'contact.emailLabel':   '电子邮箱',
    'contact.form.name':    '姓名',
    'contact.form.email':   '电子邮箱',
    'contact.form.subject': '主题',
    'contact.form.message': '留言',
    'contact.form.submit':  '发送信息',
    'contact.form.success': '信息已收到。我们将尽快回复您。',

    'footer.tagline': '为长航程而造，为船上生活而设计。',
    'footer.copy':    '© 2025 Nine Knots Marine。保留所有权利。',
  },
};

/* ─────────────────────────────────────────────────────────
   2. LANGUAGE ENGINE
───────────────────────────────────────────────────────── */
let currentLang = 'en';

function setLanguage(lang) {
  if (!translations[lang] || lang === currentLang) return;

  document.body.classList.add('lang-switching');

  setTimeout(() => {
    currentLang = lang;
    document.documentElement.lang = lang;

    translatePage();
    updateLangButtons();
    updatePageTitle();

    document.body.classList.remove('lang-switching');
  }, 180);
}

function translatePage() {
  const t = translations[currentLang];

  /* Text content */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      /* Preserve line breaks written as \n */
      if (el.tagName === 'H1' || el.tagName === 'H2') {
        el.innerHTML = t[key].replace(/\n/g, '<br>');
      } else {
        el.textContent = t[key];
      }
    }
  });

  /* Placeholders */
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });
}

function updateLangButtons() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
  });
}

function updatePageTitle() {
  const titles = {
    en: 'NINE KNOTS MARINE — Long-Range Cruising Yacht',
    fr: 'NINE KNOTS MARINE — Voilier de Grand Voyage',
    zh: '九节海洋 — 远洋电动游艇',
  };
  document.title = titles[currentLang] || titles.en;
}

/* ─────────────────────────────────────────────────────────
   3. NAVIGATION
───────────────────────────────────────────────────────── */
function initNavigation() {
  const navbar   = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  let menuOpen = false;

  /* Scroll-based nav style */
  function onScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Hamburger toggle */
  function toggleMenu(open) {
    menuOpen = open;
    hamburger.classList.toggle('open', open);
    mobileMenu.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }

  hamburger.addEventListener('click', () => toggleMenu(!menuOpen));

  /* Close menu on mobile nav link click */
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  /* Smooth scroll for all anchor links */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = navbar.offsetHeight + 8;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ─────────────────────────────────────────────────────────
   4. SCROLL REVEAL
───────────────────────────────────────────────────────── */
function initReveal() {
  const els = document.querySelectorAll('.reveal');

  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px',
  });

  /* Stagger children of grids */
  document.querySelectorAll(
    '.qualities-grid, .innovation-grid, .specs-grid, .gallery-grid'
  ).forEach(grid => {
    Array.from(grid.children).forEach((child, i) => {
      child.style.transitionDelay = `${i * 0.07}s`;
    });
  });

  els.forEach(el => observer.observe(el));
}

/* ─────────────────────────────────────────────────────────
   5. FORMS
───────────────────────────────────────────────────────── */
/* Formspree endpoint — replace YOUR_FORM_ID with the actual ID from formspree.io */
const FORMSPREE_ACQUISITION = 'https://formspree.io/f/xdapekpp';
const FORMSPREE_CONTACT      = 'https://formspree.io/f/xdapekpp';

function initForms() {
  handleForm('acquisitionForm', 'acqSuccess', FORMSPREE_ACQUISITION, 'Nine Knots — Register Interest');
  handleForm('contactForm',     'contactSuccess', FORMSPREE_CONTACT, 'Nine Knots — Contact');
}

function handleForm(formId, successId, endpoint, subject) {
  const form    = document.getElementById(formId);
  const success = document.getElementById(successId);
  if (!form || !success) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();

    /* Basic validation */
    let valid = true;
    form.querySelectorAll('[required]').forEach(field => {
      if (!field.value.trim()) {
        field.style.borderBottomColor = '#c0392b';
        valid = false;
      } else {
        field.style.borderBottomColor = '';
      }
    });

    if (!valid) return;

    const btn = form.querySelector('[type="submit"]');
    btn.textContent = '…';
    btn.disabled = true;

    try {
      const data = new FormData(form);
      data.append('_subject', subject);

      const res = await fetch(endpoint, {
        method:  'POST',
        body:    data,
        headers: { 'Accept': 'application/json' },
      });

      if (res.ok) {
        Array.from(form.children).forEach(child => {
          if (child !== success) child.style.display = 'none';
        });
        success.style.display = 'block';
        btn.blur();
        success.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        btn.textContent = btn.getAttribute('data-i18n-original') || btn.textContent;
        btn.disabled = false;
        alert('Submission failed. Please try again or contact us directly.');
      }
    } catch {
      btn.disabled = false;
      btn.textContent = btn.getAttribute('data-i18n-original') || btn.textContent;
      alert('Network error. Please check your connection and try again.');
    }
  });

  /* Store original button text and clear error state on input */
  const btn = form.querySelector('[type="submit"]');
  if (btn) btn.setAttribute('data-i18n-original', btn.textContent);

  form.querySelectorAll('.form-input').forEach(field => {
    field.addEventListener('input', () => {
      field.style.borderBottomColor = '';
    });
  });
}

/* ─────────────────────────────────────────────────────────
   6. LANGUAGE BUTTON EVENTS
───────────────────────────────────────────────────────── */
function initLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (lang) setLanguage(lang);
    });
  });
}

/* ─────────────────────────────────────────────────────────
   7. GALLERY LIGHTBOX (minimal)
───────────────────────────────────────────────────────── */
function initGallery() {
  /* Caption always visible on touch devices */
  if ('ontouchstart' in window) {
    document.querySelectorAll('.gallery-caption').forEach(cap => {
      cap.style.opacity = '1';
      cap.style.transform = 'translateY(0)';
    });
  }
}

/* ─────────────────────────────────────────────────────────
   8. INIT
───────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initReveal();
  initForms();
  initLangSwitcher();
  initGallery();
});
