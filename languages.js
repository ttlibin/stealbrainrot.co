// 多语言支持系统
const LANGUAGES = {
    'en': {
        name: 'English',
        flag: '🇺🇸',
        translations: {
            // Navigation
            'nav.home': 'Home',
            'nav.game': 'Game',
            'nav.video': 'Video',
            'nav.about': 'About',
            'nav.howto': 'How to Play',
            'nav.faq': 'FAQ',
            
            // Hero Section
            'hero.title': 'Play Steal Brainrot',
            'hero.subtitle': 'The Ultimate Multiplayer Meme Heist Game',
            'hero.description': 'Join the chaotic fun of stealing, collecting, and defending rare Italian Brainrot memes. Build your meme empire and dominate the leaderboards!',
            
            // Game Section
            'game.title': 'Play Steal Brainrot',
            'game.ready': 'Ready to Play?',
            'game.description': 'Click below to start playing Steal Brainrot!',
            'game.launch': '🚀 Launch Game',
            'game.pwa_experience': '🛡️ Launches via PWA Shell for enhanced experience',
            
            // Game Loading
            'loading.title': 'Starting Game...',
            'loading.description': 'Initializing enhanced gaming mode',
            'loading.game': 'Loading Game...',
            'loading.initializing': 'Initializing Steal Brainrot embed',
            
            // About Section
            'about.title': 'About Steal Brainrot',
            'about.subtitle': 'A Chaotic Multiplayer Heist Game',
            'about.content1': 'Steal Brainrot is a fast-paced, casual heist game where you collect rare Brainrot memes like Tralalero Tralala and Cappuccino Assassino, straight from the popular Italian Brainrot Clicker Game.',
            'about.content2': 'You can buy Braintorts from the red carpet, sneak into other players\' bases to steal theirs, and protect your own with traps and locks. Use boosters, outbid opponents during deliveries, and rebirth for bigger rewards as you climb the leaderboard.',
            
            // Video Section
            'video.title': 'Gameplay Video',
            'video.subtitle': 'Experience the fun of combining Roblox and Brainrot games',
            
            // How to Play
            'howto.title': 'How to Play Steal Brainrot',
            'howto.subtitle': 'Master the Art of Meme Heisting',
            'howto.step1.title': 'Collect Brainrots',
            'howto.step1.desc': 'Purchase memes from the conveyor belt or steal them from other players',
            'howto.step2.title': 'Build Your Base',
            'howto.step2.desc': 'Place Brainrots on pillars to generate passive income',
            'howto.step3.title': 'Defend Your Collection',
            'howto.step3.desc': 'Use locks and traps to protect your valuable memes',
            'howto.step4.title': 'Steal from Others',
            'howto.step4.desc': 'Infiltrate rival bases and steal their rarest Brainrots',
            
            // FAQ Section
            'faq.title': 'Frequently Asked Questions',
            'faq.subtitle': 'Everything You Need to Know',
            'faq.q1': 'What is the game Steal a Brainrot about?',
            'faq.a1': 'Steal Brainrot is a casual multiplayer game where you steal or buy Brainrots, just like those from Italian Brainrot Clicker Game, to collect as much wealth as possible, all the while other players are doing exactly the same thing, including stealing your Brainrots!',
            'faq.q2': 'Why do people play Steal a Brainrot?',
            'faq.a2': 'Steal a Brainrot can be quite addictive as it combines escape, adventure, and challenges against other players in a fast-paced game where you steal or buy Brainrots to gather as much wealth as possible.',
            'faq.q3': 'Do I need to download the game?',
            'faq.a3': 'No, you don\'t need to download it. Just open your browser and you can play. Mobile users can also play without installation.',
            'faq.q4': 'Can I play offline?',
            'faq.a4': 'You cannot, the core fun is in stealing from other real players, so you need internet connection throughout.',
            
            // Controls
            'controls.title': 'Controls',
            'controls.desktop': 'Desktop',
            'controls.mobile': 'Mobile',
            'controls.move': 'Move',
            'controls.jump': 'Jump',
            'controls.interact': 'Interact',
            'controls.home': 'Home',
            'controls.joystick': 'Left joystick = move',
            'controls.swipe': 'Swipe = look around',
            'controls.arrow': 'Upward arrow button = jump',
            'controls.hand': 'Hand icon button = interact',
            
            // Footer
            'footer.description': 'Play Steal Brainrot - The ultimate multiplayer meme heist game. Collect, steal, and defend rare Italian Brainrot memes in this exciting browser game.',
            'footer.copyright': '© 2024 StealBrainrotOnline.org. All rights reserved.',
            'footer.links': 'Quick Links',
            'footer.game_info': 'Game Info',
            'footer.support': 'Support',
            'footer.privacy': 'Privacy',
            'footer.terms': 'Terms',
            'footer.contact': 'Contact',
            
            // Meta
            'meta.title': 'Play Steal Brainrot - Free Multiplayer Meme Heist Game',
            'meta.description': 'Play Steal Brainrot free in your browser. Collect, steal, and defend rare Italian Brainrot memes in this addictive multiplayer game. No download required!',
            
            // PWA Shell
            'pwa.refresh': 'Refresh',
            'pwa.home': 'Home',
            'pwa.starting': 'Starting Game',
            'pwa.initializing': 'Initializing secure game environment...',
            'pwa.enhanced': '🛡️ PWA Enhanced Gaming',
            'pwa.bypassing': 'Bypassing iframe restrictions for seamless experience',
            'pwa.error.title': 'Game Loading Issue',
            'pwa.error.description': 'The game couldn\'t load in PWA mode due to security restrictions.',
            'pwa.error.solution': 'Please try refreshing the page or use the direct game link.',
            'pwa.error.retry': 'Retry',
            'pwa.error.direct': 'Direct Link'
        }
    },
    
    'es': {
        name: 'Español',
        flag: '🇪🇸',
        translations: {
            // Navigation
            'nav.home': 'Inicio',
            'nav.game': 'Juego',
            'nav.video': 'Video',
            'nav.about': 'Acerca de',
            'nav.howto': 'Cómo Jugar',
            'nav.faq': 'FAQ',
            
            // Hero Section
            'hero.title': 'Juega Steal Brainrot',
            'hero.subtitle': 'El definitivo juego de atraco de memes multijugador',
            'hero.description': 'Únete a la diversión caótica de robar, coleccionar y defender memes raros de Brainrot italiano. ¡Construye tu imperio de memes y domina las tablas de líderes!',
            
            // Game Section
            'game.title': 'Jugar Steal Brainrot',
            'game.ready': '¿Listo para Jugar?',
            'game.description': '¡Haz clic abajo para comenzar a jugar Steal Brainrot!',
            'game.launch': '🚀 Lanzar Juego',
            'game.pwa_experience': '🛡️ Se lanza a través de PWA Shell para una experiencia mejorada',
            
            // Game Loading
            'loading.title': 'Lanzando Juego...',
            'loading.description': 'Inicializando modo de juego mejorado',
            'loading.game': 'Cargando Juego...',
            'loading.initializing': 'Inicializando Steal Brainrot embed',
            
            // About Section
            'about.title': 'Sobre Steal Brainrot',
            'about.subtitle': 'Un Juego de Atraco Multijugador Caótico',
            'about.content1': 'Steal Brainrot es un juego de atraco multijugador de ritmo rápido donde coleccionas memes raros de Brainrot como Tralalero Tralala y Cappuccino Assassino, directamente del popular Juego Clicker de Brainrot Italiano.',
            'about.content2': 'Puedes comprar Braintorts desde la alfombra roja, infiltrarte en las bases de otros jugadores para robar los suyos, y proteger los tuyos con trampas y cerraduras. Usa potenciadores, supera a oponentes durante entregas, y renace para obtener mayores recompensas mientras escalas la tabla de líderes.',
            
            // Video Section
            'video.title': 'Gameplay Video',
            'video.subtitle': 'Experimenta la Diversión de Combinar Roblox y Juegos de Brainrot',
            
            // How to Play
            'howto.title': 'Cómo Jugar Steal Brainrot',
            'howto.subtitle': 'Domina el Arte del Atraco de Memes',
            'howto.step1.title': 'Colecciona Brainrots',
            'howto.step1.desc': 'Compra memes desde la cinta transportadora o róbalos de otros jugadores',
            'howto.step2.title': 'Construye tu Base',
            'howto.step2.desc': 'Coloca Brainrots en pilares para generar ingresos pasivos',
            'howto.step3.title': 'Defiende tu Colección',
            'howto.step3.desc': 'Usa cerraduras y trampas para proteger tus valiosos memes',
            'howto.step4.title': 'Roba de Otros',
            'howto.step4.desc': 'Infiltra bases de rivales y roba sus Brainrots más raros',
            
            // FAQ Section
            'faq.title': 'Preguntas Frecuentes',
            'faq.subtitle': 'Todo lo que Necesitas Saber',
            'faq.q1': '¿Qué es Steal a Brainrot?',
            'faq.a1': 'Steal Brainrot es un juego multijugador casual donde robas o compras Brainrots, como los del Juego Clicker de Brainrot Italiano, para coleccionar tanta riqueza como sea posible, ¡mientras otros jugadores hacen exactamente lo mismo!',
            'faq.q2': '¿Por qué la gente juega Steal a Brainrot?',
            'faq.a2': 'Steal a Brainrot puede ser bastante adictivo ya que combina escape, aventura y desafíos contra otros jugadores en un juego de ritmo rápido donde robas o compras Brainrots para reunir tanta riqueza como sea posible.',
            'faq.q3': '¿Necesito descargar el juego?',
            'faq.a3': 'No, no necesitas descargarlo. Solo abre tu navegador y puedes jugar. Los usuarios móviles también pueden jugar sin instalación.',
            'faq.q4': '¿Puedo jugar sin conexión?',
            'faq.a4': 'No puedes, la diversión principal está en robar de otros jugadores reales, por lo que necesitas conexión a internet en todo momento.',
            
            // Controls
            'controls.title': 'Controles',
            'controls.desktop': 'Escritorio',
            'controls.mobile': 'Móvil',
            'controls.move': 'Mover',
            'controls.jump': 'Saltar',
            'controls.interact': 'Interactuar',
            'controls.home': 'Inicio',
            'controls.joystick': 'Joystick izquierdo = mover',
            'controls.swipe': 'Deslizar = mirar alrededor',
            'controls.arrow': 'Botón de flecha hacia arriba = saltar',
            'controls.hand': 'Botón de icono de mano = interactuar',
            
            // Footer
            'footer.description': 'Juega Steal Brainrot - El definitivo juego de atraco de memes multijugador. Colecciona, roba y defiende memes raros de Brainrot italiano en este emocionante juego de navegador.',
            'footer.copyright': '© 2024 StealBrainrotOnline.org. Todos los derechos reservados.',
            'footer.links': 'Enlaces Rápidos',
            'footer.game_info': 'Información del Juego',
            'footer.support': 'Soporte',
            'footer.privacy': 'Privacidad',
            'footer.terms': 'Términos',
            'footer.contact': 'Contacto',
            
            // Meta
            'meta.title': 'Jugar Steal Brainrot - Juego Multijugador de Atraco de Memes Gratis',
            'meta.description': 'Juega Steal Brainrot gratis en tu navegador. Colecciona, roba y defiende memes raros de Brainrot italiano en este adictivo juego multijugador. ¡Sin descargas requeridas!',
            
            // PWA Shell
            'pwa.refresh': 'Actualizar',
            'pwa.home': 'Inicio',
            'pwa.starting': 'Iniciando Juego',
            'pwa.initializing': 'Inicializando entorno de juego seguro...',
            'pwa.enhanced': '🛡️ Juegos Mejorados PWA',
            'pwa.bypassing': 'Evitando restricciones de iframe para experiencia fluida',
            'pwa.error.title': 'Problema de Carga del Juego',
            'pwa.error.description': 'El juego no pudo cargarse en modo PWA debido a restricciones de seguridad.',
            'pwa.error.solution': '¡No te preocupes, tenemos soluciones alternativas!',
            'pwa.error.open_browser': '🚀 Abrir en Navegador',
            'pwa.error.try_platform': '🎮 Probar Plataforma Diferente',
            'pwa.error.back_home': '🏠 Volver al Inicio'
        }
    },
    
    'ar': {
        name: 'العربية',
        flag: '🇸🇦',
        rtl: true,
        translations: {
            // Navigation
            'nav.home': 'الرئيسية',
            'nav.game': 'اللعبة',
            'nav.video': 'فيديو',
            'nav.about': 'حول',
            'nav.howto': 'كيف ألعب',
            'nav.faq': 'أسئلة شائعة',
            
            // Hero Section
            'hero.title': 'العب Steal Brainrot',
            'hero.subtitle': 'لعبة سرقة الميمز المتعددة اللاعبين النهائية',
            'hero.description': 'انضم إلى المرح الفوضوي في سرقة وجمع والدفاع عن ميمز Brainrot الإيطالية النادرة. ابن إمبراطورية الميمز الخاصة بك وهيمن على لوحات المتصدرين!',
            
            // Game Section
            'game.title': 'العب Steal Brainrot',
            'game.ready': 'مستعد للعب؟',
            'game.description': 'انقر أدناه لبدء لعب Steal Brainrot!',
            'game.launch': '🚀 تشغيل اللعبة',
            'game.pwa_experience': '🛡️ يتم التشغيل عبر PWA Shell لتجربة محسنة',
            
            // Game Loading
            'loading.title': 'تشغيل اللعبة...',
            'loading.description': 'تهيئة وضع الألعاب المحسن',
            'loading.game': 'تحميل اللعبة...',
            'loading.initializing': 'تهيئة Steal Brainrot embed',
            
            // About Section
            'about.title': 'حول Steal Brainrot',
            'about.subtitle': 'لعبة سرقة متعددة اللاعبين فوضوية',
            'about.content1': 'Steal Brainrot هي لعبة سرقة متعددة اللاعبين سريعة الوتيرة حيث تجمع ميمز Brainrot النادرة مثل Tralalero Tralala و Cappuccino Assassino، مباشرة من لعبة Italian Brainrot Clicker الشعبية.',
            'about.content2': 'يمكنك شراء Braintorts من السجادة الحمراء، والتسلل إلى قواعد اللاعبين الآخرين لسرقة ميمزهم، وحماية ميمزك بالفخاخ والأقفال. استخدم المعززات، وتفوق على الخصوم أثناء التسليم، وأعد الولادة لمكافآت أكبر أثناء تسلق لوحة المتصدرين.',
            
            // Video Section
            'video.title': 'فيديو اللعب',
            'video.subtitle': 'اختبر متعة دمج ألعاب Roblox و Brainrot',
            
            // How to Play
            'howto.title': 'كيفية لعب Steal Brainrot',
            'howto.subtitle': 'اتقن فن سرقة الميمز',
            'howto.step1.title': 'اجمع Brainrots',
            'howto.step1.desc': 'اشتر ميمز من الحزام الناقل أو اسرقها من لاعبين آخرين',
            'howto.step2.title': 'ابن قاعدتك',
            'howto.step2.desc': 'ضع Brainrots على أعمدة لتوليد دخل سلبي',
            'howto.step3.title': 'دافع عن مجموعتك',
            'howto.step3.desc': 'استخدم الأقفال والفخاخ لحماية ميمزك القيمة',
            'howto.step4.title': 'اسرق من الآخرين',
            'howto.step4.desc': 'تسلل إلى قواعد المنافسين واسرق أندر Brainrots لديهم',
            
            // FAQ Section
            'faq.title': 'أسئلة شائعة',
            'faq.subtitle': 'كل ما تحتاج لمعرفته',
            'faq.q1': 'ما هو Steal a Brainrot؟',
            'faq.a1': 'Steal Brainrot هي لعبة متعددة اللاعبين عادية حيث تسرق أو تشتري Brainrots، مثل تلك من لعبة Italian Brainrot Clicker، لجمع أكبر قدر ممكن من الثروة، بينما يفعل اللاعبون الآخرون نفس الشيء تماماً!',
            'faq.q2': 'لماذا يلعب الناس Steal a Brainrot؟',
            'faq.a2': 'يمكن أن تكون Steal a Brainrot مسببة للإدمان حيث تجمع بين الهروب والمغامرة والتحديات ضد لاعبين آخرين في لعبة سريعة الوتيرة حيث تسرق أو تشتري Brainrots لجمع أكبر قدر ممكن من الثروة.',
            'faq.q3': 'هل أحتاج لتحميل اللعبة؟',
            'faq.a3': 'لا، لا تحتاج لتحميلها. فقط افتح متصفحك ويمكنك اللعب. مستخدمو الهاتف المحمول يمكنهم أيضاً اللعب بدون تثبيت.',
            'faq.q4': 'هل يمكنني اللعب بدون اتصال؟',
            'faq.a4': 'لا يمكنك، المتعة الأساسية في سرقة لاعبين حقيقيين آخرين، لذا تحتاج اتصال إنترنت طوال الوقت.',
            
            // Controls
            'controls.title': 'التحكم',
            'controls.desktop': 'سطح المكتب',
            'controls.mobile': 'الهاتف المحمول',
            'controls.move': 'تحرك',
            'controls.jump': 'اقفز',
            'controls.interact': 'تفاعل',
            'controls.home': 'الرئيسية',
            'controls.joystick': 'عصا التحكم اليسرى = تحرك',
            'controls.swipe': 'اسحب = انظر حولك',
            'controls.arrow': 'زر السهم لأعلى = اقفز',
            'controls.hand': 'زر أيقونة اليد = تفاعل',
            
            // Footer
            'footer.description': 'العب Steal Brainrot - لعبة سرقة الميمز المتعددة اللاعبين النهائية. اجمع واسرق ودافع عن ميمز Brainrot الإيطالية النادرة في هذه اللعبة المثيرة للمتصفح.',
            'footer.copyright': '© 2024 StealBrainrotOnline.org. جميع الحقوق محفوظة.',
            'footer.links': 'روابط سريعة',
            'footer.game_info': 'معلومات اللعبة',
            'footer.support': 'الدعم',
            'footer.privacy': 'الخصوصية',
            'footer.terms': 'الشروط',
            'footer.contact': 'اتصل بنا',
            
            // Meta
            'meta.title': 'العب Steal Brainrot - لعبة سرقة الميمز المتعددة اللاعبين مجاناً',
            'meta.description': 'العب Steal Brainrot مجاناً في متصفحك. اجمع واسرق ودافع عن ميمز Brainrot الإيطالية النادرة في هذه اللعبة المتعددة اللاعبين المسببة للإدمان. لا تحميل مطلوب!'
        }
    },
    
    
    'ko': {
        name: '한국어',
        flag: '🇰🇷',
        translations: {
            // Navigation
            'nav.home': '홈',
            'nav.game': '게임',
            'nav.video': '비디오',
            'nav.about': '소개',
            'nav.howto': '게임 방법',
            'nav.faq': 'FAQ',
            
            // Hero Section
            'hero.title': 'Steal Brainrot 플레이',
            'hero.subtitle': '최고의 멀티플레이어 밈 강도 게임',
            'hero.description': '희귀한 이탈리아 브레인롯 밈을 훔치고, 수집하고, 방어하는 혼돈스러운 재미에 참여하세요. 밈 제국을 건설하고 리더보드를 지배하세요!',
            
            // Game Section
            'game.title': 'Steal Brainrot 플레이',
            'game.ready': '플레이 준비됐나요?',
            'game.description': '아래를 클릭하여 Steal Brainrot을 시작하세요!',
            'game.launch': '🚀 게임 시작',
            'game.pwa_experience': '🛡️ 향상된 경험을 위해 PWA Shell을 통해 시작됩니다',
            
            // Game Loading
            'loading.title': '게임 시작 중...',
            'loading.description': '향상된 게임 모드 초기화 중',
            'loading.game': '게임 로딩 중...',
            'loading.initializing': 'Steal Brainrot embed 초기화 중',
            
            // About Section
            'about.title': 'Steal Brainrot 소개',
            'about.subtitle': '혼돈스러운 멀티플레이어 강도 게임',
            'about.content1': 'Steal Brainrot은 인기 있는 이탈리아 브레인롯 클리커 게임에서 나온 Tralalero Tralala와 Cappuccino Assassino 같은 희귀한 브레인롯 밈을 수집하는 빠른 속도의 캐주얼 강도 게임입니다.',
            'about.content2': '레드 카펫에서 브레인롯을 구매하고, 다른 플레이어의 기지에 잠입하여 그들의 것을 훔치고, 함정과 자물쇠로 자신의 것을 보호할 수 있습니다. 부스터를 사용하고, 배송 중 상대를 압도하고, 리더보드를 올라가면서 더 큰 보상을 위해 환생하세요.',
            
            // Video Section
            'video.title': '게임플레이 비디오',
            'video.subtitle': 'Roblox와 브레인롯 게임을 결합한 재미를 경험하세요',
            
            // How to Play
            'howto.title': 'Steal Brainrot 게임 방법',
            'howto.subtitle': '밈 강도의 기술을 마스터하세요',
            'howto.step1.title': '브레인롯 수집',
            'howto.step1.desc': '컨베이어 벨트에서 밈을 구매하거나 다른 플레이어에게서 훔치세요',
            'howto.step2.title': '기지 건설',
            'howto.step2.desc': '기둥에 브레인롯을 배치하여 수동 소득을 생성하세요',
            'howto.step3.title': '컬렉션 방어',
            'howto.step3.desc': '자물쇠와 함정을 사용하여 귀중한 밈을 보호하세요',
            'howto.step4.title': '다른 사람에게서 훔치기',
            'howto.step4.desc': '라이벌 기지에 침투하여 그들의 가장 희귀한 브레인롯을 훔치세요',
            
            // FAQ Section
            'faq.title': '자주 묻는 질문',
            'faq.subtitle': '알아야 할 모든 것',
            'faq.q1': 'Steal a Brainrot 게임은 무엇인가요?',
            'faq.a1': 'Steal Brainrot은 이탈리아 브레인롯 클리커 게임의 것들과 같은 브레인롯을 훔치거나 구매하여 가능한 한 많은 부를 모으는 캐주얼 멀티플레이어 게임입니다. 다른 플레이어들도 당신의 브레인롯을 훔치는 것을 포함하여 정확히 같은 일을 하고 있습니다!',
            'faq.a2': 'Steal a Brainrot은 브레인롯을 훔치거나 구매하여 가능한 한 많은 부를 모으는 빠른 속도의 게임에서 탈출, 모험, 그리고 다른 플레이어들과의 도전을 결합하므로 상당히 중독적일 수 있습니다.',
            'faq.q3': '게임을 다운로드해야 하나요?',
            'faq.a3': '아니오, 다운로드할 필요가 없습니다. 브라우저를 열기만 하면 플레이할 수 있습니다. 모바일 사용자도 설치 없이 플레이할 수 있습니다.',
            'faq.q4': '오프라인으로 플레이할 수 있나요?',
            'faq.a4': '할 수 없습니다. 핵심 재미는 다른 실제 플레이어들로부터 훔치는 것이므로 항상 인터넷 연결이 필요합니다.',
            
            // Controls
            'controls.title': '조작법',
            'controls.desktop': '데스크톱',
            'controls.mobile': '모바일',
            'controls.move': '이동',
            'controls.jump': '점프',
            'controls.interact': '상호작용',
            'controls.home': '홈',
            'controls.joystick': '왼쪽 조이스틱 = 이동',
            'controls.swipe': '스와이프 = 둘러보기',
            'controls.arrow': '위쪽 화살표 버튼 = 점프',
            'controls.hand': '손 아이콘 버튼 = 상호작용',
            
            // Footer
            'footer.description': 'Steal Brainrot 플레이 - 최고의 멀티플레이어 밈 강도 게임. 이 흥미진진한 브라우저 게임에서 희귀한 이탈리아 브레인롯 밈을 수집하고, 훔치고, 방어하세요.',
            'footer.copyright': '© 2024 StealBrainrotOnline.org. 모든 권리 보유.',
            'footer.links': '빠른 링크',
            'footer.game_info': '게임 정보',
            'footer.support': '지원',
            'footer.privacy': '개인정보',
            'footer.terms': '약관',
            'footer.contact': '연락처',
            
            // Meta
            'meta.title': 'Steal Brainrot 플레이 - 무료 멀티플레이어 밈 강도 게임',
            'meta.description': '브라우저에서 무료로 Steal Brainrot을 플레이하세요. 이 중독성 있는 멀티플레이어 게임에서 희귀한 이탈리아 브레인롯 밈을 수집하고, 훔치고, 방어하세요. 다운로드가 필요하지 않습니다!'
        }
    },
    
    'ja': {
        name: '日本語',
        flag: '🇯🇵',
        translations: {
            // Navigation
            'nav.home': 'ホーム',
            'nav.game': 'ゲーム',
            'nav.video': 'ビデオ',
            'nav.about': '概要',
            'nav.howto': '遊び方',
            'nav.faq': 'FAQ',
            
            // Hero Section
            'hero.title': 'Steal Brainrotをプレイ',
            'hero.subtitle': '究極のマルチプレイヤーミーム強盗ゲーム',
            'hero.description': '希少なイタリアのブレインロットミームを盗み、収集し、防御する混沌とした楽しみに参加しましょう。ミーム帝国を築き、リーダーボードを制覇しましょう！',
            
            // Game Section
            'game.title': 'Steal Brainrotをプレイ',
            'game.ready': 'プレイの準備はできましたか？',
            'game.description': '下をクリックしてSteal Brainrotを開始しましょう！',
            'game.launch': '🚀 ゲームを起動',
            'game.pwa_experience': '🛡️ 拡張体験のためPWAシェル経由で起動します',
            
            // Game Loading
            'loading.title': 'ゲームを起動中...',
            'loading.description': '拡張ゲームモードを初期化中',
            'loading.game': 'ゲームを読み込み中...',
            'loading.initializing': 'Steal Brainrot embedを初期化中',
            
            // About Section
            'about.title': 'Steal Brainrotについて',
            'about.subtitle': '混沌としたマルチプレイヤー強盗ゲーム',
            'about.content1': 'Steal Brainrotは、人気のイタリアンブレインロットクリッカーゲームから直接来たTralalero TralalaやCappuccino Assassinoなどの希少なブレインロットミームを収集する、テンポの速いカジュアル強盗ゲームです。',
            'about.content2': 'レッドカーペットからブレインロットを購入したり、他のプレイヤーの基地に潜入して彼らのものを盗んだり、トラップやロックで自分のものを保護したりできます。ブースターを使用し、配送中に対戦相手を上回り、リーダーボードを登る際により大きな報酬のために転生しましょう。',
            
            // Video Section
            'video.title': 'ゲームプレイビデオ',
            'video.subtitle': 'RobloxとBrainrotゲームを組み合わせた楽しさを体験',
            
            // How to Play
            'howto.title': 'Steal Brainrotの遊び方',
            'howto.subtitle': 'ミーム強盗の技術をマスター',
            'howto.step1.title': 'ブレインロットを収集',
            'howto.step1.desc': 'コンベアベルトからミームを購入するか、他のプレイヤーから盗む',
            'howto.step2.title': '基地を建設',
            'howto.step2.desc': '柱にブレインロットを配置して受動的収入を生成',
            'howto.step3.title': 'コレクションを防御',
            'howto.step3.desc': 'ロックとトラップを使用して貴重なミームを保護',
            'howto.step4.title': '他者から盗む',
            'howto.step4.desc': 'ライバルの基地に潜入して最も希少なブレインロットを盗む',
            
            // FAQ Section
            'faq.title': 'よくある質問',
            'faq.subtitle': '知っておくべきすべて',
            'faq.q1': 'Steal a Brainrotゲームとは何ですか？',
            'faq.a1': 'Steal Brainrotは、イタリアンブレインロットクリッカーゲームのようなブレインロットを盗んだり購入したりして、可能な限り多くの富を集めるカジュアルマルチプレイヤーゲームです。他のプレイヤーもあなたのブレインロットを盗むことを含めて、まったく同じことをしています！',
            'faq.q2': 'なぜ人々はSteal a Brainrotをプレイするのですか？',
            'faq.a2': 'Steal a Brainrotは、ブレインロットを盗んだり購入したりして可能な限り多くの富を集める急速なペースのゲームで、逃避、冒険、他のプレイヤーとの挑戦を組み合わせているため、非常に中毒性があります。',
            'faq.q3': 'ゲームをダウンロードする必要がありますか？',
            'faq.a3': 'いいえ、ダウンロードする必要はありません。ブラウザを開くだけでプレイできます。モバイルユーザーもインストールなしでプレイできます。',
            'faq.q4': 'オフラインでプレイできますか？',
            'faq.a4': 'できません。コアの楽しみは他の実際のプレイヤーから盗むことなので、常にインターネット接続が必要です。',
            
            // Controls
            'controls.title': '操作',
            'controls.desktop': 'デスクトップ',
            'controls.mobile': 'モバイル',
            'controls.move': '移動',
            'controls.jump': 'ジャンプ',
            'controls.interact': '相互作用',
            'controls.home': 'ホーム',
            'controls.joystick': '左ジョイスティック = 移動',
            'controls.swipe': 'スワイプ = 見回す',
            'controls.arrow': '上矢印ボタン = ジャンプ',
            'controls.hand': '手のアイコンボタン = 相互作用',
            
            // Footer
            'footer.description': 'Steal Brainrotをプレイ - 究極のマルチプレイヤーミーム強盗ゲーム。このエキサイティングなブラウザゲームで希少なイタリアのブレインロットミームを収集、盗取、防御しましょう。',
            'footer.copyright': '© 2024 StealBrainrotOnline.org. 全著作権所有。',
            'footer.links': 'クイックリンク',
            'footer.game_info': 'ゲーム情報',
            'footer.support': 'サポート',
            'footer.privacy': 'プライバシー',
            'footer.terms': '利用規約',
            'footer.contact': '連絡先',
            
            // Meta
            'meta.title': 'Steal Brainrotをプレイ - 無料マルチプレイヤーミーム強盗ゲーム',
            'meta.description': 'ブラウザでSteal Brainrotを無料でプレイ。この中毒性のあるマルチプレイヤーゲームで希少なイタリアのブレインロットミームを収集、盗取、防御しましょう。ダウンロード不要！'
        }
    },
    
    'de': {
        name: 'Deutsch',
        flag: '🇩🇪',
        translations: {
            // Navigation
            'nav.home': 'Startseite',
            'nav.game': 'Spiel',
            'nav.video': 'Video',
            'nav.about': 'Über',
            'nav.howto': 'Spielanleitung',
            'nav.faq': 'FAQ',
            
            // Hero Section
            'hero.title': 'Steal Brainrot spielen',
            'hero.subtitle': 'Das ultimative Multiplayer-Meme-Raub-Spiel',
            'hero.description': 'Beteiligen Sie sich am chaotischen Spaß beim Stehlen, Sammeln und Verteidigen seltener italienischer Brainrot-Memes. Bauen Sie Ihr Meme-Imperium auf und dominieren Sie die Ranglisten!',
            
            // Game Section
            'game.title': 'Steal Brainrot spielen',
            'game.ready': 'Bereit zu spielen?',
            'game.description': 'Klicken Sie unten, um Steal Brainrot zu starten!',
            'game.launch': '🚀 Spiel starten',
            'game.pwa_experience': '🛡️ Startet über PWA Shell für verbesserte Erfahrung',
            
            // Game Loading
            'loading.title': 'Spiel wird gestartet...',
            'loading.description': 'Verbesserter Spielmodus wird initialisiert',
            'loading.game': 'Spiel wird geladen...',
            'loading.initializing': 'Steal Brainrot embed wird initialisiert',
            
            // About Section
            'about.title': 'Über Steal Brainrot',
            'about.subtitle': 'Ein chaotisches Multiplayer-Raub-Spiel',
            'about.content1': 'Steal Brainrot ist ein schnelles, lockeres Raub-Spiel, bei dem Sie seltene Brainrot-Memes wie Tralalero Tralala und Cappuccino Assassino sammeln, direkt aus dem beliebten italienischen Brainrot Clicker Game.',
            'about.content2': 'Sie können Braintorts vom roten Teppich kaufen, in die Basen anderer Spieler eindringen, um ihre zu stehlen, und Ihre eigenen mit Fallen und Schlössern schützen. Verwenden Sie Booster, überbieten Sie Gegner bei Lieferungen und werden Sie für größere Belohnungen wiedergeboren, während Sie die Rangliste erklimmen.',
            
            // Video Section
            'video.title': 'Gameplay-Video',
            'video.subtitle': 'Erleben Sie den Spaß der Kombination von Roblox und Brainrot-Spielen',
            
            // How to Play
            'howto.title': 'Wie man Steal Brainrot spielt',
            'howto.subtitle': 'Meistern Sie die Kunst des Meme-Raubes',
            'howto.step1.title': 'Brainrots sammeln',
            'howto.step1.desc': 'Kaufen Sie Memes vom Förderband oder stehlen Sie sie von anderen Spielern',
            'howto.step2.title': 'Ihre Basis aufbauen',
            'howto.step2.desc': 'Platzieren Sie Brainrots auf Säulen, um passives Einkommen zu generieren',
            'howto.step3.title': 'Ihre Sammlung verteidigen',
            'howto.step3.desc': 'Verwenden Sie Schlösser und Fallen, um Ihre wertvollen Memes zu schützen',
            'howto.step4.title': 'Von anderen stehlen',
            'howto.step4.desc': 'Infiltrieren Sie rivalisierende Basen und stehlen Sie ihre seltensten Brainrots',
            
            // FAQ Section
            'faq.title': 'Häufig gestellte Fragen',
            'faq.subtitle': 'Alles was Sie wissen müssen',
            'faq.q1': 'Worum geht es beim Spiel Steal a Brainrot?',
            'faq.a1': 'Steal Brainrot ist ein lockeres Multiplayer-Spiel, bei dem Sie Brainrots stehlen oder kaufen, genau wie die aus dem italienischen Brainrot Clicker Game, um so viel Reichtum wie möglich zu sammeln, während andere Spieler genau dasselbe tun, einschließlich des Stehlens Ihrer Brainrots!',
            'faq.q2': 'Warum spielen Leute Steal a Brainrot?',
            'faq.a2': 'Steal a Brainrot kann ziemlich süchtig machen, da es Flucht, Abenteuer und Herausforderungen gegen andere Spieler in einem schnellen Spiel kombiniert, bei dem Sie Brainrots stehlen oder kaufen, um so viel Reichtum wie möglich zu sammeln.',
            'faq.q3': 'Muss ich das Spiel herunterladen?',
            'faq.a3': 'Nein, Sie müssen es nicht herunterladen. Öffnen Sie einfach Ihren Browser und Sie können spielen. Mobile Benutzer können auch ohne Installation spielen.',
            'faq.q4': 'Kann ich offline spielen?',
            'faq.a4': 'Das können Sie nicht, der Kernspaß liegt darin, von anderen echten Spielern zu stehlen, daher benötigen Sie durchgehend eine Internetverbindung.',
            
            // Controls
            'controls.title': 'Steuerung',
            'controls.desktop': 'Desktop',
            'controls.mobile': 'Mobil',
            'controls.move': 'Bewegen',
            'controls.jump': 'Springen',
            'controls.interact': 'Interagieren',
            'controls.home': 'Startseite',
            'controls.joystick': 'Linker Joystick = bewegen',
            'controls.swipe': 'Wischen = umsehen',
            'controls.arrow': 'Aufwärtspfeil-Taste = springen',
            'controls.hand': 'Hand-Symbol-Taste = interagieren',
            
            // Footer
            'footer.description': 'Spielen Sie Steal Brainrot - Das ultimative Multiplayer-Meme-Raub-Spiel. Sammeln, stehlen und verteidigen Sie seltene italienische Brainrot-Memes in diesem aufregenden Browser-Spiel.',
            'footer.copyright': '© 2024 StealBrainrotOnline.org. Alle Rechte vorbehalten.',
            'footer.links': 'Schnelle Links',
            'footer.game_info': 'Spiel-Info',
            'footer.support': 'Support',
            'footer.privacy': 'Datenschutz',
            'footer.terms': 'Bedingungen',
            'footer.contact': 'Kontakt',
            
            // Meta
            'meta.title': 'Steal Brainrot spielen - Kostenloses Multiplayer-Meme-Raub-Spiel',
            'meta.description': 'Spielen Sie Steal Brainrot kostenlos in Ihrem Browser. Sammeln, stehlen und verteidigen Sie seltene italienische Brainrot-Memes in diesem süchtig machenden Multiplayer-Spiel. Kein Download erforderlich!'
        }
    },
    
    'fr': {
        name: 'Français',
        flag: '🇫🇷',
        translations: {
            // Navigation
            'nav.home': 'Accueil',
            'nav.game': 'Jeu',
            'nav.video': 'Vidéo',
            'nav.about': 'À propos',
            'nav.howto': 'Comment jouer',
            'nav.faq': 'FAQ',
            
            // Hero Section
            'hero.title': 'Jouer à Steal Brainrot',
            'hero.subtitle': 'Le jeu de vol de mèmes multijoueur ultime',
            'hero.description': 'Rejoignez le plaisir chaotique de voler, collectionner et défendre des mèmes Brainrot italiens rares. Construisez votre empire de mèmes et dominez les classements !',
            
            // Game Section
            'game.title': 'Jouer à Steal Brainrot',
            'game.ready': 'Prêt à jouer ?',
            'game.description': 'Cliquez ci-dessous pour commencer à jouer Steal Brainrot !',
            'game.launch': '🚀 Lancer le jeu',
            'game.pwa_experience': '🛡️ Se lance via PWA Shell pour une expérience améliorée',
            
            // Game Loading
            'loading.title': 'Lancement du jeu...',
            'loading.description': 'Initialisation du mode de jeu amélioré',
            'loading.game': 'Chargement du jeu...',
            'loading.initializing': 'Initialisation de Steal Brainrot embed',
            
            // About Section
            'about.title': 'À propos de Steal Brainrot',
            'about.subtitle': 'Un jeu de vol multijoueur chaotique',
            'about.content1': 'Steal Brainrot est un jeu de vol décontracté et rapide où vous collectionnez des mèmes Brainrot rares comme Tralalero Tralala et Cappuccino Assassino, directement du populaire Jeu Clicker Brainrot Italien.',
            'about.content2': 'Vous pouvez acheter des Braintorts depuis le tapis rouge, vous faufiler dans les bases d\'autres joueurs pour voler les leurs, et protéger les vôtres avec des pièges et des verrous. Utilisez des boosters, surenchérissez sur les adversaires lors des livraisons, et renaissez pour de plus grandes récompenses en gravissant le classement.',
            
            // Video Section
            'video.title': 'Vidéo de gameplay',
            'video.subtitle': 'Découvrez le plaisir de combiner les jeux Roblox et Brainrot',
            
            // How to Play
            'howto.title': 'Comment jouer à Steal Brainrot',
            'howto.subtitle': 'Maîtrisez l\'art du vol de mèmes',
            'howto.step1.title': 'Collectez des Brainrots',
            'howto.step1.desc': 'Achetez des mèmes sur le tapis roulant ou volez-les à d\'autres joueurs',
            'howto.step2.title': 'Construisez votre base',
            'howto.step2.desc': 'Placez des Brainrots sur des piliers pour générer des revenus passifs',
            'howto.step3.title': 'Défendez votre collection',
            'howto.step3.desc': 'Utilisez des verrous et des pièges pour protéger vos mèmes précieux',
            'howto.step4.title': 'Volez aux autres',
            'howto.step4.desc': 'Infiltrez les bases rivales et volez leurs Brainrots les plus rares',
            
            // FAQ Section
            'faq.title': 'Questions fréquentes',
            'faq.subtitle': 'Tout ce que vous devez savoir',
            'faq.q1': 'De quoi parle le jeu Steal a Brainrot ?',
            'faq.a1': 'Steal Brainrot est un jeu multijoueur décontracté où vous volez ou achetez des Brainrots, comme ceux du Jeu Clicker Brainrot Italien, pour collecter autant de richesse que possible, tandis que d\'autres joueurs font exactement la même chose, y compris voler vos Brainrots !',
            'faq.q2': 'Pourquoi les gens jouent-ils à Steal a Brainrot ?',
            'faq.a2': 'Steal a Brainrot peut être assez addictif car il combine évasion, aventure et défis contre d\'autres joueurs dans un jeu rapide où vous volez ou achetez des Brainrots pour rassembler autant de richesse que possible.',
            'faq.q3': 'Dois-je télécharger le jeu ?',
            'faq.a3': 'Non, vous n\'avez pas besoin de le télécharger. Ouvrez simplement votre navigateur et vous pouvez jouer. Les utilisateurs mobiles peuvent également jouer sans installation.',
            'faq.q4': 'Puis-je jouer hors ligne ?',
            'faq.a4': 'Vous ne pouvez pas, le plaisir principal est de voler à d\'autres vrais joueurs, donc vous avez besoin d\'une connexion internet en permanence.',
            
            // Controls
            'controls.title': 'Contrôles',
            'controls.desktop': 'Bureau',
            'controls.mobile': 'Mobile',
            'controls.move': 'Bouger',
            'controls.jump': 'Sauter',
            'controls.interact': 'Interagir',
            'controls.home': 'Accueil',
            'controls.joystick': 'Joystick gauche = bouger',
            'controls.swipe': 'Glisser = regarder autour',
            'controls.arrow': 'Bouton flèche vers le haut = sauter',
            'controls.hand': 'Bouton icône main = interagir',
            
            // Footer
            'footer.description': 'Jouez à Steal Brainrot - Le jeu de vol de mèmes multijoueur ultime. Collectionnez, volez et défendez des mèmes Brainrot italiens rares dans ce jeu de navigateur passionnant.',
            'footer.copyright': '© 2024 StealBrainrotOnline.org. Tous droits réservés.',
            'footer.links': 'Liens rapides',
            'footer.game_info': 'Info jeu',
            'footer.support': 'Support',
            'footer.privacy': 'Confidentialité',
            'footer.terms': 'Conditions',
            'footer.contact': 'Contact',
            
            // Meta
            'meta.title': 'Jouer à Steal Brainrot - Jeu de vol de mèmes multijoueur gratuit',
            'meta.description': 'Jouez gratuitement à Steal Brainrot dans votre navigateur. Collectionnez, volez et défendez des mèmes Brainrot italiens rares dans ce jeu multijoueur addictif. Aucun téléchargement requis !',
            
            // PWA Shell
            'pwa.refresh': 'Actualiser',
            'pwa.home': 'Accueil',
            'pwa.starting': 'Démarrage du jeu',
            'pwa.initializing': 'Initialisation de l\'environnement de jeu sécurisé...',
            'pwa.enhanced': '🛡️ Jeu amélioré PWA',
            'pwa.bypassing': 'Contournement des restrictions iframe pour une expérience fluide',
            'pwa.error.title': 'Problème de chargement du jeu',
            'pwa.error.description': 'Le jeu n\'a pas pu se charger en mode PWA en raison de restrictions de sécurité.',
            'pwa.error.solution': 'Ne vous inquiétez pas, nous avons des solutions alternatives !',
            'pwa.error.open_browser': '🚀 Ouvrir dans le navigateur',
            'pwa.error.try_platform': '🎮 Essayer une plateforme différente',
            'pwa.error.back_home': '🏠 Retour à l\'accueil'
        }
    },
    
    'zh-cn': {
        name: '中文（简体）',
        flag: '🇨🇳',
        translations: {
            // Navigation
            'nav.home': '首页',
            'nav.game': '游戏',
            'nav.video': '视频',
            'nav.about': '关于',
            'nav.howto': '游戏方法',
            'nav.faq': '常见问题',
            
            // Hero Section
            'hero.title': '玩 Steal Brainrot',
            'hero.subtitle': '终极多人梗图抢劫游戏',
            'hero.description': '加入混乱有趣的偷窃、收集和防御稀有意大利脑损梗图的行列。建立你的梗图帝国，称霸排行榜！',
            
            // Game Section
            'game.title': '玩 Steal Brainrot',
            'game.ready': '准备好游戏了吗？',
            'game.description': '点击下面开始玩 Steal Brainrot！',
            'game.launch': '🚀 启动游戏',
            'game.pwa_experience': '🛡️ 通过 PWA Shell 启动以获得增强体验',
            
            // Game Loading
            'loading.title': '正在启动游戏...',
            'loading.description': '正在初始化增强游戏模式',
            'loading.game': '正在加载游戏...',
            'loading.initializing': '正在初始化 Steal Brainrot 嵌入',
            
            // About Section
            'about.title': '关于 Steal Brainrot',
            'about.subtitle': '一个混乱的多人抢劫游戏',
            'about.content1': 'Steal Brainrot 是一个快节奏的休闲抢劫游戏，你可以收集稀有的脑损梗图，如 Tralalero Tralala 和 Cappuccino Assassino，直接来自流行的意大利脑损点击游戏。',
            'about.content2': '你可以从红毯购买脑损梗图，潜入其他玩家的基地偷窃他们的，并用陷阱和锁保护自己的。使用助推器，在交付期间出价超过对手，并重生获得更大的奖励，同时攀登排行榜。',
            
            // Video Section
            'video.title': '游戏视频',
            'video.subtitle': '体验结合 Roblox 和脑损游戏的乐趣',
            
            // How to Play
            'howto.title': '如何玩 Steal Brainrot',
            'howto.subtitle': '掌握梗图抢劫的艺术',
            'howto.step1.title': '收集脑损梗图',
            'howto.step1.desc': '从传送带购买梗图或从其他玩家那里偷窃',
            'howto.step2.title': '建造你的基地',
            'howto.step2.desc': '将脑损梗图放在柱子上以产生被动收入',
            'howto.step3.title': '防御你的收藏',
            'howto.step3.desc': '使用锁和陷阱保护你宝贵的梗图',
            'howto.step4.title': '从别人那里偷窃',
            'howto.step4.desc': '渗透对手基地并偷窃他们最稀有的脑损梗图',
            
            // FAQ Section
            'faq.title': '常见问题',
            'faq.subtitle': '你需要知道的一切',
            'faq.q1': 'Steal a Brainrot 游戏是关于什么的？',
            'faq.a1': 'Steal Brainrot 是一个休闲多人游戏，你偷窃或购买脑损梗图，就像意大利脑损点击游戏中的那些一样，以收集尽可能多的财富，而其他玩家也在做完全相同的事情，包括偷窃你的脑损梗图！',
            'faq.q2': '为什么人们玩 Steal a Brainrot？',
            'faq.a2': 'Steal a Brainrot 可能相当上瘾，因为它在一个快节奏的游戏中结合了逃脱、冒险和对抗其他玩家的挑战，你偷窃或购买脑损梗图以收集尽可能多的财富。',
            'faq.q3': '我需要下载游戏吗？',
            'faq.a3': '不，你不需要下载它。只需打开你的浏览器就可以玩。移动用户也可以无需安装就能玩。',
            'faq.q4': '我可以离线玩吗？',
            'faq.a4': '你不能，核心乐趣在于从其他真实玩家那里偷窃，所以你需要全程互联网连接。',
            
            // Controls
            'controls.title': '控制',
            'controls.desktop': '桌面',
            'controls.mobile': '移动端',
            'controls.move': '移动',
            'controls.jump': '跳跃',
            'controls.interact': '互动',
            'controls.home': '首页',
            'controls.joystick': '左摇杆 = 移动',
            'controls.swipe': '滑动 = 环顾四周',
            'controls.arrow': '向上箭头按钮 = 跳跃',
            'controls.hand': '手型图标按钮 = 互动',
            
            // Footer
            'footer.description': '玩 Steal Brainrot - 终极多人梗图抢劫游戏。在这个激动人心的浏览器游戏中收集、偷窃和防御稀有的意大利脑损梗图。',
            'footer.copyright': '© 2024 StealBrainrotOnline.org. 版权所有。',
            'footer.links': '快速链接',
            'footer.game_info': '游戏信息',
            'footer.support': '支持',
            'footer.privacy': '隐私',
            'footer.terms': '条款',
            'footer.contact': '联系',
            
            // Meta
            'meta.title': '玩 Steal Brainrot - 免费多人梗图抢劫游戏',
            'meta.description': '在你的浏览器中免费玩 Steal Brainrot。在这个令人上瘾的多人游戏中收集、偷窃和防御稀有的意大利脑损梗图。无需下载！',
            
            // PWA Shell
            'pwa.refresh': '刷新',
            'pwa.home': '首页',
            'pwa.starting': '启动游戏',
            'pwa.initializing': '正在初始化安全游戏环境...',
            'pwa.enhanced': '🛡️ PWA 增强游戏',
            'pwa.bypassing': '绕过 iframe 限制以获得无缝体验',
            'pwa.error.title': '游戏加载问题',
            'pwa.error.description': '由于安全限制，游戏无法在 PWA 模式下加载。',
            'pwa.error.solution': '别担心，我们有替代解决方案！',
            'pwa.error.open_browser': '🚀 在浏览器中打开',
            'pwa.error.try_platform': '🎮 尝试不同平台',
            'pwa.error.back_home': '🏠 返回首页'
        }
    }
};

// 语言管理器类
class LanguageManager {
    constructor() {
        this.currentLanguage = this.detectLanguage();
        this.init();
    }
    
    // 检测用户语言（支持子域名检测）
    detectLanguage() {
        // 1. 检查当前子域名
        const hostname = window.location.hostname;
        const subdomainMatch = hostname.match(/^([a-z-]+)\./);
        
        if (subdomainMatch) {
            const subdomain = subdomainMatch[1];
            // 检查子域名是否对应支持的语言
            if (LANGUAGES[subdomain]) {
                return subdomain;
            }
        }
        
        // 2. 检查路径中的语言代码（用于本地测试）
        const pathname = window.location.pathname;
        const pathLangMatch = pathname.match(/^\/([a-z-]+)\//);
        if (pathLangMatch) {
            const pathLang = pathLangMatch[1];
            if (LANGUAGES[pathLang]) {
                return pathLang;
            }
        }
        
        // 3. 对于主域名，默认使用英语
        if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname === 'stealbrainrot.co') {
            return 'en';
        }
        
        // 4. 默认英语
        return 'en';
    }
    
    // 初始化
    init() {
        // 清除可能存在的旧语言偏好，让每个页面使用自己的默认语言
        localStorage.removeItem('preferred-language');
        this.applyLanguage();
        this.updateRTL();
    }
    
    // 切换语言（GitHub + Cloudflare子域名方案）
    switchLanguage(langCode) {
        if (!LANGUAGES[langCode]) {
            console.error('Language not supported:', langCode);
            return;
        }
        
        // 保存语言偏好
        localStorage.setItem('preferred-language', langCode);
        
        // 构建子域名URL
        const currentHost = window.location.hostname;
        const currentPath = window.location.pathname;
        const currentSearch = window.location.search;
        const currentHash = window.location.hash;
        
        let targetUrl;
        
        // 统一规范路径：去掉可能存在的语言前缀 /en|zh-cn|es|ar|ko|ja|de|fr
        const normalizedPath = currentPath.replace(/^\/(en|zh-cn|es|ar|ko|ja|de|fr)(?=\/|$)/i, '');
        const safePath = normalizedPath === '' ? '/' : normalizedPath;

        // 检查是否为本地开发环境
        const isLocalDev = currentHost === 'localhost' || currentHost === '127.0.0.1' || currentHost.includes('localhost');
        
        if (isLocalDev) {
            // 本地开发环境：使用路径前缀而不是子域名
            if (langCode === 'en') {
                targetUrl = `http://${currentHost}:8000${safePath}${currentSearch}${currentHash}`;
            } else {
                targetUrl = `http://${currentHost}:8000/${langCode}${safePath}${currentSearch}${currentHash}`;
            }
        } else {
            // 生产环境：使用子域名
            if (langCode === 'en') {
                // 英文使用主域名
                targetUrl = `https://stealbrainrot.co${safePath}${currentSearch}${currentHash}`;
            } else {
                // 其他语言使用子域名
                targetUrl = `https://${langCode}.stealbrainrot.co${safePath}${currentSearch}${currentHash}`;
            }
        }
        
        console.log('Switching to language:', langCode);
        console.log('Target URL:', targetUrl);
        
        // 跳转到对应的子域名或路径
        window.location.href = targetUrl;
    }
    
    // 应用语言
    applyLanguage() {
        const translations = LANGUAGES[this.currentLanguage].translations;
        
        // 更新所有带有 data-i18n 属性的元素
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[key]) {
                if (element.tagName === 'INPUT' && element.type === 'submit') {
                    element.value = translations[key];
                } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[key];
                } else {
                    element.textContent = translations[key];
                }
            }
        });
        
        // 更新元数据
        this.updateMetadata();
    }
    
    // 更新RTL支持
    updateRTL() {
        const isRTL = LANGUAGES[this.currentLanguage].rtl;
        document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
        document.body.classList.toggle('rtl', isRTL);
    }
    
    // 更新HTML lang属性
    updateHTML() {
        document.documentElement.lang = this.currentLanguage;
    }
    
    // 更新页面元数据
    updateMetadata() {
        const translations = LANGUAGES[this.currentLanguage].translations;
        
        // 更新标题
        if (translations['meta.title']) {
            document.title = translations['meta.title'];
        }
        
        // 更新描述
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && translations['meta.description']) {
            metaDesc.content = translations['meta.description'];
        }
        
        // 更新OG标签
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle && translations['meta.title']) {
            ogTitle.content = translations['meta.title'];
        }
        
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc && translations['meta.description']) {
            ogDesc.content = translations['meta.description'];
        }
    }
    
    // 获取翻译文本
    t(key) {
        const translations = LANGUAGES[this.currentLanguage].translations;
        return translations[key] || key;
    }
    
    // 获取当前语言信息
    getCurrentLanguage() {
        return LANGUAGES[this.currentLanguage];
    }
    
    // 获取所有可用语言
    getAvailableLanguages() {
        return Object.keys(LANGUAGES).map(code => ({
            code,
            name: LANGUAGES[code].name,
            flag: LANGUAGES[code].flag,
            rtl: LANGUAGES[code].rtl || false
        }));
    }
}

// 全局语言管理器实例
let languageManager;

// DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    languageManager = new LanguageManager();
    
    // 为PWA游戏壳提供语言支持
    window.languageManager = languageManager;
});

// 导出给其他脚本使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LANGUAGES, LanguageManager };
}
