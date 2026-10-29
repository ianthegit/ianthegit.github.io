<!DOCTYPE html>
<html lang="en" class="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Gridle: Overhanging Frame Edition</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        brand: {
                            50: '#f0fdf4',
                            100: '#dcfce7',
                            500: '#22c55e',
                            600: '#16a34a',
                            700: '#15803d',
                        }
                    },
                    animation: {
                        'pop': 'pop 0.22s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                        'shimmer': 'shimmer 2.5s infinite linear'
                    },
                    keyframes: {
                        pop: {
                            '0%': { transform: 'scale(0.82)', opacity: '0' },
                            '100%': { transform: 'scale(1)', opacity: '1' }
                        },
                        shimmer: {
                            '0%': { backgroundPosition: '-200% 0' },
                            '100%': { backgroundPosition: '200% 0' }
                        }
                    }
                }
            }
        }
    </script>
    <!-- FontAwesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Canvas Confetti -->
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>
    <style>
        body {
            touch-action: manipulation;
            user-select: none;
            -webkit-user-select: none;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .tile {
            transition: transform 0.15s ease, box-shadow 0.15s ease, background-color 0.2s ease, border-color 0.2s ease;
            cursor: grab;
            touch-action: none;
        }

        .tile:active, .tile.dragging {
            cursor: grabbing;
            transform: scale(1.12);
            z-index: 50;
            box-shadow: 0 12px 28px -5px rgba(0, 0, 0, 0.35);
        }

        .slot {
            transition: all 0.2s ease;
        }

        .slot.drag-over {
            border-color: #3b82f6 !important;
            background-color: rgba(59, 130, 246, 0.25) !important;
            transform: scale(1.06);
        }

        /* Valid word glowing ribbons */
        .valid-word-tile-gold {
            background: linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%) !important;
            border-color: #facc15 !important;
            color: #ffffff !important;
            box-shadow: 0 0 16px rgba(234, 179, 8, 0.8), inset 0 1px 2px rgba(255, 255, 255, 0.5);
            animation: shimmer 3s infinite linear;
            background-size: 200% 100% !important;
        }

        .modal-backdrop {
            background-color: rgba(15, 23, 42, 0.8);
            backdrop-filter: blur(6px);
        }

        .board-scroll::-webkit-scrollbar {
            height: 6px;
            width: 6px;
        }
        .board-scroll::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 9999px;
        }
        .dark .board-scroll::-webkit-scrollbar-thumb {
            background: #475569;
        }
    </style>
</head>
<body class="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-100 min-h-screen flex flex-col justify-between transition-colors duration-300">

    <!-- Top Navigation Bar -->
    <header class="w-full max-w-2xl mx-auto px-4 py-3 flex items-center justify-between border-b border-slate-200 dark:border-slate-800">
        <div class="flex items-center space-x-1.5">
            <button id="btn-help" class="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition" title="How to Play">
                <i class="fa-solid fa-circle-question text-xl"></i>
            </button>
            <button id="btn-stats" class="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition" title="Statistics">
                <i class="fa-solid fa-chart-simple text-xl"></i>
            </button>
        </div>

        <div class="text-center">
            <h1 class="text-2xl sm:text-3xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-amber-300 dark:from-cyan-300 dark:via-emerald-300 dark:to-amber-200">
                GRIDLE
            </h1>
            <div class="flex items-center justify-center space-x-1">
                <span id="mode-badge" class="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-cyan-500 dark:text-cyan-400">Overhanging Frame Edition</span>
            </div>
        </div>

        <div class="flex items-center space-x-1.5">
            <button id="btn-sound" class="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition" title="Toggle Sound">
                <i id="icon-sound" class="fa-solid fa-volume-high text-xl"></i>
            </button>
            <button id="btn-theme" class="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition" title="Toggle Theme">
                <i id="icon-theme" class="fa-solid fa-sun text-xl"></i>
            </button>
        </div>
    </header>

    <!-- Main Game Workspace -->
    <main class="flex-1 max-w-xl w-full mx-auto px-3 py-2 flex flex-col items-center justify-between">
        
        <!-- Game Status & Timer Header -->
        <div class="w-full flex items-center justify-between bg-white dark:bg-slate-800 px-3.5 py-2 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 text-xs sm:text-sm mb-2">
            <div class="flex items-center space-x-1.5 text-slate-600 dark:text-slate-300">
                <i class="fa-regular fa-clock text-slate-400"></i>
                <span id="timer-display" class="font-mono font-bold">00:00</span>
            </div>

            <div class="flex items-center space-x-1 text-slate-600 dark:text-slate-300">
                <span class="text-slate-400">Moves:</span>
                <span id="moves-display" class="font-bold text-slate-800 dark:text-slate-100">0</span>
            </div>

            <button id="btn-mode-toggle" class="text-xs font-bold px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 transition">
                Practice Mode
            </button>
        </div>

        <!-- Practice Mode Dimension Filter (ONLY SHOWN IN PRACTICE MODE) -->
        <div id="practice-length-selectors" class="w-full mb-2 hidden flex-col items-center gap-1.5 bg-slate-200/60 dark:bg-slate-800/60 p-2 rounded-xl border border-slate-300/50 dark:border-slate-700/50">
            <span class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Practice Grid Dimensions</span>
            <div class="flex flex-wrap justify-center gap-1.5">
                <button data-size="all" class="btn-size-filter text-[11px] font-bold px-2.5 py-1 rounded-lg bg-emerald-600 text-white shadow-sm transition">All Sizes</button>
                <button data-size="5" class="btn-size-filter text-[11px] font-bold px-2.5 py-1 rounded-lg bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-600 transition">5x5 Frame</button>
                <button data-size="6" class="btn-size-filter text-[11px] font-bold px-2.5 py-1 rounded-lg bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-600 transition">6x6 Frame</button>
                <button data-size="7" class="btn-size-filter text-[11px] font-bold px-2.5 py-1 rounded-lg bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-600 transition">7x7 Frame</button>
            </div>
        </div>

        <!-- Interactive Board Grid Viewport -->
        <div class="w-full board-scroll overflow-x-auto flex items-center justify-center py-1 mb-2">
            <div id="board-viewport" class="relative bg-slate-200/90 dark:bg-slate-800/90 p-3 sm:p-4 rounded-2xl shadow-inner border-2 border-slate-300 dark:border-slate-700 transition-all duration-300 min-w-[280px]">
                <div id="grid-container" class="grid gap-1.5 relative"></div>
            </div>
        </div>

        <!-- Toolbar Buttons (Directly ABOVE the Letter Tray) -->
        <div class="w-full flex items-center justify-between gap-2 mb-3 max-w-[480px]">
            <button id="btn-check" class="flex-1 py-2 px-2 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 rounded-xl font-bold text-xs flex items-center justify-center space-x-1 hover:bg-emerald-500/20 active:scale-95 transition">
                <i class="fa-solid fa-spell-check"></i>
                <span>Check Words</span>
            </button>
            <button id="btn-hint" class="flex-1 py-2 px-2 bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30 rounded-xl font-bold text-xs flex items-center justify-center space-x-1 hover:bg-amber-500/20 active:scale-95 transition">
                <i class="fa-solid fa-lightbulb"></i>
                <span>Hint (<span id="hint-count">3</span>)</span>
            </button>
            <button id="btn-undo" class="flex-1 py-2 px-2 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl font-bold text-xs flex items-center justify-center space-x-1 hover:bg-slate-300 dark:hover:bg-slate-600 active:scale-95 transition disabled:opacity-40 disabled:cursor-not-allowed">
                <i class="fa-solid fa-rotate-left"></i>
                <span>Undo</span>
            </button>
            <button id="btn-shuffle" class="flex-1 py-2 px-2 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl font-bold text-xs flex items-center justify-center space-x-1 hover:bg-slate-300 dark:hover:bg-slate-600 active:scale-95 transition">
                <i class="fa-solid fa-shuffle"></i>
                <span>Shuffle</span>
            </button>
        </div>

        <!-- Unplaced Jumbled Letter Tray (VERY BOTTOM) -->
        <div id="pool-drop-zone" class="w-full bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-md border-2 border-slate-200 dark:border-slate-700 min-h-[100px] flex flex-col justify-center max-w-[480px] transition-colors mb-2">
            <div class="flex items-center justify-between mb-1.5 px-1">
                <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Unplaced Letter Pool (Drop here to return)</span>
                <span id="pool-counter" class="text-[11px] font-bold text-slate-500 dark:text-slate-400">0 tiles left</span>
            </div>
            <div id="pool-container" class="flex flex-wrap justify-center items-center gap-1.5 max-h-[120px] overflow-y-auto">
                <!-- Letter tiles rendered here -->
            </div>
        </div>

    </main>

    <!-- Toast Notification -->
    <div id="toast" class="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-xs font-semibold shadow-lg transition-all duration-300 opacity-0 pointer-events-none translate-y-4 flex items-center space-x-2">
        <span id="toast-text">Notification message</span>
    </div>

    <!-- Modals -->

    <!-- How to Play Modal -->
    <div id="modal-help" class="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop hidden">
        <div class="bg-white dark:bg-slate-800 rounded-2xl max-w-md w-full p-5 shadow-2xl border border-slate-200 dark:border-slate-700 max-h-[90vh] overflow-y-auto">
            <div class="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-700 mb-3">
                <h3 class="text-lg font-extrabold text-slate-800 dark:text-slate-100">How to Play Gridle</h3>
                <button class="btn-close-modal text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                    <i class="fa-solid fa-xmark text-lg"></i>
                </button>
            </div>
            <div class="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <p>Solve the 4-word frame where words intersect and overhang past corners!</p>
                
                <div class="bg-slate-100 dark:bg-slate-700/50 p-3 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2">
                    <div class="flex items-center space-x-2">
                        <div class="w-6 h-6 bg-cyan-600 text-white font-bold rounded flex items-center justify-center text-xs shadow-sm"><i class="fa-solid fa-shield text-[10px]"></i></div>
                        <span>The <strong>4 Corner Anchors</strong> are locked in place as given starting clues!</span>
                    </div>
                    <div class="flex items-center space-x-2">
                        <div class="w-6 h-6 bg-emerald-600 border border-amber-300 text-white font-bold rounded flex items-center justify-center text-xs shadow-sm">W</div>
                        <span><strong>Valid Words</strong> light up with glowing golden-emerald ribbons when complete!</span>
                    </div>
                </div>

                <p><strong>Overhanging Mechanics & Rules:</strong></p>
                <ul class="list-disc pl-5 space-y-1.5">
                    <li>The 4 words (Top, Bottom, Left, Right) form a frame, but <strong>words can overhang past the corner intersection points</strong>.</li>
                    <li>Drag tiles from the tray to grid slots, between grid slots, or drag placed tiles back to the tray to return them.</li>
                    <li>Tap a tile to select and place it, or tap a placed tile on the grid to instantly return it to your tray.</li>
                    <li>Use the <strong>Undo</strong> button to rewind your moves step-by-step.</li>
                    <li>Complete all 4 words simultaneously with valid English dictionary words to win!</li>
                </ul>
            </div>
            <button class="btn-close-modal w-full mt-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow transition">Play Gridle</button>
        </div>
    </div>

    <!-- Stats Modal -->
    <div id="modal-stats" class="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop hidden">
        <div class="bg-white dark:bg-slate-800 rounded-2xl max-w-md w-full p-5 shadow-2xl border border-slate-200 dark:border-slate-700">
            <div class="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-700 mb-4">
                <h3 class="text-lg font-extrabold text-slate-800 dark:text-slate-100">Statistics</h3>
                <button class="btn-close-modal text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                    <i class="fa-solid fa-xmark text-lg"></i>
                </button>
            </div>
            <div class="grid grid-cols-4 gap-2 text-center my-4">
                <div class="bg-slate-100 dark:bg-slate-700/50 p-2 rounded-xl">
                    <div id="stat-played" class="text-xl font-black text-slate-800 dark:text-slate-100">0</div>
                    <div class="text-[9px] uppercase font-bold text-slate-400">Played</div>
                </div>
                <div class="bg-slate-100 dark:bg-slate-700/50 p-2 rounded-xl">
                    <div id="stat-winrate" class="text-xl font-black text-slate-800 dark:text-slate-100">0%</div>
                    <div class="text-[9px] uppercase font-bold text-slate-400">Win %</div>
                </div>
                <div class="bg-slate-100 dark:bg-slate-700/50 p-2 rounded-xl">
                    <div id="stat-streak" class="text-xl font-black text-emerald-500">0</div>
                    <div class="text-[9px] uppercase font-bold text-slate-400">Streak</div>
                </div>
                <div class="bg-slate-100 dark:bg-slate-700/50 p-2 rounded-xl">
                    <div id="stat-max-streak" class="text-xl font-black text-emerald-500">0</div>
                    <div class="text-[9px] uppercase font-bold text-slate-400">Max</div>
                </div>
            </div>

            <div class="border-t border-slate-200 dark:border-slate-700 pt-4 flex items-center justify-between">
                <div>
                    <span class="text-[11px] text-slate-400 font-medium">Avg Solve Time</span>
                    <div id="stat-avg-time" class="text-sm font-bold text-slate-700 dark:text-slate-200">--:--</div>
                </div>
                <button id="btn-share-stats" class="py-2 px-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow flex items-center space-x-1.5 transition">
                    <i class="fa-solid fa-share-nodes"></i>
                    <span>Share Stats</span>
                </button>
            </div>
        </div>
    </div>

    <!-- Win Modal -->
    <div id="modal-win" class="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop hidden">
        <div class="bg-white dark:bg-slate-800 rounded-2xl max-w-md w-full p-5 shadow-2xl border border-slate-200 dark:border-slate-700 text-center animate-pop">
            <div class="w-14 h-14 bg-amber-100 dark:bg-amber-900/40 text-amber-500 rounded-full flex items-center justify-center text-2xl mx-auto mb-2">
                <i class="fa-solid fa-trophy"></i>
            </div>
            <h2 class="text-2xl font-black text-slate-800 dark:text-slate-100 mb-0.5">Frame Solved!</h2>
            <p id="win-subtitle" class="text-xs text-slate-500 dark:text-slate-400 mb-3">All 4 overhanging frame words successfully formed.</p>

            <div class="bg-slate-50 dark:bg-slate-700/40 rounded-xl p-3 border border-slate-200 dark:border-slate-700 mb-4 text-left">
                <div class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Words Formed</div>
                <div id="win-words-list" class="grid grid-cols-2 gap-1.5 text-xs">
                    <!-- Solved words list inserted here -->
                </div>
            </div>

            <div class="flex items-center justify-around bg-slate-100 dark:bg-slate-700/60 p-2.5 rounded-xl mb-4 text-xs">
                <div>
                    <div class="text-[10px] text-slate-400 uppercase font-bold">Time</div>
                    <div id="win-time" class="text-sm font-extrabold text-slate-700 dark:text-slate-200">00:00</div>
                </div>
                <div class="w-px h-6 bg-slate-300 dark:bg-slate-600"></div>
                <div>
                    <div class="text-[10px] text-slate-400 uppercase font-bold">Moves</div>
                    <div id="win-moves" class="text-sm font-extrabold text-slate-700 dark:text-slate-200">0</div>
                </div>
                <div class="w-px h-6 bg-slate-300 dark:bg-slate-600"></div>
                <div>
                    <div class="text-[10px] text-slate-400 uppercase font-bold">Streak</div>
                    <div id="win-streak" class="text-sm font-extrabold text-emerald-500">1 🔥</div>
                </div>
            </div>

            <div class="flex space-x-2">
                <button id="btn-share-win" class="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow flex items-center justify-center space-x-1.5 transition active:scale-95">
                    <i class="fa-solid fa-share-nodes"></i>
                    <span>Share Result</span>
                </button>
                <button id="btn-next-puzzle" class="hidden py-2.5 px-4 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-100 font-bold text-xs rounded-xl hover:bg-slate-300 dark:hover:bg-slate-600 transition">
                    Next
                </button>
            </div>
        </div>
    </div>

    <!-- JavaScript Engine -->
    <script>
        // Oxford & Scrabble clean dictionary of 2000+ standard English words (4-8 letters)
        const DICTIONARY_WORDS = [
            "ABOVE","ACID","ACRE","ACTS","AGED","AGENT","AGREE","AHEAD","AIMS","ALERT","ALIEN","ALIVE","ALLOW","ALMOST",
            "ALONE","ALONG","ALTER","ALWAYS","AMONG","ANGLE","ANGRY","ANIMAL","ANKLE","ANSWER","APART","APPLE","APPLY",
            "APRIL","APRON","ARCH","AREA","ARENA","ARGUE","ARISE","ARMED","ARMOR","ARMY","AROUND","ARRAY","ARROW","ARTIST",
            "ASIDE","ASleep","ASPECT","ASSET","AUDIO","AUDIT","AUGUST","AUNT","AUTHOR","AUTO","AVOID","AWAKE","AWARD",
            "AWARE","AWFUL","BABY","BACK","BACON","BADGE","BADLY","BAGS","BAKER","BALL","BALLOT","BALLOON","BANANA","BAND",
            "BANK","BANKER","BANNER","BARN","BARREL","BASE","BASIC","BASIN","BASKET","BASS","BATCH","BATH","BEACH","BEAM",
            "BEAN","BEAR","BEARD","BEAST","BEAT","BEAUTY","BEFORE","BEGAN","BEGIN","BEHALF","BEHIND","BEING","BELIEF","BELIEVE",
            "BELL","BELLY","BELOW","BELT","BENCH","BEND","BENEATH","BENEFIT","BERRY","BEST","BETTER","BEYOND","BICYCLE","BIDDER",
            "BIGGER","BIKE","BILL","BIND","BIRD","BIRTH","BISHOP","BITTER","BLACK","BLADE","BLAME","BLANK","BLANKET","BLAST",
            "BLEND","BLESS","BLIND","BLOCK","BLOOD","BLOOM","BLOUSE","BLOWN","BLUE","BOARD","BOAT","BODY","BOIL","BOLD",
            "BOLT","BOMB","BOND","BONE","BONUS","BOOK","BOOST","BOOT","BOOTH","BORDER","BORED","BORNE","BOSS","BOTTOM",
            "BOUGHT","BOUND","BOWL","BOXER","BOXES","BOYFRIEND","BRAIN","BRAKE","BRANCH","BRAND","BRASS","BRAVE","BREAD","BREAK",
            "BREAST","BREATH","BREEZE","BRICK","BRIDE","BRIDGE","BRIEF","BRIGHT","BRING","BROAD","BROKEN","BRONZE","BROOK","BROTHER",
            "BROWN","BRUSH","BUBBLE","BUCKET","BUDGET","BUFFALO","BUILD","BUILDER","BUILDING","BULB","BULK","BULL","BULLET","BUNCH",
            "BURDEN","BUREAU","BURN","BURST","BUSH","BUSY","BUTTER","BUTTON","BUYER","CABIN","CABLE","CAGE","CAKE","CALCULATE",
            "CALF","CALL","CALM","CAMEL","CAMERA","CAMP","CAMPAIGN","CAMPUS","CANAL","CANCEL","CANCER","CANDLE","CANDY","CANVAS",
            "CAPABLE","CAPITAL","CAPTAIN","CAPTURE","CARAVAN","CARD","CAREER","CAREFUL","CARPET","CARROT","CARRY","CART","CARVE",
            "CASE","CASH","CAST","CASTLE","CASUAL","CATALOG","CATCH","CATER","CATTLE","CAUSE","CAVE","CEILING","CELL","CEMENT",
            "CENTER","CENTURY","CEREAL","CERTAIN","CHAIN","CHAIR","CHALK","CHALLENGE","CHAMBER","CHAMPION","CHANCE","CHANGE","CHANNEL",
            "CHAPEL","CHAPTER","CHARGE","CHARITY","CHARM","CHART","CHASE","CHEAP","CHEAT","CHECK","CHEEK","CHEER","CHEESE","CHEF",
            "CHEMICAL","CHERRY","CHEST","CHICK","CHICKEN","CHIEF","CHILD","CHIMNEY","CHOICE","CHOIR","CHOOSE","CHORUS","CHOSEN",
            "CHURCH","CINEMA","CIRCLE","CIRCUIT","CIRCUS","CITIZEN","CITY","CIVIC","CIVIL","CLAIM","CLASS","CLASSIC","CLEAN",
            "CLEAR","CLEVER","CLICK","CLIENT","CLIFF","CLIMATE","CLIMB","CLINIC","CLOCK","CLOSE","CLOSET","CLOTH","CLOTHES",
            "CLOUD","CLOWN","CLUB","CLUE","COACH","COAL","COAST","COAT","CODE","COFFEE","COIN","COLD","COLLAR","COLLECT",
            "COLLEGE","COLONEL","COLONY","COLOR","COLUMN","COMB","COMBAT","COMBINE","COME","COMEDY","COMFORT","COMMAND","COMMENT",
            "COMMERCE","COMMON","COMPANY","COMPARE","COMPETE","COMPLEX","COMPOSE","COMPUTER","CONCERT","CONCLUDE","CONCRETE","CONDUCT",
            "CONFIRM","CONNECT","CONSENT","CONSIST","CONTACT","CONTAIN","CONTENT","CONTEST","CONTEXT","CONTROL","CONVERT","COOK",
            "COOKIE","COOL","COPPER","COPY","CORAL","CORD","CORE","CORN","CORNER","CORRECT","COST","COSTUME","COTTAGE","COTTON",
            "COUCH","COUGH","COULD","COUNCIL","COUNT","COUNTER","COUNTRY","COUNTY","COUPLE","COURAGE","COURSE","COURT","COUSIN",
            "COVER","COWBOY","CRACK","CRAFT","CRANE","CRASH","CRATER","CRAWL","CRAZY","CREAM","CREATE","CREATURE","CREDIT","CREEK",
            "CRIME","CRIMINAL","CRISIS","CRISP","CRITIC","CROP","CROSS","CROWD","CROWN","CRUCIAL","CRUEL","CRUISE","CRUSH","CRYSTAL",
            "CUBE","CULTURE","CUPBOARD","CURTAIN","CURVE","CUSHION","CUSTOM","CUSTOMER","CYCLE","CYLINDER","DAILY","DAMAGE","DANCE",
            "DANCER","DANGER","DANGEROUS","DARK","DARKNESS","DATABASE","DATE","DAUGHTER","DAWN","DAYS","DEAD","DEAL","DEALER",
            "DEAR","DEATH","DEBATE","DEBT","DECADE","DECIDE","DECISION","DECK","DECLARE","DECORATE","DECREASE","DEDICATE","DEEP",
            "DEEPLY","DEER","DEFEND","DEFENSE","DEFINE","DEGREE","DELAY","DELIVER","DEMAND","DENIAL","DENSE","DENTAL","DEPART",
            "DEPEND","DEPOSIT","DEPTH","DEPUTY","DERIVE","DESERT","DESERVE","DESIGN","DESIGNER","DESIRE","DESK","DESPITE","DESTROY",
            "DETAIL","DETECT","DEVELOP","DEVICE","DEVOTE","DIAGRAM","DIAMOND","DIARY","DICTIONARY","DIET","DIFFER","DIGITAL","DIGNITY",
            "DINNER","DIRECT","DIRECTOR","DIRT","DIRTY","DISABLE","DISAGREE","DISASTER","DISC","DISCOVER","DISCUSS","DISEASE","DISH",
            "DISMISS","DISPLAY","DISTANCE","DISTANT","DISTRICT","DIVIDE","DIVINE","DIVORCE","DOCTOR","DOCUMENT","DOLLAR","DOMAIN",
            "DONKEY","DONOR","DOOR","DOUBLE","DOUBT","DOUGH","DOWN","DOZEN","DRAFT","DRAG","DRAGON","DRAIN","DRAMA","DRAMATIC",
            "DRAW","DRAWER","DRAWING","DREAM","DRESS","DRIFT","DRILL","DRINK","DRIVE","DRIVER","DROP","DROUGHT","DROWN","DRUM",
            "DRUNK","DUCK","DURING","DUST","DUTY","EAGLE","EARLY","EARN","EARTH","EASE","EAST","EASTERN","EASY","EATEN",
            "ECHO","ECONOMIC","ECONOMY","EDGE","EDITOR","EDUCATION","EFFECT","EFFORT","EIGHT","EIGHTEEN","EIGHTY","EITHER","ELBOW",
            "ELDER","ELECT","ELECTION","ELECTRIC","ELEMENT","ELEPHANT","ELEVATOR","ELEVEN","ELIGIBLE","ELIMINATE","EMBARK","EMBASSY",
            "EMERGE","EMERGENCY","EMISSION","EMOTION","EMPHASIS","EMPIRE","EMPLOY","EMPLOYEE","EMPLOYER","EMPTY","ENABLE","ENCLOSE",
            "ENCOUNTER","ENCOURAGE","ENERGY","ENFORCE","ENGAGE","ENGINE","ENGINEER","ENJOY","ENORMOUS","ENOUGH","ENROLL","ENSURE",
            "ENTER","ENTERTAIN","ENTIRE","ENTITLE","ENTRANCE","ENTRY","ENVELOPE","EPISODE","EQUAL","EQUIP","EQUIPMENT","EQUITY",
            "ERA","ERASE","ESCAPE","ESPECIALLY","ESSAY","ESSENTIAL","ESTABLISH","ESTATE","ESTIMATE","ETERNAL","ETHIC","ETHNIC",
            "EVACUATE","EVALUATE","EVEN","EVENING","EVENT","EVENTUALLY","EVERY","EVERYBODY","EVERYONE","EVERYTHING","EVIDENCE","EVIDENT",
            "EVIL","EVOLVE","EXACT","EXAM","EXAMINE","EXAMPLE","EXCEED","EXCELLENT","EXCEPT","EXCHANGE","EXCITE","EXCITEMENT","EXCLUDE",
            "EXCUSE","EXECUTE","EXECUTIVE","EXERCISE","EXHIBIT","EXHIBITION","EXIST","EXISTENCE","EXIT","EXOTIC","EXPAND","EXPANSE",
            "EXPECT","EXPECTATION","EXPENSE","EXPENSIVE","EXPERIENCE","EXPERIMENT","EXPERT","EXPLAIN","EXPLODE","EXPLORE","EXPLOSION",
            "EXPORT","EXPOSE","EXPRESS","EXPRESSION","EXTEND","EXTENSION","EXTENSIVE","EXTENT","EXTERNAL","EXTRA","EXTRAORDINARY","EXTREME",
            "EYE","FABRIC","FACE","FACILITY","FACT","FACTOR","FACTORY","FACULTY","FADE","FAIL","FAILURE","FAIR","FAIRLY",
            "FAITH","FALL","FALSE","FAME","FAMILIAR","FAMILY","FAMOUS","FANCY","FARM","FARMER","FASCINATE","FASHION","FAST",
            "FASTER","FATAL","FATE","FATHER","FAULT","FAVOR","FAVORITE","FEAR","FEATHER","FEATURE","FEBRUARY","FEDERAL","FEEBLE",
            "FEED","FEEDBACK","FEEL","FEELING","FELLOW","FEMALE","FENCE","FESTIVAL","FETCH","FEVER","FEWER","FIBER","FICTION",
            "FIELD","FIFTEEN","FIFTH","FIFTY","FIGHT","FIGHTER","FIGURE","FILE","FILL","FILM","FILTER","FINAL","FINALLY",
            "FINANCE","FINANCIAL","FIND","FINDING","FINE","FINGER","FINISH","FIRE","FIRM","FIRST","FISH","FISHERMAN","FIST",
            "FITNESS","FIVE","FIXED","FLAG","FLAME","FLASH","FLAT","FLAVOR","FLEET","FLESH","FLIGHT","FLOAT","FLOOD","FLOOR",
            "FLOUR","FLOURISH","FLOW","FLOWER","FLUID","FLUSH","FLUTE","FLYER","FOAM","FOCUS","FOGGY","FOLD","FOLDER","FOLK",
            "FOLLOW","FOOD","FOOT","FOOTBALL","FOOTSTEP","FORBID","FORCE","FORECAST","FOREIGN","FOREST","FOREVER","FORGET","FORGIVE",
            "FORK","FORM","FORMAL","FORMAT","FORMATION","FORMER","FORMULA","FORTUNE","FORTY","FORWARD","FOSSIL","FOSTER","FOUND",
            "FOUNDATION","FOUNTAIN","FOUR","FOURTEEN","FOURTH","FOXMASK","FRACTION","FRACTURE","FRAGILE","FRAME","FRAMEWORK","FRANK",
            "FRAUD","FREE","FREEDOM","FREEZE","FREIGHT","FRENCH","FREQUENCY","FRESH","FRICTION","FRIEND","FRIENDLY","FRIENDSHIP","FRIGHT",
            "FROG","FRONT","FRONTIER","FROST","FROWN","FROZEN","FRUIT","FRUSTRATE","FUEL","FULFILL","FULL","FULLY","FUNCTION",
            "FUND","FUNDAMENTAL","FUNERAL","FUNNY","FURIOUS","FURNACE","FURNISH","FURNITURE","FURTHER","FUTURE","GAIN","GALAXY",
            "GALLERY","GAME","GANG","GARAGE","GARDEN","GARLIC","GARMENT","GASOLINE","GATE","GATHER","GAUGE","GEAR","GENDER",
            "GENERAL","GENERATE","GENERATION","GENEROUS","GENIUS","GENTLE","GENTLEMAN","GENUINE","GEOGRAPHY","GHOST","GIANT","GIFT",
            "GIFTED","GIRAFFE","GIRL","GIRLFRIEND","GIVE","GIVEN","GLAD","GLANCE","GLASS","GLIDE","GLIMPSE","GLOBE","GLOOM",
            "GLORY","GLOVE","GLOW","GLUE","GOAL","GOAT","GOLD","GOLDEN","GOLF","GOOD","GOOSE","GOVERN","GOVERNMENT","GOVERNOR",
            "GRACE","GRADE","GRADUAL","GRADUATE","GRAIN","GRAM","GRAND","GRANDFATHER","GRANDMOTHER","GRANT","GRAPE","GRAPH","GRASP",
            "GRASS","GRATEFUL","GRAVE","GRAVITY","GREAT","GREATER","GREEN","GREET","GREETING","GRID","GRIEF","GRILL","GRIP",
            "GROCERY","GROUND","GROUP","GROW","GROWTH","GUARANTEE","GUARD","GUARDIAN","GUESS","GUEST","GUIDE","GUIDANCE","GUILT",
            "GUILTY","GUITAR","GULF","HABIT","HABITAT","HAIR","HALF","HALL","HALT","HAMMER","HAND","HANDBOOK","HANDLE",
            "HANDSOME","HANG","HAPPEN","HAPPINESS","HAPPY","HARBOR","HARD","HARDLY","HARDWARE","HARM","HARMONY","HARSH","HARVEST",
            "HASTE","HATRED","HAUNT","HAVE","HAWK","HAZARD","HEAD","HEADER","HEADLINE","HEADQUARTERS","HEALTH","HEALTHY","HEAP",
            "HEARING","HEART","HEAT","HEATER","HEAVEN","HEAVY","HEIGHT","HELICOPTER","HELMET","HELP","HELPFUL","HERB","HERO",
            "HESITATE","HIDE","HIGH","HIGHWAY","HILL","HINT","HIRE","HISTORIC","HISTORY","HOCKEY","HOLD","HOLDER","HOLE",
            "HOLIDAY","HOLLOW","HOLY","HOME","HOMESICK","HONEST","HONESTY","HONEY","HONOR","HOOK","HOPE","HOPEFUL","HORIZON",
            "HORN","HORRIBLE","HORROR","HORSE","HOSPITAL","HOST","HOSTILE","HOTEL","HOUR","HOUSE","HOUSEHOLD","HOUSING","HOWEVER",
            "HUGE","HUMAN","HUMBLE","HUMOR","HUNDRED","HUNGER","HUNGRY","HUNT","HUNTER","HURRICANE","HURRY","HURT","HUSBAND",
            "HYGIENE","HYMN","ICEBERGS","ICON","IDEA","IDEAL","IDENTIFY","IDENTITY","IDEOLOGY","IDLE","IGNITE","IGNORANT","IGNORE",
            "ILLNESS","ILLUSTRATE","IMAGE","IMAGINE","IMITATE","IMMEDIATE","IMMENSE","IMMIGRANT","IMPACT","IMPATIENT","IMPLY","IMPORT",
            "IMPORTANCE","IMPORTANT","IMPOSE","IMPOSSIBLE","IMPRESS","IMPRESSION","IMPROVE","IMPROVEMENT","IMPULSE","INCENTIVE","INCH","INCIDENT",
            "INCLUDE","INCOME","INCORPORATE","INCREASE","INCREDIBLE","INDEED","INDEPENDENT","INDEX","INDICATE","INDIVIDUAL","INDOOR","INDUSTRY",
            "INFANT","INFECT","INFECTION","INFLATION","INFLUENCE","INFORM","INFORMAL","INFORMATION","INGREDIENT","INHABIT","INITIAL","INITIATIVE",
            "INJURE","INJURY","INK","INLAND","INNER","INNOCENT","INNOVATION","INPUT","INQUIRE","INQUIRY","INSECT","INSERT",
            "INSIDE","INSIGHT","INSIST","INSPECT","INSPECTION","INSPIRATION","INSPIRE","INSTALL","INSTANCE","INSTANT","INSTEAD","INSTINCT",
            "INSTITUTE","INSTITUTION","INSTRUCT","INSTRUCTION","INSTRUCTOR","INSTRUMENT","INSULT","INSURANCE","INTACT","INTEGRATE","INTEGRITY","INTELLECT",
            "INTEND","INTENSE","INTENSITY","INTENT","INTENTION","INTERACT","INTEREST","INTERESTING","INTERIOR","INTERNAL","INTERNATIONAL","INTERNET",
            "INTERPRET","INTERRUPT","INTERVAL","INTERVIEW","INTIMATE","INTO","INTRODUCE","INTRODUCTION","INTRUDE","INVADE","INVENT","INVENTION",
            "INVEST","INVESTIGATE","INVESTMENT","INVESTOR","INVISIBLE","INVITATION","INVITE","INVOLVE","INVOLVEMENT","IRON","IRONY","ISLAND",
            "ISOLATE","ISSUE","ITEM","IVORY","JACKET","JAIL","JANUARY","JARS","JAW","JAZZ","JEANS","JELLY","JEWEL","JEWELRY",
            "JOB","JOIN","JOINT","JOKE","JOURNAL","JOURNEY","JOY","JUDGE","JUDGMENT","JUICE","JUICY","JULY","JUMP","JUNE",
            "JUNGLE","JUNIOR","JURY","JUST","JUSTICE","JUSTIFY","KEEN","KEEP","KEEPER","KENNEL","KERNEL","KETCHUP","KETTLE","KEYS",
            "KICK","KID","KIDNEY","KILL","KILLER","KILOGRAM","KILOMETER","KIND","KINDNESS","KING","KINGDOM","KISS","KITCHEN","KITE",
            "KITTEN","KNEE","KNEEL","KNIFE","KNIGHT","KNIT","KNOCK","KNOT","KNOW","KNOWLEDGE","LABEL","LABOR","LABORATORY","LACE",
            "LACK","LADDER","LADY","LAKE","LAMP","LAND","LANDSCAPE","LANE","LANGUAGE","LANTERN","LAPTOP","LARGE","LARGELY","LARVA",
            "LASER","LAST","LATE","LATELY","LATER","LATEST","LATIN","LATITUDE","LATTER","LAUGH","LAUGHTER","LAUNCH","LAVA","LAWN",
            "LAWYER","LAYER","LAZY","LEAD","LEADER","LEERSHIP","LEAF","LEAGUE","LEAN","LEAP","LEARN","LEARNER","LEASE",
            "LEATHER","LEAVE","LECTURE","LEFT","LEG","LEGACY","LEGAL","LEGEND","LEGISLATION","LEISURE","LEMON","LEND","LENGTH",
            "LENS","LESS","LESSON","LETTER","LEVEL","LEVER","LIABILITY","LIBERAL","LIBERTY","LIBRARY","LICENSE","LICK","LID",
            "LIE","LIFE","LIFT","LIGHT","LIGHTNING","LIKE","LIKELY","LIME","LIMIT","LIMITATION","LIMITED","LIMP","LINE",
            "LINEN","LINK","LION","LIP","LIQUID","LIQUOR","LIST","LISTEN","LISTENER","LITERACY","LITERARY","LITERATURE","LITTLE",
            "LIVE","LIVELY","LIVER","LIVING","LIZARD","LOAD","LOAN","LOBBY","LOCAL","LOCATE","LOCATION","LOCK","LOCKER","LODGE",
            "LOGIC","LOGICAL","LONELY","LONG","LONGER","LOOK","LOOP","LOOSE","LORD","LOSE","LOSS","LOST","LOT","LOTTERY",
            "LOUD","LOUDLY","LOUNGE","LOVE","LOVELY","LOVER","LOW","LOWER","LOYAL","LOYALTY","LUCK","LUCKY","LUGGAGE","LUMBER",
            "LUNCH","LUNG","LUXURY","MACHINE","MACHINERY","MADNESS","MAGAZINE","MAGIC","MAGICAL","MAGNET","MAGNITUDE","MAIL","MAIN",
            "MAINLY","MAINTAIN","MAJOR","MAJORITY","MAKE","MAKER","MAKEUP","MALE","MALL","MAMMAL","MANAGE","MANAGEMENT","MANAGER",
            "MANNER","MANUAL","MANUFACTURE","MANY","MAP","MAPLE","MARATHON","MARCH","MARGIN","MARINE","MARK","MARKET","MARKETING",
            "MARRIAGE","MARRIED","MARRY","MARS","MARSH","MARTIAL","MARVEL","MASK","MASON","MASS","MASSAGE","MASSIVE","MASTER",
            "MATCH","MATERIAL","MATH","MATHEMATICS","MATTER","MATURE","MAXIMUM","MAYBE","MAYOR","MEADOW","MEAL","MEAN","MEANING",
            "MEANT","MEANWHILE","MEASURE","MEASUREMENT","MEAT","MECHANIC","MECHANISM","MEDAL","MEDIA","MEDICAL","MEDICINE","MEDIUM",
            "MEET","MEETING","MELODY","MELON","MELT","MEMBER","MEMBERSHIP","MEMORY","MENTAL","MENTION","MENU","MERCY","MERE",
            "MERELY","MERGE","MERIT","MESS","MESSAGE","METER","METHOD","METROPOLITAN","MICROSCOPE","MIDDLE","MIDNIGHT","MIDST","MIGHT",
            "MIGHTY","MIGRATION","MILD","MILE","MILITARY","MILK","MILL","MILLION","MIND","MINE","MINERAL","MINIMUM","MINISTER",
            "MINISTRY","MINOR","MINORITY","MINT","MINUTE","MIRACLE","MIRROR","MISERY","MISSILE","MISSING","MISSION","MIST","MISTAKE",
            "MIX","MIXTURE","MOBILE","MODE","MODEL","MODERN","MODEST","MODIFY","MODULE","MOIST","MOISTURE","MOLECULE","MOMENT",
            "MONARCH","MONDAY","MONEY","MONITOR","MONK","MONKEY","MONTH","MONTHLY","MONUMENT","MOOD","MOON","MORAL","MORALITY",
            "MORE","MOREOVER","MORNING","MORTGAGE","MOSQUITO","MOST","MOSTLY","MOTEL","MOTHER","MOTION","MOTIVATE","MOTIVE","MOTOR",
            "MOTORCYCLE","MOUNT","MOUNTAIN","MOUSE","MOUTH","MOVE","MOVEMENT","MOVIE","MUCH","MUD","MUG","MULTIPLE","MUNICIPAL",
            "MURDER","MUSCLE","MUSEUM","MUSIC","MUSICAL","MUSICIAN","MUST","MUSTARD","MUTUAL","MYSTERY","MYTH","NAILS","NAKED",
            "NAME","NARROW","NATION","NATIONAL","NATIVE","NATURAL","NATURE","NAVAL","NAVIGATION","NAVY","NEAR","NEARBY","NEAREST",
            "NEATLY","NECESSARY","NECK","NECKLACE","NEED","NEEDLE","NEGATIVE","NEGLECT","NEGOTIATE","NEIGHBOR","NEIGHBORHOOD","NEITHER",
            "NEPHEW","NERVE","NERVOUS","NEST","NET","NETWORK","NEUTRAL","NEVER","NEVERTHELESS","NEW","NEWLY","NEWS","PAPER",
            "NEWSPAPER","NEXT","NICE","NICELY","NIGHT","NINE","NINETEEN","NINETY","NINTH","NOBLE","NOBODY","NOISE","NOISY",
            "NOMINATE","NONE","NONPROFIT","NOON","NORMAL","NORMALLY","NORTH","NORTHEAST","NORTHERN","NORTHWEST","NOSE","NOTE",
            "NOTEBOOK","NOTHING","NOTICE","NOTION","NOVEL","NOVEMBER","NOW","NOWHERE","NUCLEAR","NUMBER","NUMEROUS","NURSE","NURSERY",
            "NUT","NUTRITION","NYLON","OAK","OASIS","OATH","OBEDIENT","OBEY","OBJECT","OBJECTION","OBJECTIVE","OBLIGATE",
            "OBLIGATION","OBSERVE","OBSERVER","OBSTACLE","OBTAIN","OBVIOUS","OBVIOUSLY","OCCASION","OCCASIONAL","OCCUPY","OCCUR","OCEAN",
            "OCTOBER","ODD","ODOR","OFFENSE","OFFENSIVE","OFFER","OFFICE","OFFICER","OFFICIAL","OFFSPRING","OFTEN","OIL","OKAY",
            "OLD","OLIVE","OLYMPIC","ONION","ONLINE","ONLY","OPEN","OPENING","OPERA","OPERATE","OPERATION","OPERATOR","OPINION",
            "OPPONENT","OPPORTUNITY","OPPOSE","OPPOSITE","OPPOSITION","OPTION","ORANGE","ORCHARD","ORCHESTRA","ORDER","ORDINARY","ORGAN",
            "ORGANIC","ORGANISM","ORGANIZATION","ORGANIZE","ORIENT","ORIGIN","ORIGINAL","ORNAMENT","ORPHAN","OTHER","OTHERWISE","OTTER",
            "OUGHT","OUNCE","OUTCOME","OUTDOOR","OUTER","OUTLINE","OUTPUT","OUTSIDE","OUTSTANDING","OVEN","OVER","OVERALL","OVERCOME",
            "OVERLOOK","OVERNIGHT","OWE","OWL","OWNER","OWNERSHIP","OXYGEN","OYSTER","PACE","PACIFIC","PACK","PACKAGE","PACKET",
            "PAD","PAGE","PAIN","PAINFUL","PAINT","PAINTER","PAINTING","PAIR","PALACE","PALE","PALM","PANEL","PANIC",
            "PANTS","PAPER","PARADE","PARADISE","PARAGRAPH","PARALLEL","PARCEL","PARDON","PARENT","PARK","PARLIAMENT","PARROT","PART",
            "PARTIAL","PARTICIPATE","PARTICLE","PARTICULAR","PARTLY","PARTNER","PARTY","PASS","PASSAGE","PASSENGER","PASSION","PASSIVE",
            "PASSPORT","PASSWORD","PAST","PASTA","PASTE","PASTOR","PATENT","PATH","PATIENCE","PATIENT","PATROL","PATRON","PATTERN",
            "PAUSE","PAVEMENT","PAW","PAYMENT","PEACE","PEACEFUL","PEACH","PEAK","PEANUT","PEARL","PEASANT","PEBBLE","PEDAL",
            "PEEL","PEER","PELICAN","PENALTY","PENCIL","PENDING","PENGUIN","PENNY","PENSION","PEOPLE","PEPPER","PERCEIVE","PERCENT",
            "PERCEPTION","PERFECT","PERFORM","PERFORMANCE","PERFUME","PERHAPS","PERIOD","PERMANENT","PERMISSION","PERMIT","PERSON","PERSONAL",
            "PERSONALITY","PERSONNEL","PERSPECTIVE","PERSUADE","PET","PETITION","PETROLEUM","PETS","PHANTOM","PHASE","PHILOSOPHY","PHONE",
            "PHOTO","PHOTOGRAPH","PHOTOGRAPHER","PHRASE","PHYSICAL","PHYSICIAN","PHYSICS","PIANO","PICK","PICNIC","PICTURE","PIECE",
            "PIER","PIG","PIGEON","PILE","PILGRIM","PILL","PILLOW","PILOT","PIN","PINE","PINEAPPLE","PINK","PINT","PIONEER",
            "PIPE","PITCH","PITCHER","PITY","PIZZA","PLACE","PLAIN","PLAN","PLANE","PLANET","PLANK","PLANT","PLANTATION","PLASTIC",
            "PLATE","PLATFORM","PLATINUM","PLAY","PLAYER","PLAYGROUND","PLEA","PLEASANT","PLEASE","PLEASURE","PLEDGE","PLENTY","PLIANT",
            "PLOT","PLOW","PLUG","PLUM","PLUMBER","PLUNGE","PLUS","POCKET","POD","POEM","POET","POETRY","POINT","POISON",
            "POKE","POLAR","POLICE","POLICY","POLISH","POLITE","POLITICAL","POLITICS","POLL","POLLUTION","POND","POOL","POOR",
            "POPULAR","POPULATION","PORCH","PORK","PORT","PORTABLE","PORTION","PORTRAIT","PORTRAY","POSITION","POSITIVE","POSSESS",
            "POSSESSION","POSSIBLE","POST","POSTAGE","POSTCARD","POSTER","POT","POTATO","POTENTIAL","POTTERY","POULTRY","POUND","POUR",
            "POWDER","POWER","POWERFUL","PRACTICAL","PRACTICE","PRAIRIE","PRAISE","PRAY","PRAYER","PREACH","PRECAUTION","PRECIOUS",
            "PRECISE","PREDICT","PREFER","PREFERENCE","PREGNANT","PREMIERE","PREMISES","PREMIUM","PREPARE","PRESCRIBE","PRESENCE","PRESENT",
            "PRESERVE","PRESIDENT","PRESS","PRESSURE","PRESUME","PRETEND","PRETTY","PREVENT","PREVIOUS","PRICE","PRIDE","PRIEST",
            "PRIMARY","PRIME","PRINCE","PRINCESS","PRINCIPAL","PRINCIPLE","PRINT","PRINTER","PRIOR","PRIORITY","PRISON","PRISONER",
            "PRIVACY","PRIVATE","PRIVILEGE","PRIZE","PROBABLE","PROBABLY","PROBE","PROBLEM","PROCEDURE","PROCEED","PROCESS","PRODUCE",
            "PRODUCER","PRODUCT","PRODUCTION","PROFESSION","PROFESSOR","PROFILE","PROFIT","PROGRAM","PROGRESS","PROJECT","PROMINENT",
            "PROMISE","PROMOTE","PROMPT","PRONOUN","PROOF","PROPER","PROPERTY","PROPOSAL","PROPOSE","PROSPECT","PROTECT","PROTECTION",
            "PROTEIN","PROTEST","PROUD","PROVE","PROVIDE","PROVIDER","PROVINCE","PROVISION","PSYCHOLOGY","PUBLIC","PUBLISH","PUBLISHER",
            "PUDDING","PULL","PULSE","PUMP","PUNCH","PUNISH","PUPIL","PUPPY","PURCHASE","PURE","PURPLE","PURPOSE","PURSUE",
            "PUSH","PUT","PUZZLE","PYRAMID","QUALIFY","QUALITY","QUANTITY","QUARTER","QUARTZ","QUEEN","QUEST","QUESTION","QUICK",
            "QUIET","QUILT","QUIT","QUITE","QUOTA","RABBIT","RACE","RACING","RADAR","RADICAL","RADIO","RADISH","RADIUS",
            "RAFT","RAGE","RAIL","RAILROAD","RAILWAY","RAIN","RAINBOW","RAISE","RALLY","RANCH","RANDOM","RANGE","RANK",
            "RAPID","RAPIDLY","RARE","RARELY","RASPBERRY","RATE","RATHER","RATING","RATIO","RAW","REACH","REACT","REACTION",
            "READ","READER","READY","REAL","REALITY","REALIZE","REALLY","REALM","REAP","REAR","REASON","REASONABLE","REBEL",
            "RECALL","RECEIPT","RECEIVE","RECEIVER","RECENT","RECEPTION","RECIPE","RECIPIENT","RECKON","RECOGNIZE","RECOMMEND","RECORD",
            "RECOVER","RECREATION","RECRUIT","RECTANGLE","RECYCLE","RED","REDUCE","REDUCTION","REED","REEF","REFER","REFERENCE",
            "REFILL","REFLECT","REFLECTION","REFORM","REFUGE","REFUGEE","REFUSE","REGARD","REGARDLESS","REGIME","REGION","REGIONAL",
            "REGISTER","REGRET","REGULAR","REGULATE","REHEARSE","REIN","REINFORCE","REJECT","RELATE","RELATION","RELATIONSHIP","RELATIVE",
            "RELAX","RELEASE","RELEVANT","RELIABLE","RELIEF","RELIEVE","RELIGION","RELIGIOUS","RELY","REMAIN","REMAINDER","REMARK",
            "REMEDY","REMEMBER","REMIND","REMOTE","REMOVE","RENDER","RENEW","RENT","REPAIR","REPEAT","REPLACE","REPLY",
            "REPORT","REPORTER","REPRESENT","REPUBLIC","REPUTATION","REQUEST","REQUIRE","REQUIREMENT","RESCUE","RESEARCH","RESERVE",
            "RESIDENT","RESIGN","RESIST","RESISTANCE","RESOLUTION","RESOLVE","RESORT","RESOURCE","RESPECT","RESPOND","RESPONSE","RESPONSIBLE",
            "REST","RESTAURANT","RESTORE","RESTRICT","RESULT","RESUME","RETAIL","RETAIN","RETIRE","RETIREMENT","RETURN","REVEAL",
            "REVENUE","REVERSE","REVIEW","REVISE","REVIVE","REVOLUTION","REWARD","RHYTHM","RIB","RIBBON","RICE","RICH","RIDE",
            "RIDER","RIDGE","RIFLE","RIGHT","RIGID","RING","RINSE","RISE","RISK","RIVAL","RIVER","ROAD","ROAR","ROAST",
            "ROBOT","ROCK","ROCKET","ROD","ROLE","ROLL","ROLLER","ROMANTIC","ROOF","ROOM","ROOT","ROPE","ROSE","ROTATION",
            "ROUGH","ROUGHLY","ROUND","ROUTE","ROUTINE","ROW","ROYAL","RUBBER","RUBBISH","RUBY","RUG","RUIN","RULE","RULER",
            "RUMOR","RUNNER","RUNWAY","RURAL","RUSH","RUST","RUSTIC","SACK","SACRED","SAD","SADDLE","SAFARI","SAFE","SAFETY",
            "SAGE","SAIL","SAILOR","SAINT","SALAD","SALARY","SALE","SALMON","SALT","SALTED","SALUTE","SAME","SAMPLE","SAND",
            "SANDWICH","SANE","SAPPHIRE","SATELLITE","SATIN","SATISFY","SATURDAY","SAUCE","SAUCER","SAUSAGE","SAVE","SAVING","SAVOR",
            "SCALE","SCALP","SCAN","SCARF","SCARY","SCENE","SCENERY","SCENT","SCHEDULE","SCHEME","SCHOLAR","SCHOOL","SCIENCE",
            "SCIENTIST","SCISSORS","SCOOP","SCOPE","SCORE","SCOUT","SCRATCH","SCREAM","SCREEN","SCREW","SCRIPT","SCULPTURE","SEA",
            "SEAFOOD","SEAL","SEARCH","SEASON","SEAT","SECOND","SECRET","SECRETARY","SECTION","SECTOR","SECURE","SECURITY","SEED",
            "SEEK","SEEM","SEGMEN","SEIZE","SELDOM","SELECT","SELECTION","SELF","SELL","SELLER","SEMESTER","SEMINAR","SENATE",
            "SENATOR","SEND","SENDER","SENIOR","SENSE","SENSITIVE","SENTENCE","SEPARATE","SEPTEMBER","SEQUENCE","SERIES","SERIOUS",
            "SERVANT","SERVE","SERVICE","SESSION","SETTLEMENT","SEVEN","SEVENTEEN","SEVENTY","SEVERAL","SEVERE","SHADE","SHADOW",
            "SHAKE","SHALLOW","SHAME","SHAPE","SHARE","SHARK","SHARP","SHAVE","SHEEP","SHEET","SHELF","SHELL","SHELTER","SHEPHERD",
            "SHERIFF","SHIELD","SHIFT","SHINE","SHINING","SHIP","SHIPMENT","SHIRT","SHOCK","SHOE","SHOOT","SHOP","SHOPPING",
            "SHORE","SHORT","SHORTAGE","SHORTLY","SHOT","SHOULD","SHOULDER","SHOUT","SHOVEL","SHOW","SHOWER","SHRIMP","SHRINE",
            "SHRINK","SHRUB","SHUT","SHUTTLE","SIBLING","SIDE","SIDEWALK","SIEGE","SIGHT","SIGN","SIGNAL","SIGNATURE","SIGNIFICANT",
            "SILENCE","SILENT","SILK","SILLY","SILVER","SIMILAR","SIMPLE","SIMPLY","SINCE","SINCERE","SING","SINGER","SINGLE",
            "SINK","SIP","SISTER","SITE","SITUATE","SITUATION","SIXTEEN","SIXTY","SIZE","SKATE","SKELETON","SKETCH","SKI","SKILL",
            "SKILLED","SKIN","SKIRT","SKULL","SKY","SLAM","SLAP","SLATE","SLAVE","SLEEP","SLENDER","SLICE","SLIDE","SLIGHT",
            "SLIGHTLY","SLIM","SLIP","SLIPPER","SLOPE","SLOW","SLOWLY","SLUM","SLUMP","SMALL","SMART","SMELL","SMILE","SMOKE",
            "SMOOTH","SNAKE","SNAP","SNEAK","SNOW","SNOWFLAKE","SOAP","SOCCER","SOCIAL","SOCIETY","SOCK","SOCKET","SODA","SODIUM",
            "SOFA","SOFT","SOFTLY","SOFTWARE","SOIL","SOLAR","SOLDIER","SOLE","SOLELY","SOLID","SOLITARY","SOLO","SOLUTION","SOLVE",
            "SOME","SOMEBODY","SOMEONE","SOMETHING","SOMETIMES","SOMEWHAT","SOMEWHERE","SONG","SONIC","SOON","SOPHISTICATED","SORE",
            "SORRY","SORT","SOUL","SOUND","SOUP","SOUR","SOURCE","SOUTH","SOUTHEAST","SOUTHERN","SOUTHWEST","SOVEREIGN","SPACE","SPADE",
            "SPAGHETTI","SPAN","SPARE","SPARK","SPARROW","SPEAK","SPEAKER","SPECIAL","SPECIALIST","SPECIES","SPECIFIC","SPECIFY","SPECK",
            "SPECTACLE","SPEECH","SPEED","SPELL","SPELLING","SPEND","SPHERE","SPICE","SPIDER","SPIKE","SPILL","SPIN","SPINACH",
            "SPINE","SPIRIT","SPIRITUAL","SPLASH","SPLENDID","SPLIT","SPOIL","SPOKE","SPOKESMAN","SPONGE","SPONSOR","SPOON","SPORT",
            "SPOT","SPOTLIGHT","SPOUSE","SPRAY","SPREAD","SPRING","SPRINT","SPUR","SQUAD","SQUARE","SQUASH","SQUEEZE","SQUIRREL",
            "STABILITY","STABLE","STADIUM","STAFF","STAGE","STAIN","STAIR","STAKE","STALL","STAMP","STAND","STANDARD","STANDING",
            "STAR","STARE","START","STARVE","STATE","STATEMENT","STATION","STATUE","STATUS","STATUTE","STAY","STEADY","STEAK",
            "STEAM","STEEL","STEEP","STEER","STEM","STEP","STEREO","STICK","STICKER","STIFF","STILL","STIMULATE","STING","STIR",
            "STITCH","STOCK","STOCKING","STOMACH","STONE","STOP","STORAGE","STORE","STORM","STORY","STOVE","STRAIGHT","STRAIN",
            "STRAIT","STRAND","STRANGE","STRANGER","STRAP","STRATEGY","STRAW","STRAWBERRY","STREAM","STREET","STRENGTH","STRENGTHEN",
            "STRESS","STRETCH","STRICT","STRIKE","STRING","STRIP","STRIPE","STROKE","STRONG","STRONGLY","STRUCTURE","STRUGGLE","STUDENT",
            "STUDIO","STUDY","STUFF","STUMBLE","STUMP","STUNNING","STUPID","STYLE","SUBJECT","SUBMIT","SUBSEQUENT","SUBSTANCE","SUBSTANTIAL",
            "SUBSTITUTE","SUBTLE","SUBURB","SUBWAY","SUCCEED","SUCCESS","SUCCESSFUL","SUCCESSION","SUCH","SUCK","SUDDEN","SUDDENLY","SUFFER",
            "SUFFICIENT","SUGAR","SUGGEST","SUGGESTION","SUIT","SUITABLE","SUITCASE","SUITE","SUMMARY","SUMMER","SUMMIT","SUN","SUNDAY",
            "SUNLIGHT","SUNNY","SUNSET","SUNSHINE","SUPER","SUPERIOR","SUPERMARKET","SUPERVISE","SUPPER","SUPPLEMENT","SUPPLY","SUPPORT",
            "SUPPORTER","SUPPOSE","SUPREME","SURE","SURELY","SURFACE","SURGEON","SURGERY","SURNAME","SURPRISE","SURRENDER","SURROUND",
            "SURVEY","SURVIVE","SURVIVOR","SUSPECT","SUSPEND","SUSPICION","SUSTAIN","SWALLOW","SWAMP","SWAN","SWAP","SWARM","SWEAR",
            "SWEAT","SWEATER","SWEEP","SWEET","SWELL","SWIM","SWIMMER","SWING","SWITCH","SWORD","SYMBOL","SYMPATHY","SYMPTOMS","SYNTHETIC",
            "SYSTEM","TABLE","TABLET","TACKLE","TACTIC","TAIL","TAILOR","TAKE","TALE","TALENT","TALK","TALL","TANK","TAP",
            "TAPE","TARGET","TASK","TASTE","TATTOO","TAUGHT","TAXATION","TAXI","TEA","TEACH","TEACHER","TEACHING","TEAM","TEAR",
            "SPOON","PLATE","PLATES","KNIFE","KNIVES","GLASS","GLASSES","FRUIT","FRUITS","APPLE","APPLES","GRAPE","GRAPES",
            "LEMON","LEMONS","MELON","MELONS","BERRY","BERRIES","ROAST","ROASTS","PLANE","PLANES","WORLD","WORLDS","SEEDS",
            "SCALE","SCALES","SCORE","SCORES","SHELF","SHIRT","SHIRTS","SHOE","SHOES","SLATE","STARS","START","STARTS",
            "TOWER","TOWERS","POWER","POWERS","HONEY","MONEY","NOTES","PARKS","KITES","KNEES","KEPT","KEEPS","KINGS",
            "KILTS","KINDS","KNACK","KNOTS","KNOWS"
        ];

        const VALID_DICTIONARY = new Set(DICTIONARY_WORDS);

        class SoundFX {
            constructor() { this.ctx = null; this.muted = false; }
            init() {
                if (!this.ctx) {
                    const AudioCtx = window.AudioContext || window.webkitAudioContext;
                    if (AudioCtx) this.ctx = new AudioCtx();
                }
            }
            play(type) {
                if (this.muted) return;
                this.init();
                if (!this.ctx) return;

                const now = this.ctx.currentTime;
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.connect(gain);
                gain.connect(this.ctx.destination);

                if (type === 'pickup') {
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(340, now);
                    osc.frequency.exponentialRampToValueAtTime(460, now + 0.07);
                    gain.gain.setValueAtTime(0.12, now);
                    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.07);
                    osc.start(now); osc.stop(now + 0.07);
                } else if (type === 'drop') {
                    osc.type = 'triangle';
                    osc.frequency.setValueAtTime(450, now);
                    osc.frequency.exponentialRampToValueAtTime(220, now + 0.08);
                    gain.gain.setValueAtTime(0.15, now);
                    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
                    osc.start(now); osc.stop(now + 0.08);
                } else if (type === 'word_complete') {
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(587.33, now);
                    osc.frequency.setValueAtTime(739.99, now + 0.08);
                    osc.frequency.setValueAtTime(880.00, now + 0.16);
                    gain.gain.setValueAtTime(0.16, now);
                    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.28);
                    osc.start(now); osc.stop(now + 0.28);
                } else if (type === 'hint') {
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(587.33, now);
                    osc.frequency.setValueAtTime(880, now + 0.09);
                    gain.gain.setValueAtTime(0.15, now);
                    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
                    osc.start(now); osc.stop(now + 0.2);
                } else if (type === 'win') {
                    const notes = [523.25, 659.25, 783.99, 1046.50];
                    notes.forEach((freq, idx) => {
                        const noteOsc = this.ctx.createOscillator();
                        const noteGain = this.ctx.createGain();
                        noteOsc.connect(noteGain);
                        noteOsc.connect(this.ctx.destination);
                        noteOsc.type = 'triangle';
                        noteOsc.frequency.setValueAtTime(freq, now + idx * 0.09);
                        noteGain.gain.setValueAtTime(0.18, now + idx * 0.09);
                        noteGain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.09 + 0.28);
                        noteOsc.start(now + idx * 0.09);
                        noteOsc.stop(now + idx * 0.09 + 0.28);
                    });
                }
            }
        }

        const audio = new SoundFX();

        let isDailyMode = true;
        let activePuzzle = null;
        let boardGrid = [];
        let targetBoard = [];
        let unplacedPool = [];
        let selectedTileId = null;
        let movesCount = 0;
        let hintsRemaining = 3;
        let timerInterval = null;
        let secondsElapsed = 0;
        let isPuzzleSolved = false;
        let prevValidSides = new Set();
        let selectedPracticeSize = 'all';
        let historyStack = [];

        let touchDraggedTileId = null;
        let touchDraggedBoardPos = null;
        let touchGhostEl = null;

        let userStats = {
            played: 0,
            wins: 0,
            currentStreak: 0,
            maxStreak: 0,
            totalTime: 0,
            lastPlayedDate: null
        };

        const gridContainer = document.getElementById('grid-container');
        const poolContainer = document.getElementById('pool-container');
        const poolDropZone = document.getElementById('pool-drop-zone');
        const timerDisplay = document.getElementById('timer-display');
        const movesDisplay = document.getElementById('moves-display');
        const modeBadge = document.getElementById('mode-badge');
        const hintCountDisplay = document.getElementById('hint-count');
        const poolCounter = document.getElementById('pool-counter');
        const practiceLengthSelectors = document.getElementById('practice-length-selectors');

        const modalHelp = document.getElementById('modal-help');
        const modalStats = document.getElementById('modal-stats');
        const modalWin = document.getElementById('modal-win');
        
        const btnHelp = document.getElementById('btn-help');
        const btnStats = document.getElementById('btn-stats');
        const btnSound = document.getElementById('btn-sound');
        const btnTheme = document.getElementById('btn-theme');
        const btnModeToggle = document.getElementById('btn-mode-toggle');
        const btnCheck = document.getElementById('btn-check');
        const btnHint = document.getElementById('btn-hint');
        const btnUndo = document.getElementById('btn-undo');
        const btnShuffle = document.getElementById('btn-shuffle');
        const btnShareWin = document.getElementById('btn-share-win');
        const btnShareStats = document.getElementById('btn-share-stats');
        const btnNextPuzzle = document.getElementById('btn-next-puzzle');

        window.addEventListener('DOMContentLoaded', () => {
            loadStatsFromStorage();
            initTheme();
            setupEventListeners();

            if (!localStorage.getItem('gridle_visited_overhang')) {
                modalHelp.classList.remove('hidden');
                localStorage.setItem('gridle_visited_overhang', 'true');
            }

            startPuzzle(true);
        });

        function getDailyDateString() {
            const today = new Date();
            return `${today.getUTCFullYear()}-${String(today.getUTCMonth() + 1).padStart(2, '0')}-${String(today.getUTCDate()).padStart(2, '0')}`;
        }

        // Seeded Pseudo Random Generator
        function createPRNG(seedStr) {
            let hash = 0;
            for (let i = 0; i < seedStr.length; i++) {
                hash = seedStr.charCodeAt(i) + ((hash << 5) - hash);
            }
            return function() {
                const x = Math.sin(hash++) * 10000;
                return x - Math.floor(x);
            };
        }

        /**
         * Robust Frame Solver:
         * Generates a 4-word overhanging frame where Top, Bottom, Left, and Right 
         * intersect at 4 distinct corner anchor points.
         */
        function generateOverhangFramePuzzle(rngFunc, targetRows = null) {
            const wordList = DICTIONARY_WORDS;
            const wordCount = wordList.length;

            let maxGrid = 6;
            if (targetRows && targetRows !== 'all') {
                maxGrid = parseInt(targetRows);
            } else {
                const rVal = rngFunc();
                maxGrid = rVal < 0.33 ? 5 : (rVal < 0.66 ? 6 : 7);
            }

            // Guaranteed verified puzzle presets for instant fallback shielding
            const VERIFIED_PRESETS = [
                {
                    rows: 6, cols: 6,
                    top: { word: "PLANT", r: 1, cStart: 1 },
                    bottom: { word: "KITES", r: 4, cStart: 1 },
                    left: { word: "PARKS", c: 1, rStart: 1 },
                    right: { word: "NOTES", c: 4, rStart: 1 }
                },
                {
                    rows: 6, cols: 6,
                    top: { word: "SHIRT", r: 1, cStart: 1 },
                    bottom: { word: "KEPT", r: 4, cStart: 2 },
                    left: { word: "SCALE", c: 1, rStart: 1 },
                    right: { word: "ROCKS", c: 4, rStart: 0 }
                },
                {
                    rows: 7, cols: 7,
                    top: { word: "PLATES", r: 1, cStart: 1 },
                    bottom: { word: "HONEY", r: 5, cStart: 1 },
                    left: { word: "PLANTS", c: 1, rStart: 1 },
                    right: { word: "STARS", c: 5, rStart: 1 }
                },
                {
                    rows: 5, cols: 5,
                    top: { word: "APPLE", r: 1, cStart: 0 },
                    bottom: { word: "TREES", r: 3, cStart: 0 },
                    left: { word: "ARTS", c: 0, rStart: 0 },
                    right: { word: "LATE", c: 3, rStart: 1 }
                }
            ];

            // Attempt dynamic backtracking solver
            for (let attempt = 0; attempt < 800; attempt++) {
                const topW = wordList[Math.floor(rngFunc() * wordCount)];
                if (topW.length < 4 || topW.length > maxGrid) continue;

                const botW = wordList[Math.floor(rngFunc() * wordCount)];
                if (botW.length < 4 || botW.length > maxGrid) continue;

                const topR = 1;
                const botR = maxGrid - 2;

                const topCStart = Math.floor(rngFunc() * (maxGrid - topW.length + 1));
                const botCStart = Math.floor(rngFunc() * (maxGrid - botW.length + 1));

                const leftC = Math.max(topCStart, botCStart);
                const rightC = Math.min(topCStart + topW.length - 1, botCStart + botW.length - 1);

                if (rightC - leftC < 2) continue;

                const topLeftChar = topW[leftC - topCStart];
                const botLeftChar = botW[leftC - botCStart];
                const topRightChar = topW[rightC - topCStart];
                const botRightChar = botW[rightC - botCStart];

                // Search matching Left Word
                let leftMatch = null;
                let leftRStart = 0;
                for (let i = 0; i < 80; i++) {
                    const candidate = wordList[Math.floor(rngFunc() * wordCount)];
                    if (candidate.length > maxGrid) continue;
                    for (let r = 0; r <= maxGrid - candidate.length; r++) {
                        if (r <= topR && (topR - r) < candidate.length && (botR - r) < candidate.length) {
                            if (candidate[topR - r] === topLeftChar && candidate[botR - r] === botLeftChar) {
                                leftMatch = candidate;
                                leftRStart = r;
                                break;
                            }
                        }
                    }
                    if (leftMatch) break;
                }
                if (!leftMatch) continue;

                // Search matching Right Word
                let rightMatch = null;
                let rightRStart = 0;
                for (let i = 0; i < 80; i++) {
                    const candidate = wordList[Math.floor(rngFunc() * wordCount)];
                    if (candidate.length > maxGrid) continue;
                    for (let r = 0; r <= maxGrid - candidate.length; r++) {
                        if (r <= topR && (topR - r) < candidate.length && (botR - r) < candidate.length) {
                            if (candidate[topR - r] === topRightChar && candidate[botR - r] === botRightChar) {
                                rightMatch = candidate;
                                rightRStart = r;
                                break;
                            }
                        }
                    }
                    if (rightMatch) break;
                }
                if (!rightMatch) continue;

                // Dynamic generation successful!
                return {
                    id: Math.floor(rngFunc() * 100000),
                    rows: maxGrid, cols: maxGrid,
                    top: { word: topW, r: topR, cStart: topCStart },
                    bottom: { word: botW, r: botR, cStart: botCStart },
                    left: { word: leftMatch, c: leftC, rStart: leftRStart },
                    right: { word: rightMatch, c: rightC, rStart: rightRStart }
                };
            }

            // Fallback preset
            const presetIdx = Math.floor(rngFunc() * VERIFIED_PRESETS.length);
            const chosen = { ...VERIFIED_PRESETS[presetIdx] };
            if (targetRows && targetRows !== 'all') {
                const match = VERIFIED_PRESETS.find(p => p.rows === parseInt(targetRows));
                if (match) return { ...match };
            }
            return chosen;
        }

        function getDailyPuzzle() {
            const dateStr = getDailyDateString();
            const rng = createPRNG(dateStr);
            return generateOverhangFramePuzzle(rng);
        }

        function getRandomPuzzle() {
            const rng = Math.random;
            return generateOverhangFramePuzzle(rng, selectedPracticeSize);
        }

        function buildOverhangFrameMatrix() {
            const p = activePuzzle;
            const rows = p.rows;
            const cols = p.cols;

            boardGrid = Array.from({ length: rows }, () => 
                Array.from({ length: cols }, () => ({ active: false, letter: null, isCornerAnchor: false }))
            );
            targetBoard = Array.from({ length: rows }, () => Array(cols).fill(null));

            // Top Word
            for (let i = 0; i < p.top.word.length; i++) {
                const r = p.top.r, c = p.top.cStart + i;
                if (r < rows && c < cols) {
                    boardGrid[r][c].active = true;
                    targetBoard[r][c] = p.top.word[i];
                }
            }
            // Bottom Word
            for (let i = 0; i < p.bottom.word.length; i++) {
                const r = p.bottom.r, c = p.bottom.cStart + i;
                if (r < rows && c < cols) {
                    boardGrid[r][c].active = true;
                    targetBoard[r][c] = p.bottom.word[i];
                }
            }
            // Left Word
            for (let i = 0; i < p.left.word.length; i++) {
                const r = p.left.rStart + i, c = p.left.c;
                if (r < rows && c < cols) {
                    boardGrid[r][c].active = true;
                    targetBoard[r][c] = p.left.word[i];
                }
            }
            // Right Word
            for (let i = 0; i < p.right.word.length; i++) {
                const r = p.right.rStart + i, c = p.right.c;
                if (r < rows && c < cols) {
                    boardGrid[r][c].active = true;
                    targetBoard[r][c] = p.right.word[i];
                }
            }

            // Lock 4 Corner Intersections as Anchor clues
            const anchors = [
                { r: p.top.r, c: p.left.c },
                { r: p.top.r, c: p.right.c },
                { r: p.bottom.r, c: p.left.c },
                { r: p.bottom.r, c: p.right.c }
            ];

            const poolLetters = [];

            anchors.forEach(anc => {
                if (anc.r >= 0 && anc.r < rows && anc.c >= 0 && anc.c < cols && targetBoard[anc.r][anc.c]) {
                    boardGrid[anc.r][anc.c].isCornerAnchor = true;
                    boardGrid[anc.r][anc.c].letter = targetBoard[anc.r][anc.c];
                }
            });

            // Gather all non-corner target letters into the pool
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    if (boardGrid[r][c].active && !boardGrid[r][c].isCornerAnchor) {
                        poolLetters.push(targetBoard[r][c]);
                    }
                }
            }

            // Shuffle pool letters
            for (let i = poolLetters.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [poolLetters[i], poolLetters[j]] = [poolLetters[j], poolLetters[i]];
            }

            unplacedPool = poolLetters.map((char, index) => ({
                id: `tile-${index}-${Date.now()}`,
                letter: char
            }));
        }

        function startPuzzle(daily = true) {
            isDailyMode = daily;
            isPuzzleSolved = false;
            movesCount = 0;
            secondsElapsed = 0;
            hintsRemaining = 3;
            selectedTileId = null;
            historyStack = [];
            prevValidSides.clear();

            clearInterval(timerInterval);
            timerDisplay.textContent = "00:00";
            movesDisplay.textContent = "0";
            hintCountDisplay.textContent = hintsRemaining;

            const dateUTC = getDailyDateString();
            modeBadge.textContent = isDailyMode ? `Daily Frame (${dateUTC})` : "Practice Mode";
            btnModeToggle.textContent = isDailyMode ? "Practice Mode" : "Daily Mode";

            if (isDailyMode) {
                practiceLengthSelectors.classList.add('hidden');
                practiceLengthSelectors.classList.remove('flex');
            } else {
                practiceLengthSelectors.classList.remove('hidden');
                practiceLengthSelectors.classList.add('flex');
            }

            activePuzzle = isDailyMode ? getDailyPuzzle() : getRandomPuzzle();

            buildOverhangFrameMatrix();
            renderBoard();
            renderPool();
            updateUndoButtonState();

            startTimer();
        }

        function recordStateForUndo() {
            const gridState = boardGrid.map(row => row.map(cell => ({ ...cell })));
            const poolState = unplacedPool.map(tile => ({ ...tile }));
            historyStack.push({
                grid: gridState,
                pool: poolState,
                moves: movesCount
            });
            updateUndoButtonState();
        }

        function undoLastMove() {
            if (historyStack.length === 0 || isPuzzleSolved) return;
            const previous = historyStack.pop();
            boardGrid = previous.grid;
            unplacedPool = previous.pool;
            movesCount = previous.moves;
            movesDisplay.textContent = movesCount;
            selectedTileId = null;

            audio.play('drop');
            renderBoard();
            renderPool();
            updateUndoButtonState();
        }

        function updateUndoButtonState() {
            btnUndo.disabled = historyStack.length === 0;
        }

        function getCurrentFormedSides() {
            const p = activePuzzle;
            let topStr = "", bottomStr = "", leftStr = "", rightStr = "";

            for (let i = 0; i < p.top.word.length; i++) {
                topStr += boardGrid[p.top.r][p.top.cStart + i].letter || "?";
            }
            for (let i = 0; i < p.bottom.word.length; i++) {
                bottomStr += boardGrid[p.bottom.r][p.bottom.cStart + i].letter || "?";
            }
            for (let i = 0; i < p.left.word.length; i++) {
                leftStr += boardGrid[p.left.rStart + i][p.left.c].letter || "?";
            }
            for (let i = 0; i < p.right.word.length; i++) {
                rightStr += boardGrid[p.right.rStart + i][p.right.c].letter || "?";
            }

            return {
                topStr, bottomStr, leftStr, rightStr,
                topValid: !topStr.includes("?") && VALID_DICTIONARY.has(topStr),
                bottomValid: !bottomStr.includes("?") && VALID_DICTIONARY.has(bottomStr),
                leftValid: !leftStr.includes("?") && VALID_DICTIONARY.has(leftStr),
                rightValid: !rightStr.includes("?") && VALID_DICTIONARY.has(rightStr)
            };
        }

        function renderBoard() {
            gridContainer.innerHTML = '';
            const rows = activePuzzle.rows;
            const cols = activePuzzle.cols;
            const sides = getCurrentFormedSides();

            gridContainer.style.gridTemplateColumns = `repeat(${cols}, minmax(0, 1fr))`;

            const t = activePuzzle.top;
            const b = activePuzzle.bottom;
            const l = activePuzzle.left;
            const rW = activePuzzle.right;

            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    const slotData = boardGrid[r][c];
                    const slotDiv = document.createElement('div');
                    slotDiv.dataset.row = r;
                    slotDiv.dataset.col = c;

                    if (!slotData.active) {
                        slotDiv.className = 'w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-transparent border border-dashed border-slate-300/20 dark:border-slate-700/20';
                        gridContainer.appendChild(slotDiv);
                        continue;
                    }

                    const isCorner = slotData.isCornerAnchor;
                    const isTop = (r === t.r && c >= t.cStart && c < t.cStart + t.word.length) && sides.topValid;
                    const isBottom = (r === b.r && c >= b.cStart && c < b.cStart + b.word.length) && sides.bottomValid;
                    const isLeft = (c === l.c && r >= l.rStart && r < l.rStart + l.word.length) && sides.leftValid;
                    const isRight = (c === rW.c && r >= rW.rStart && r < rW.rStart + rW.word.length) && sides.rightValid;
                    const isValidTile = isTop || isBottom || isLeft || isRight;

                    let baseClasses = "slot w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center font-extrabold text-sm sm:text-base border-2 shadow-sm relative ";

                    if (isCorner) {
                        baseClasses += "bg-cyan-600 border-cyan-700 text-white shadow-md cursor-not-allowed ";
                    } else if (isValidTile) {
                        baseClasses += "valid-word-tile-gold ";
                    } else if (slotData.letter) {
                        baseClasses += "bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-100 tile ";
                    } else {
                        baseClasses += "bg-slate-100/70 dark:bg-slate-800/70 border-dashed border-slate-300 dark:border-slate-600 ";
                    }

                    slotDiv.className = baseClasses;

                    if (isCorner) {
                        slotDiv.innerHTML = `<span>${slotData.letter}</span><i class="fa-solid fa-shield text-[8px] absolute top-0.5 right-0.5 text-cyan-200"></i>`;
                    } else if (slotData.letter) {
                        slotDiv.textContent = slotData.letter;
                        slotDiv.draggable = true;

                        slotDiv.addEventListener('dragstart', (e) => onBoardTileDragStart(e, r, c));
                        slotDiv.addEventListener('click', () => onBoardTileClick(r, c));
                        slotDiv.addEventListener('touchstart', (e) => onBoardTouchStart(e, r, c), { passive: false });
                    }

                    if (!isCorner) {
                        slotDiv.addEventListener('dragover', (e) => e.preventDefault());
                        slotDiv.addEventListener('dragenter', (e) => {
                            e.preventDefault();
                            slotDiv.classList.add('drag-over');
                        });
                        slotDiv.addEventListener('dragleave', () => slotDiv.classList.remove('drag-over'));
                        slotDiv.addEventListener('drop', (e) => onSlotDrop(e, r, c));
                        slotDiv.addEventListener('click', () => onEmptySlotClick(r, c));
                    }

                    gridContainer.appendChild(slotDiv);
                }
            }
        }

        function renderPool() {
            poolContainer.innerHTML = '';
            poolCounter.textContent = `${unplacedPool.length} tiles left`;

            unplacedPool.forEach(tile => {
                const isVowel = "AEIOU".includes(tile.letter);
                const isSelected = selectedTileId === tile.id;

                const tileDiv = document.createElement('div');
                tileDiv.dataset.id = tile.id;
                tileDiv.draggable = true;

                let classes = "tile w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center font-extrabold text-sm sm:text-base border-2 shadow-sm transition transform active:scale-105 ";

                if (isSelected) {
                    classes += "bg-cyan-500 border-cyan-400 text-white ring-4 ring-cyan-300/50 dark:ring-cyan-500/50 scale-105 ";
                } else if (isVowel) {
                    classes += "bg-indigo-50 dark:bg-indigo-900/40 border-indigo-200 dark:border-indigo-700 text-indigo-900 dark:text-indigo-200 hover:border-indigo-400 ";
                } else {
                    classes += "bg-slate-100 dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-100 hover:border-slate-400 ";
                }

                tileDiv.className = classes;
                tileDiv.textContent = tile.letter;

                tileDiv.addEventListener('dragstart', (e) => onPoolTileDragStart(e, tile.id));
                tileDiv.addEventListener('click', () => onPoolTileClick(tile.id));
                tileDiv.addEventListener('touchstart', (e) => onPoolTouchStart(e, tile.id), { passive: false });

                poolContainer.appendChild(tileDiv);
            });
        }

        function setupTrayDropZone() {
            if (!poolDropZone) return;
            poolDropZone.addEventListener('dragover', (e) => {
                e.preventDefault();
                poolDropZone.classList.add('border-emerald-500', 'bg-emerald-50/40', 'dark:bg-emerald-950/20');
            });
            poolDropZone.addEventListener('dragleave', () => {
                poolDropZone.classList.remove('border-emerald-500', 'bg-emerald-50/40', 'dark:bg-emerald-950/20');
            });
            poolDropZone.addEventListener('drop', (e) => {
                e.preventDefault();
                poolDropZone.classList.remove('border-emerald-500', 'bg-emerald-50/40', 'dark:bg-emerald-950/20');
                const rawData = e.dataTransfer.getData('text/plain');
                if (!rawData) return;
                const data = JSON.parse(rawData);
                if (data.type === 'board') {
                    recordStateForUndo();
                    const fromR = data.row;
                    const fromC = data.col;
                    if (boardGrid[fromR][fromC].letter) {
                        unplacedPool.push({ id: `tile-${Date.now()}`, letter: boardGrid[fromR][fromC].letter });
                        boardGrid[fromR][fromC].letter = null;
                        movesCount++;
                        movesDisplay.textContent = movesCount;
                        audio.play('drop');
                        onStateChanged();
                    }
                }
            });
        }

        function onPoolTileDragStart(e, tileId) {
            audio.play('pickup');
            e.dataTransfer.setData('text/plain', JSON.stringify({ type: 'pool', id: tileId }));
        }

        function onBoardTileDragStart(e, r, c) {
            if (boardGrid[r][c].isCornerAnchor || !boardGrid[r][c].letter) return;
            audio.play('pickup');
            e.dataTransfer.setData('text/plain', JSON.stringify({ type: 'board', row: r, col: c }));
        }

        function onPoolTouchStart(e, tileId) {
            e.preventDefault();
            touchDraggedTileId = tileId;
            touchDraggedBoardPos = null;
            audio.play('pickup');
            createTouchGhost(e.touches[0], unplacedPool.find(t => t.id === tileId)?.letter || '');
            document.addEventListener('touchmove', onTouchMove, { passive: false });
            document.addEventListener('touchend', onTouchEnd, { passive: false });
        }

        function onBoardTouchStart(e, r, c) {
            if (boardGrid[r][c].isCornerAnchor || !boardGrid[r][c].letter) return;
            e.preventDefault();
            touchDraggedTileId = null;
            touchDraggedBoardPos = { r, c };
            audio.play('pickup');
            createTouchGhost(e.touches[0], boardGrid[r][c].letter);
            document.addEventListener('touchmove', onTouchMove, { passive: false });
            document.addEventListener('touchend', onTouchEnd, { passive: false });
        }

        function createTouchGhost(touch, letter) {
            if (touchGhostEl) touchGhostEl.remove();
            touchGhostEl = document.createElement('div');
            touchGhostEl.className = 'fixed pointer-events-none w-11 h-11 bg-cyan-500 text-white font-extrabold text-base rounded-xl flex items-center justify-center shadow-2xl z-50 transform -translate-x-1/2 -translate-y-1/2 opacity-90';
            touchGhostEl.textContent = letter;
            touchGhostEl.style.left = `${touch.clientX}px`;
            touchGhostEl.style.top = `${touch.clientY}px`;
            document.body.appendChild(touchGhostEl);
        }

        function onTouchMove(e) {
            if (!touchGhostEl) return;
            e.preventDefault();
            const touch = e.touches[0];
            touchGhostEl.style.left = `${touch.clientX}px`;
            touchGhostEl.style.top = `${touch.clientY}px`;
        }

        function onSlotDrop(e, r, c) {
            e.preventDefault();
            const targetSlot = document.querySelector(`[data-row="${r}"][data-col="${c}"]`);
            if (targetSlot) targetSlot.classList.remove('drag-over');

            if (boardGrid[r][c].isCornerAnchor) return;

            const data = JSON.parse(e.dataTransfer.getData('text/plain'));
            recordStateForUndo();
            audio.play('drop');
            movesCount++;
            movesDisplay.textContent = movesCount;

            if (data.type === 'pool') {
                const poolIndex = unplacedPool.findIndex(t => t.id === data.id);
                if (poolIndex > -1) {
                    const tile = unplacedPool.splice(poolIndex, 1)[0];
                    if (boardGrid[r][c].letter) {
                        unplacedPool.push({ id: `tile-${Date.now()}`, letter: boardGrid[r][c].letter });
                    }
                    boardGrid[r][c].letter = tile.letter;
                }
            } else if (data.type === 'board') {
                const fromR = data.row;
                const fromC = data.col;
                const temp = boardGrid[r][c].letter;
                boardGrid[r][c].letter = boardGrid[fromR][fromC].letter;
                boardGrid[fromR][fromC].letter = temp;
            }

            selectedTileId = null;
            onStateChanged();
        }

        function onTouchEnd(e) {
            if (!touchGhostEl) return;
            e.preventDefault();

            const touch = e.changedTouches[0];
            const targetEl = document.elementFromPoint(touch.clientX, touch.clientY);

            if (touchGhostEl && touchGhostEl.parentNode) {
                touchGhostEl.parentNode.removeChild(touchGhostEl);
            }
            touchGhostEl = null;

            document.removeEventListener('touchmove', onTouchMove);
            document.removeEventListener('touchend', onTouchEnd);

            if (!targetEl) return;

            const slotEl = targetEl.closest('.slot');
            if (slotEl) {
                const r = parseInt(slotEl.dataset.row);
                const c = parseInt(slotEl.dataset.col);
                if (!isNaN(r) && !isNaN(c) && !boardGrid[r][c].isCornerAnchor) {
                    recordStateForUndo();
                    audio.play('drop');
                    movesCount++;
                    movesDisplay.textContent = movesCount;

                    if (touchDraggedTileId) {
                        const poolIndex = unplacedPool.findIndex(t => t.id === touchDraggedTileId);
                        if (poolIndex > -1) {
                            const tile = unplacedPool.splice(poolIndex, 1)[0];
                            if (boardGrid[r][c].letter) {
                                unplacedPool.push({ id: `tile-${Date.now()}`, letter: boardGrid[r][c].letter });
                            }
                            boardGrid[r][c].letter = tile.letter;
                        }
                    } else if (touchDraggedBoardPos) {
                        const fromR = touchDraggedBoardPos.r;
                        const fromC = touchDraggedBoardPos.c;
                        const temp = boardGrid[r][c].letter;
                        boardGrid[r][c].letter = boardGrid[fromR][fromC].letter;
                        boardGrid[fromR][fromC].letter = temp;
                    }
                    onStateChanged();
                }
            } else if (touchDraggedBoardPos && targetEl.closest('#pool-drop-zone')) {
                recordStateForUndo();
                audio.play('drop');
                const fromR = touchDraggedBoardPos.r;
                const fromC = touchDraggedBoardPos.c;
                unplacedPool.push({ id: `tile-${Date.now()}`, letter: boardGrid[fromR][fromC].letter });
                boardGrid[fromR][fromC].letter = null;
                movesCount++;
                movesDisplay.textContent = movesCount;
                onStateChanged();
            }

            touchDraggedTileId = null;
            touchDraggedBoardPos = null;
        }

        function onPoolTileClick(tileId) {
            audio.play('pickup');
            selectedTileId = (selectedTileId === tileId) ? null : tileId;
            renderPool();
        }

        function onEmptySlotClick(r, c) {
            if (boardGrid[r][c].isCornerAnchor) return;

            if (selectedTileId) {
                recordStateForUndo();
                audio.play('drop');
                const poolIndex = unplacedPool.findIndex(t => t.id === selectedTileId);
                if (poolIndex > -1) {
                    const tile = unplacedPool.splice(poolIndex, 1)[0];
                    if (boardGrid[r][c].letter) {
                        unplacedPool.push({ id: `tile-${Date.now()}`, letter: boardGrid[r][c].letter });
                    }
                    boardGrid[r][c].letter = tile.letter;
                    movesCount++;
                    movesDisplay.textContent = movesCount;
                }
                selectedTileId = null;
                onStateChanged();
            }
        }

        function onBoardTileClick(r, c) {
            if (boardGrid[r][c].isCornerAnchor || !boardGrid[r][c].letter) return;

            recordStateForUndo();
            audio.play('drop');
            unplacedPool.push({ id: `tile-${Date.now()}`, letter: boardGrid[r][c].letter });
            boardGrid[r][c].letter = null;
            movesCount++;
            movesDisplay.textContent = movesCount;

            onStateChanged();
        }

        function onStateChanged() {
            renderBoard();
            renderPool();
            checkWordCompletionSounds();
            checkPuzzleVictory();
        }

        function checkWordCompletionSounds() {
            const sides = getCurrentFormedSides();
            const currentValid = new Set();
            if (sides.topValid) currentValid.add('top');
            if (sides.bottomValid) currentValid.add('bottom');
            if (sides.leftValid) currentValid.add('left');
            if (sides.rightValid) currentValid.add('right');

            currentValid.forEach(side => {
                if (!prevValidSides.has(side)) {
                    audio.play('word_complete');
                }
            });
            prevValidSides = currentValid;
        }

        function checkPuzzleVictory() {
            const sides = getCurrentFormedSides();
            if (sides.topValid && sides.bottomValid && sides.leftValid && sides.rightValid && unplacedPool.length === 0) {
                if (!isPuzzleSolved) {
                    isPuzzleSolved = true;
                    clearInterval(timerInterval);
                    audio.play('win');
                    triggerConfetti();
                    saveVictoryStats();
                    showWinModal(sides);
                }
            }
        }

        function checkBoardWords() {
            const sides = getCurrentFormedSides();
            let validCount = 0;
            if (sides.topValid) validCount++;
            if (sides.bottomValid) validCount++;
            if (sides.leftValid) validCount++;
            if (sides.rightValid) validCount++;

            showToast(`${validCount} of 4 frame words are valid!`);
        }

        function giveHint() {
            if (hintsRemaining <= 0) {
                showToast("No hints remaining!");
                return;
            }

            const rows = activePuzzle.rows;
            const cols = activePuzzle.cols;
            const wrongSlots = [];

            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    if (boardGrid[r][c].active && !boardGrid[r][c].isCornerAnchor) {
                        const targetLetter = targetBoard[r][c];
                        if (boardGrid[r][c].letter !== targetLetter) {
                            wrongSlots.push({ r, c, targetLetter });
                        }
                    }
                }
            }

            if (wrongSlots.length === 0) {
                showToast("All current tiles are correct!");
                return;
            }

            recordStateForUndo();
            hintsRemaining--;
            hintCountDisplay.textContent = hintsRemaining;
            audio.play('hint');

            const pick = wrongSlots[Math.floor(Math.random() * wrongSlots.length)];
            const targetChar = pick.targetLetter;

            if (boardGrid[pick.r][pick.c].letter) {
                unplacedPool.push({ id: `tile-${Date.now()}`, letter: boardGrid[pick.r][pick.c].letter });
            }

            const poolIndex = unplacedPool.findIndex(t => t.letter === targetChar);
            if (poolIndex > -1) {
                unplacedPool.splice(poolIndex, 1);
            }

            boardGrid[pick.r][pick.c].letter = targetChar;
            showToast(`Hint placed at Row ${pick.r + 1}, Col ${pick.c + 1}`);

            onStateChanged();
        }

        function shufflePool() {
            recordStateForUndo();
            for (let i = unplacedPool.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [unplacedPool[i], unplacedPool[j]] = [unplacedPool[j], unplacedPool[i]];
            }
            audio.play('drop');
            renderPool();
        }

        function startTimer() {
            clearInterval(timerInterval);
            timerInterval = setInterval(() => {
                secondsElapsed++;
                const mins = String(Math.floor(secondsElapsed / 60)).padStart(2, '0');
                const secs = String(secondsElapsed % 60).padStart(2, '0');
                timerDisplay.textContent = `${mins}:${secs}`;
            }, 1000);
        }

        function triggerConfetti() {
            if (typeof confetti === 'function') {
                confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });
            }
        }

        function saveVictoryStats() {
            userStats.played++;
            userStats.wins++;
            userStats.totalTime += secondsElapsed;

            const dateStr = getDailyDateString();
            if (userStats.lastPlayedDate) {
                const prev = new Date(userStats.lastPlayedDate);
                const curr = new Date(dateStr);
                const diffDays = Math.round((curr - prev) / (1000 * 60 * 60 * 24));

                if (diffDays === 1) {
                    userStats.currentStreak++;
                } else if (diffDays > 1) {
                    userStats.currentStreak = 1;
                }
            } else {
                userStats.currentStreak = 1;
            }

            userStats.lastPlayedDate = dateStr;
            if (userStats.currentStreak > userStats.maxStreak) {
                userStats.maxStreak = userStats.currentStreak;
            }

            saveStatsToStorage();
        }

        function showWinModal(sides) {
            document.getElementById('win-time').textContent = timerDisplay.textContent;
            document.getElementById('win-moves').textContent = movesCount;
            document.getElementById('win-streak').textContent = `${userStats.currentStreak} 🔥`;

            const winWordsList = document.getElementById('win-words-list');
            winWordsList.innerHTML = `
                <div class="bg-emerald-500/10 p-1.5 rounded text-emerald-600 dark:text-emerald-400 font-bold">Top: ${sides.topStr}</div>
                <div class="bg-emerald-500/10 p-1.5 rounded text-emerald-600 dark:text-emerald-400 font-bold">Bottom: ${sides.bottomStr}</div>
                <div class="bg-emerald-500/10 p-1.5 rounded text-emerald-600 dark:text-emerald-400 font-bold">Left: ${sides.leftStr}</div>
                <div class="bg-emerald-500/10 p-1.5 rounded text-emerald-600 dark:text-emerald-400 font-bold">Right: ${sides.rightStr}</div>
            `;

            if (!isDailyMode) {
                btnNextPuzzle.classList.remove('hidden');
            } else {
                btnNextPuzzle.classList.add('hidden');
            }

            modalWin.classList.remove('hidden');
        }

        function copyShareToClipboard() {
            const timeStr = timerDisplay.textContent;
            const streakStr = userStats.currentStreak;
            const modeStr = isDailyMode ? `Daily ${getDailyDateString()}` : "Practice Round";

            const shareText = `Gridle: Overhanging Frame (${modeStr})\n` +
                              `⏱️ Time: ${timeStr} | 🎯 Moves: ${movesCount}\n` +
                              `🔥 Streak: ${streakStr}\n` +
                              `🟩🟩🟩🟩\n` +
                              `🟩⬜⬜🟩\n` +
                              `🟩🟩🟩🟩\n` +
                              `Play Gridle Frame Edition!`;

            const tempInput = document.createElement('textarea');
            tempInput.value = shareText;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);

            showToast("Copied result grid to clipboard!");
        }

        function loadStatsFromStorage() {
            const data = localStorage.getItem('gridle_overhang_stats');
            if (data) {
                try { userStats = JSON.parse(data); } catch (e) {}
            }
        }

        function saveStatsToStorage() {
            localStorage.setItem('gridle_overhang_stats', JSON.stringify(userStats));
        }

        function updateStatsUI() {
            document.getElementById('stat-played').textContent = userStats.played;
            const winRate = userStats.played > 0 ? Math.round((userStats.wins / userStats.played) * 100) : 0;
            document.getElementById('stat-winrate').textContent = `${winRate}%`;
            document.getElementById('stat-streak').textContent = userStats.currentStreak;
            document.getElementById('stat-max-streak').textContent = userStats.maxStreak;

            if (userStats.wins > 0) {
                const avgSecs = Math.round(userStats.totalTime / userStats.wins);
                const mins = String(Math.floor(avgSecs / 60)).padStart(2, '0');
                const secs = String(avgSecs % 60).padStart(2, '0');
                document.getElementById('stat-avg-time').textContent = `${mins}:${secs}`;
            } else {
                document.getElementById('stat-avg-time').textContent = "--:--";
            }
        }

        function initTheme() {
            const isDark = localStorage.getItem('gridle_theme') !== 'light';
            if (isDark) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
            updateThemeIcon();
        }

        function toggleTheme() {
            const isDark = document.documentElement.classList.toggle('dark');
            localStorage.setItem('gridle_theme', isDark ? 'dark' : 'light');
            updateThemeIcon();
        }

        function updateThemeIcon() {
            const icon = document.getElementById('icon-theme');
            if (document.documentElement.classList.contains('dark')) {
                icon.className = 'fa-solid fa-sun text-xl text-amber-400';
            } else {
                icon.className = 'fa-solid fa-moon text-xl text-slate-600';
            }
        }

        function showToast(msg) {
            const toast = document.getElementById('toast');
            document.getElementById('toast-text').textContent = msg;
            toast.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
            toast.classList.add('opacity-100', 'translate-y-0');

            setTimeout(() => {
                toast.classList.remove('opacity-100', 'translate-y-0');
                toast.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
            }, 2200);
        }

        function setupEventListeners() {
            setupTrayDropZone();
            btnHelp.addEventListener('click', () => modalHelp.classList.remove('hidden'));
            btnStats.addEventListener('click', () => {
                updateStatsUI();
                modalStats.classList.remove('hidden');
            });

            btnSound.addEventListener('click', () => {
                audio.muted = !audio.muted;
                const icon = document.getElementById('icon-sound');
                icon.className = audio.muted ? 'fa-solid fa-volume-xmark text-xl text-slate-400' : 'fa-solid fa-volume-high text-xl';
                showToast(audio.muted ? "Sound Muted" : "Sound Enabled");
            });

            btnTheme.addEventListener('click', toggleTheme);
            btnModeToggle.addEventListener('click', () => startPuzzle(!isDailyMode));

            document.querySelectorAll('.btn-size-filter').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    document.querySelectorAll('.btn-size-filter').forEach(b => {
                        b.classList.remove('bg-emerald-600', 'text-white');
                        b.classList.add('bg-white', 'dark:bg-slate-700', 'text-slate-700', 'dark:text-slate-200');
                    });
                    e.target.classList.remove('bg-white', 'dark:bg-slate-700', 'text-slate-700', 'dark:text-slate-200');
                    e.target.classList.add('bg-emerald-600', 'text-white');

                    selectedPracticeSize = e.target.dataset.size;
                    if (!isDailyMode) {
                        startPuzzle(false);
                    }
                });
            });

            btnCheck.addEventListener('click', checkBoardWords);
            btnUndo.addEventListener('click', undoLastMove);
            btnShuffle.addEventListener('click', shufflePool);
            btnHint.addEventListener('click', giveHint);

            document.querySelectorAll('.btn-close-modal').forEach(btn => {
                btn.addEventListener('click', () => {
                    modalHelp.classList.add('hidden');
                    modalStats.classList.add('hidden');
                    modalWin.classList.add('hidden');
                });
            });

            btnShareWin.addEventListener('click', copyShareToClipboard);
            btnShareStats.addEventListener('click', copyShareToClipboard);

            btnNextPuzzle.addEventListener('click', () => {
                modalWin.classList.add('hidden');
                startPuzzle(false);
            });
        }
    </script>
</body>
</html>