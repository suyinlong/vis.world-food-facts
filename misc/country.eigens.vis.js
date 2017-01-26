/*
* @Author: Yinlong Su
* @Date:   2016-04-26 10:34:57
* @Last Modified by:   Yinlong Su
* @Last Modified time: 2016-04-27 23:19:17
*/


var dataset_pca = [[1.1249790092222332, -0.8740764212432209], [-1.3155072212025445, 0.7409449071883573], [-3.6806726823284466, 0.4845611077917724], [0.551607476528318, -0.27609842390172], [-0.1609256455041773, 0.11068943231569109], [0.4638490519856899, -0.7154224117021951], [1.0695868713746035, 0.12007849578205075], [-0.4541854100492076, -0.06625688612140991], [-0.272659487143757, 0.2180199273214584], [-3.3105569974850546, -0.7390748048669074], [0.32644455709952264, 0.43695917463486256], [-0.14923236611211899, -0.18312419115272588], [1.107924219161009, -0.8636715735153112], [-1.133104864809856, 0.9608773189952438], [-1.262937224769727, -0.5794697415962543], [0.20214975264076357, -1.0994077184339575], [-0.0048934296886428445, 6.823255343595], [0.9900018006218811, 0.7409687974408614], [0.5968287627642028, 0.9204575167278954], [-0.7439556611072765, 0.253630940464312], [-0.47600807220499713, 0.38138954664644525], [-0.3146863109350321, -0.34084191212867754], [-0.40368234532932096, -2.206456871623706], [0.6212964813252884, -0.3872165935096829], [-3.4111836205365975, -1.063395258557736], [-2.6033881195103468, -1.0137959652756519], [2.588364823238032, -0.5131067041211003], [-0.203593813355424, 0.04582309438515114], [1.3401324864166946, -1.0567405010996704], [1.0981124446054533, -1.3730926225023286], [-2.923790429554226, -0.1157700995731042], [-0.534822675935548, -0.06239515818903657], [0.5980473701346163, -0.36675720622550667], [-1.2431476830039583, 0.005333398048493329], [1.389903045521887, 2.497259553502533], [0.6271180558685594, -0.21833535559899508], [1.4370545090200928, -1.1062050192510011], [4.905062190417379, 0.6832433871054017], [-0.5416162516790113, 0.4198047288193768], [-0.7141630064158789, -0.25830497411116876], [0.27421868100962354, 0.33497736603161676], [-0.6025556551091351, -2.135126794724394], [2.1734498372524715, -1.4862597883386481], [0.3701073791566277, -0.31860287438002155], [-1.7587106393174676, -0.7529826403105766], [-3.3581020047184675, -0.7167134885643877], [-1.4828233845755083, -0.79087077790474], [0.8861571414006155, -1.012119334938659], [-0.7377505381260124, 0.18109192943564306], [0.051467647094364195, -1.6445679178697301], [0.38079774428005364, 0.6878471392752082], [-0.00721349504232887, 0.4730788858822777], [-0.9339238536352588, 0.06564434927012526], [2.1120313478789976, -1.1599869215659522], [-0.1960106266121756, -0.3641903944221118], [1.8212261011067243, -1.4642620378706444], [-0.2357349534152361, 0.7337874146122753], [3.7706890519187617, -1.4126103154281526], [-0.36719532117194226, -0.9032989242911764], [0.19658705768331508, 5.899807164299067], [2.2792746734110008, 0.17790243147918186], [-3.4343129998612674, -0.872190478469144], [-0.02562175089268825, 0.6004302940520091], [3.420859637252328, -1.0792076912471151], [-0.45680510364556626, -0.7981733345866515], [1.805364298924582, -0.6871973853355251], [1.932402349067122, 0.2934956807634438], [2.5901410547390107, 0.7783335787809917], [-0.7672122345328027, 0.7120566549548152], [-2.812587096251087, -0.6631653845115708], [2.0780253892796363, 0.9657966126015052], [-0.0604349678014205, -0.04409228416350787], [0.7247109266598211, 1.8494194839511853], [1.6152608150479266, -0.3239264682708438], [0.10434533007670245, 0.3828273514160657], [-1.6697494510697952, 2.3396342057508126], [-3.4493217096217244, -0.4732593706964277], [-0.2930730970208594, 0.9139150457108366], [-0.8471712508454939, 5.542595768207936], [0.74881945129987, 1.0428557161486596], [-0.7380652891638886, -0.3289722663299426], [0.6179178163807458, -0.3485373065322433], [-0.8492826701173087, -2.436590948175008], [0.47011223266321306, -1.0807814735695926], [-0.5200574603210956, -1.0420907265907176]];
var dataset_mds_euclidean = [[0.08636324261712236, 0.021301656502859215], [-0.005782705795962381, -0.08387865181112955], [-0.12871598304888096, -0.06643524175771356], [0.03584605964783482, -0.024215080050347615], [0.010896065431445225, 0.012833965084672896], [0.06812975049495851, 0.04684071621339399], [-0.004602134697179277, -0.04814359379523857], [-0.026659658046328135, -0.00299427364245416], [-0.021037729838931374, -0.03037441949923826], [-0.11493967321309186, -0.03543709351864746], [0.07766418430872611, 0.0746057369301478], [-0.008602436759403793, -0.031408178297260975], [0.02465373076090201, 0.025987866008442467], [-0.057672982111433006, -0.03199722203802086], [-0.00917263541911048, -0.07668272854832643], [0.0026508363735274266, 0.04281620036309208], [-0.14548943849221987, 0.00091857547063399], [0.03652364492185078, -0.047559854455969795], [0.0720858612609009, -0.05334572428718968], [-0.03976153147268718, -0.024598456155570603], [-0.050379793740599324, -0.02316850292108695], [0.03979672795661512, -0.035095611209927845], [-0.04342460517611211, 0.06612584412406328], [-0.11823645283654835, 0.021688006346348362], [-0.09987356755473951, -0.0551170793747972], [-0.11184990803093742, -0.03285266114708989], [0.14164173310782285, 0.12109001577531162], [-0.03930811023524863, -0.02746978764063458], [0.005618307395362548, 0.0668117834885966], [0.036718957496055846, 0.030583247765323167], [-0.13181174498072334, -0.0473793434579081], [-0.06319549610875698, -0.014319077731446857], [0.012107986805986876, 0.02592167746802439], [-0.0896269922255833, -0.0028617506384463138], [0.01958059602791141, -0.10931241623868995], [0.02174438265591864, -0.01620702038552836], [0.12463081199040435, -0.003353208044142541], [-0.16777867676576003, 0.1556787207064864], [-0.15698373627787862, -0.08477569816799452], [-0.04797100470540414, -0.052945665291360786], [0.05918925281279455, -0.006162103385442975], [-0.022742649832156563, 0.11143053465120933], [0.27399681915896945, 0.12064253054196156], [-0.15715736452896, -0.15009683256487655], [-0.08807074252174844, -0.006962757870477171], [-0.10862915907071045, -0.02519279021570232], [-0.0663517686538763, 0.010084045711173517], [0.06823677698835445, 0.02674113421891486], [-0.047259551538498236, -0.043501182205206525], [-0.007889123653946811, 0.09236140408784892], [0.008187427429688563, 0.027110768361107537], [-0.032346219801860705, -0.016170552591753113], [0.022236734033917828, -0.022116144390265907], [0.13221217267627977, 0.09631906142403474], [-0.038713045961715195, 0.06778460805640911], [0.19159192793034066, 0.12425353434018678], [0.02815880179203186, -0.013837819498738121], [0.23173650595590653, -0.08218662359337611], [-0.05693887050078883, -0.012978408991072663], [0.04313809230248076, 0.005240342491044095], [0.15452461188432662, 0.03802150756165564], [-0.09691468190490049, -0.09479584192326118], [0.02582323856237774, -0.00768833008052893], [0.17707130675500163, 0.21663070648514113], [-0.06741283900126567, -0.03214367042992638], [0.10511309828317432, 0.05097670693137568], [0.006698262014037498, 0.024243343132438505], [0.08992043337074684, -0.005877518126329441], [0.005307049929482715, -0.033961784089308174], [-0.09623120912512995, -0.032327666489552764], [0.15259660570920672, -0.018342968104016182], [-0.02272023484966319, -0.009757229963402416], [0.0423653204190778, 0.00949484352447342], [0.07979377799600183, 0.016073001869833917], [0.007519796613650383, -0.009790744967006909], [-0.07735787291083752, -0.06802219878147822], [-0.11220270162826225, -0.06579896376526816], [0.059064577903881976, 0.03389298004145253], [-0.05742493821866003, -0.06375605590486981], [0.04392765018724913, 0.022683981768880875], [-0.0036543586948509853, -0.0743687314415542], [0.06745745934976545, 0.026780632333064065], [-0.04229848371621053, 0.11961460305001544], [-0.016731295846024972, 0.0488218221323214], [0.009403530181495895, -0.04464084548236379]];
var dataset_mds_cosine = [[-0.0008158671126171318, -0.006740404980307755], [0.07507308894268024, -0.007480743814476178], [0.00023443956835713517, 0.0728861243532047], [-0.008098316041467121, -0.009293369519393224], [0.01110355758979657, 0.0037513244791551694], [-0.004447564127549489, -0.0046573769857063884], [0.04485043137893471, 0.0050650032941784735], [-0.0066067309687742855, 0.0012554046117403367], [0.016700718463680098, 0.003536851512280818], [-0.11662256984554863, -0.021252198201155315], [-0.07851557153033517, -0.0055547134692140645], [0.013109631995701051, -0.0007749052647946797], [-0.003960178693291841, 0.0008559352610292715], [0.049306071678929766, 0.0006558854174102323], [0.03062963831253981, -0.009225072832047739], [-0.0068709785261508284, 0.0040610198451787], [-0.009750195109464222, 0.0358581001671104], [0.053086789692187566, 0.002025046976888065], [0.03885294703108838, -0.013178099892137122], [0.007361852439180851, -0.0023010157223274865], [0.01313243622181391, 0.0029360022648144152], [0.027089026409148568, -0.023775976048479742], [-0.029058732956589374, 0.020763840567554648], [0.028651536623270017, 0.02834852696628403], [-0.08237835196505988, 0.007428532478728474], [-0.03404170513943957, 0.011582283739808939], [-0.012024779513311098, -0.008390308028591234], [0.005143756258500449, 0.0027781331448864916], [-0.015677940568680968, 0.007773927063205101], [-0.016985213052083194, 0.0011159657147776822], [-0.03734583645011419, 0.003176558025916184], [0.007158593025681876, 0.013031362575999435], [0.00036877989472403034, 0.0018513620929375618], [0.005355718922406857, 0.010710026560868922], [0.057407786893326006, -0.012987113947192245], [-0.017105901592207887, -0.006851858529771781], [-0.061047951557132385, -0.016997386188188184], [0.06535128471577976, 0.04696589767580895], [0.07100993334758697, 0.041540059968928206], [0.0093112428770418, -0.00035593835820196986], [0.014519011886814722, -0.005795053286748316], [-0.10755123016465734, 0.03955163256860759], [-0.08460170263486419, -0.014714075325086451], [0.1776693512163782, -0.03535570925711247], [-0.023422723763267376, 0.004620686721335701], [-0.1159971865790582, -0.020070342806788325], [-0.02652733581267582, 0.003034580478143418], [-0.02106572344966205, -0.007260981310368845], [0.008923620696638511, -0.00235455923328857], [-0.04750462684415216, 0.012840979406306298], [0.02476110705495423, 0.0068424069435152664], [0.01030814183343682, 0.00241524919683604], [0.03305843740449767, -0.0013098594793110355], [-0.0023280759217270755, -0.0037040214123723087], [-0.05346567843922013, 0.0073835189065942575], [-0.0013071275309494911, -0.0013031367764108914], [0.011030612543852066, -0.004172956570318576], [0.010331098192421357, -0.019933780831453703], [-0.004237079905502108, 0.0024778045756645296], [0.025223822748596806, -0.012550293909973505], [0.0049974224182194275, -0.012227142623478092], [0.11485244576404482, 0.013866177262790505], [0.01953368346139493, -0.00030487776552159355], [-0.03163064543055772, 0.007643564633554343], [0.004191520160023827, 0.010082773851459474], [-0.013911554777614766, -0.00695557413390504], [0.023711117819689497, 0.01830958635779085], [0.04319504198285783, 0.002270797257653299], [0.03217925755897601, 0.009990114748135315], [-0.07313754080225933, -0.11116040432972824], [0.030383559821082717, -0.021595157521198897], [0.00633718021111576, 0.0030327534084666767], [-0.007015402975185896, -0.005109892474584003], [-0.00012367540010871787, -0.008640588463150987], [0.006932458857802226, 0.0010404555978746491], [0.027592779926582472, -0.00283122543047473], [-0.07772375135704823, -0.012286994868350904], [0.07990850561745609, 0.01187665721347525], [0.016505427879828477, -0.01160068975467475], [-0.003557116001031249, -0.003385300596459254], [0.04996114697530788, -0.009614366562174051], [-0.010684932319545093, -0.005914487792021058], [-0.11507609422164825, 0.021557449030942692], [-0.043586959254210085, 0.010374388088666914], [-0.0005854659795662493, -0.02919679670956867]];
var dataset_mds_correlation = [[0.00470319858547918, -0.009773410724641919], [0.14658775083366615, -0.033343889802214775], [-0.05358251753662372, 0.12898337898518966], [-0.014102337814528713, -0.020039797870532346], [0.015489050053478622, 5.363386632675037e-05], [-0.0024991913114933277, -0.0067271487015796855], [0.074962366209716, 0.003916560559757279], [-0.014528139699269287, 0.003173278215218288], [0.028266267948621075, 0.001234953992428464], [-0.1389742087221049, -0.014959920331424115], [-0.12806483373564723, 0.0009278379199936428], [0.024672357420767344, -0.00492973914992016], [-0.006448320519561299, 0.003313740705055562], [0.08454781143874607, -0.00261296488301613], [0.0654502952015808, -0.0216246823101801], [-0.01723244373813007, 0.008367383239494035], [-0.04627099711390937, 0.06933435733261963], [0.08964153716607985, -0.003344658782971648], [0.07238498238727756, -0.01879618949665271], [0.011577676206744316, -0.007952972138531151], [0.02205893778258914, 0.002822359297675121], [0.05960195031898007, -0.04450542496938476], [-0.0681478138530718, 0.047281606032188436], [0.027949341634529917, 0.05027441056555278], [-0.13387397844509766, 0.02097699913315808], [-0.07949772182172855, 0.028685662896248618], [-0.01642507801023335, -0.015438882294546251], [0.007187065246380896, 0.005117294167816971], [-0.03179495099788068, 0.01707245676963821], [-0.034985178240794335, 0.004663061938821064], [-0.10884010658722819, 0.008228190628486226], [0.0009024702099323145, 0.024306084162215694], [-0.0032930407051966143, 0.002077756285124617], [0.004359565862450762, 0.021640696118125503], [0.11124577303473573, -0.03045006588527648], [-0.027646095641423382, -0.007903973229987003], [-0.09186214234366104, -0.021450402340045475], [0.06066875279267806, 0.07642195787486128], [0.08910091008953744, 0.062431000731249214], [0.016053527196412117, -0.003691507689277619], [0.030766014685711888, -0.016523416372223456], [-0.21828164978448628, 0.07260596457779095], [-0.11531693924861887, -0.012302737526906261], [0.28043735341985293, -0.06273464604183301], [-0.05923846569871075, 0.010438349554325994], [-0.13816522855603772, -0.014164624637035722], [-0.055124614989690686, 0.008946892249806663], [-0.02888257711243106, -0.0073426190618155526], [0.020796985487428973, -0.003068935092490311], [-0.09764471669682924, 0.03159828988270695], [0.04150308208634301, -0.001123595059088681], [0.01489527213140367, 0.0012000673206244105], [0.061830609472336207, -0.021476958565118956], [0.0007340288843876527, -0.003998251170849294], [-0.11026970453677681, 0.021460089935985104], [0.0028061021474641867, 0.00023108660105410628], [0.02004606642241964, -0.017860657243660462], [0.022734513604832356, -0.03646273090401279], [-0.009011166047048092, 0.00636052482218441], [0.05396501060206656, -0.03719378378430556], [0.020468515274185407, -0.015454477381698015], [0.19794552638994786, 0.003576242267788456], [0.037052456604673004, -0.009244326349441856], [-0.06644110902485569, 0.016783804024760172], [0.0031113160138145335, 0.019978489325377026], [-0.0134970052346079, -0.007350910069066562], [0.0247824952366701, 0.03418398365487603], [0.06292240187635832, 0.006508104780871907], [0.050374924234682796, 0.0024800772674285756], [-0.0750752991086299, -0.16417822924180692], [0.05741893267181378, -0.023802453161123914], [0.008597868628016665, 0.003954604630208139], [-0.009462238949583299, -0.008389524985419661], [0.007613473702507381, -0.012731443214673248], [0.011214926862739375, -0.0008289777494914441], [0.054869840949976934, -0.014171815814550353], [-0.08892843813234869, -0.007435951231549242], [0.17090197870895169, -0.0049359132221065945], [0.03620225769294365, -0.027599050175258114], [-0.0053581750614201135, -0.007002934949737619], [0.10300972680265585, -0.034417918692753055], [-0.012543524982457775, -0.006880420227330058], [-0.20517288563954109, 0.04478682540812413], [-0.08205864045686428, 0.025049779748947402], [-0.0058717921160460936, -0.05522490494457646]];
var dataset_isomap = [[0.280880885993969, -0.03710091088915115], [-0.2476465516076022, 0.10133306053773249], [-0.46564559039309644, -0.21204219649372577], [0.03324224661760598, -0.004787628517802552], [-0.043723723047573826, 0.10201570392004833], [0.2006345204937722, -0.038243406022788], [-0.02435263135225231, 0.28900541676703445], [-0.05860879739783156, -0.02750250308742677], [-0.0527114234232338, 0.06973483222243547], [-0.4039002427914594, -0.18490985275317975], [0.09638292976163526, -0.31591432667472685], [-0.03466899536687825, 0.07974035683948959], [0.22789345441460201, -0.035494812143931666], [-0.18963826045403775, 0.07777532295174248], [-0.18414123575598332, 0.046754447285886985], [0.10396262299527939, -0.04698122187710077], [-0.18164854581306425, 0.16567525682157536], [0.008853771587234665, 0.33526676050426296], [0.2958486843562058, 0.11290379741786542], [-0.13393170277096528, 0.05371816683013356], [-0.11240945297118579, 0.08326159896828662], [-0.08892357932083006, 0.11116359250010946], [0.10048984256021393, -0.153655764121229], [-0.07594482538396842, 0.276720309721714], [-0.38915182228249473, -0.17863884866553767], [-0.3138529812014112, -0.14506518915077005], [0.45344836836432756, -0.11151688540926849], [-0.059654725504069556, 0.036566544292790916], [0.23207183739369053, -0.005821848344981248], [0.1506614718768101, -0.08268221854224915], [-0.3969293125746127, -0.18198648858215088], [-0.060375382069515475, 0.06377592167582893], [0.0692397514645117, -0.034336681290156414], [-0.20124255021361148, 0.02516607849776084], [0.06557122504467112, 0.23986956326913358], [0.12821542344027773, -0.03210250786300403], [0.30542297397628504, -0.2977100778123167], [0.18622835108582622, 0.6368841778899517], [-0.19397799939189642, 0.2513715898216342], [-0.14501660181343937, 0.03260396301082349], [0.00028811978400571, 0.09310616925256732], [0.047823144291584865, -0.3315144394386132], [0.4697372264985002, -0.5044108699220807], [-0.31116748015352264, 0.20763646665819172], [-0.23109490863359955, -0.10761791076446356], [-0.40597520279509824, -0.1859833928961937], [-0.1612276267828713, -0.09162090591944501], [0.23596880569237813, -0.102308242886083], [-0.11520043172760136, 0.027047082527343808], [0.07430043423309181, -0.19697350140487382], [-0.024070430648520328, 0.11676084262527342], [-0.06680200425120413, 0.08505337484447789], [-0.10780574034930106, 0.10658499734892368], [0.41115998654036345, -0.02695133803873448], [-0.004580992344114405, -0.18619032422098408], [0.3997250432883176, -0.042727215480790906], [-0.04544687594822034, 0.1036187211976407], [0.38575724916333426, -0.14606281481033695], [-0.07217688996535102, 0.02091105406127986], [-0.025656673062912475, 0.1243997364917343], [0.3800399640714514, 0.030160291995152386], [-0.49043322338975126, -0.22359596092709288], [-0.011598477147429797, 0.06479143522656651], [0.5116926699915125, -0.1064852775563208], [-0.06341462144949776, 0.04664274453866622], [0.3984452888040286, -0.05780469578845863], [0.16424763015319946, 0.3019184125216875], [0.25946661216189965, 0.35273202857330604], [-0.07144682175567574, 0.11685214733821048], [-0.4184821512028608, -0.18977671248366923], [0.43253661551727685, 0.12145987872855755], [-0.02774299202937388, 0.02566987870295706], [0.13924186000990002, -0.05462650304753983], [0.2674507229853731, -0.038408722071447285], [0.0005634625430859394, 0.01171618345712839], [-0.2807912048696547, 0.011991077957762282], [-0.4403967179544299, -0.20127281588878002], [-0.07259007385357413, 0.19525769740238413], [-0.21611620454593516, 0.04676380098038684], [0.1326677369116795, -0.049167753276700234], [-0.18485793686589097, 0.09761918976489771], [0.22330676048612666, -0.06396538114778419], [0.04791420696403613, -0.33269442784993625], [0.1093719498960355, -0.15933206520976165], [-0.12358123678669328, 0.025984965330248612]];

var textLegends = ["Romania", "Malta", "Kuwait", "Sweden", "United Kingdom", "Norway", "Hungary", "Canada", "France", "Polska", "Japan", "Greece", "Senegal", "Israel", "Argentina", "Morocco", "Thailanda", "Russia", "South Korea", "Cambodia", "Spain", "Albania", "Egypt", "South Africa", "Iraq", "Kenya", "An", "Switzerland", "Tunisia", "French Polynesia", "Colombia", "Luxembourg", "New Zealand", "Hong Kong", "China", "Turkey", "Philippines", "Nederland", "Lebanon", "French Guiana", "Italy", "Qatar", "Irlande", "Chile", "Martinique", "Slovakia", "Czech Republic", "Lithuania", "Mexico", "Algeria", "Denmark", "Germany", "Guadeloupe", "European Union", "United Arab Emirates", "Monaco", "Australia", "Serbia", "New Caledonia", "Austria", "Ukraine", "Burkina Faso", "Portugal", "Andorra", "Saint Pierre and Miquelon", "Finland", "Ireland", "Moldova", "Poland", "Venezuela", "Aruba", "Belgium", "Brazil", "Slovenia", "United States", "Singapore", "Taiwan", "Cuba", "Thailand", "Netherlands", "Scotland", "Indonesia", "Saudi Arabia", "Bulgaria", "India"];

var new_dataset_pca = [[0.46450587773748653, 0.7790126073592737], [-6.2165038781092266, -0.4782820085539489], [1.0822724856500756, 1.08160369449917], [0.17065183370366238, -0.5023109942780092], [1.3852846510082524, -5.874758064486429], [-0.10213463709312433, 0.320421352271464], [-0.7618371935359591, -2.2712463578591073], [1.066248592677438, 0.5177165894673621], [0.3294936093853555, 0.32477956589181994], [2.666304036134211, 2.370511399091889], [-1.0458945567795899, -3.178831364894212], [-0.007366282824411084, -0.18820840909924008], [1.1939144403791626, 1.3536222551620507], [-0.4351410548535753, -0.27135421120781245], [-3.542755756657673, -0.16376033822845457], [0.48724725895595133, 0.34550923348437274], [0.9043997836734303, 0.7361515224953807], [0.11699809232831607, -0.11499734177424209], [0.11847175583562519, 0.6230042527950775], [1.0883195219212465, 0.5909649311693587], [1.2982467776394908, 0.6973451154989146], [-1.167459618437353, 0.3717627642112257], [0.42166424104963884, 1.3718807116203648], [-2.5416237187957242, 0.226478477717049], [1.5828816776837515, -0.009730949207665004], [-0.4794501203639101, -0.2272129071395524], [0.7784126817844117, 0.9149020742504818], [1.8014370186075555, 0.12402952914653587], [1.6322983797281272, 1.366182487941934], [-0.8244392314095472, 1.212188394617182], [-0.9456683612941512, -1.3634158447858424], [-1.015571782182958, 0.230377132804651], [-1.3495394966651921, 0.5381889414744926], [1.0484809257103536, 0.03767167866895948], [0.1352589574005994, -0.21679421979997437], [-1.964932648142378, 0.47169814429450474], [-0.7880101102530807, 0.10909465760723085], [0.20348713103633037, 1.2451837584998018], [2.87038247865063, -1.4426760730046777], [-2.6849777996215556, -0.36499142506167925], [-0.7487088740877466, 1.2384666800258397], [-0.11444363516965589, -0.6133498414288713], [0.5034180203504386, 0.03421847642997579], [-1.3321668472432278, -0.3125337532021642], [0.3317750667383181, 0.410427159850496], [3.7665350529248327, 1.6871130248514445], [3.0407562345345087, -4.9737283695177155], [-2.3786797426870785, 0.95877905534013], [0.07239058593560423, 0.42575031032035326], [-0.11423182295768922, -0.14685350532919333]];
var new_dataset_mds_euclidean = [[0.04944948497223083, 0.01871298432623618], [-0.033968296591683864, -0.10920576479897509], [0.035999555559175056, -0.004595189258466211], [0.026136139453940437, 0.04243236668775622], [0.02092339291771182, 0.041060389895280255], [-0.016602863346630945, 0.0019713605179255576], [-0.02040689021072041, 0.03456343464225415], [0.032755346180436504, -0.008862414629034098], [-0.0253603750052035, 0.01633537947760563], [-0.047778001632897124, -0.12551685367724105], [0.04443436948561226, -0.05024625827831304], [-0.013568591833573968, 0.05683046692735988], [-0.009775903188107365, 0.029287331529464784], [0.017900071148073002, 0.02650010191435143], [-0.03743770443187532, -0.031049514580864288], [0.0009978591053167163, 0.005698933255550184], [0.010205920766796408, 0.014262193375935761], [0.0019717429091947697, -0.010972861249676448], [0.007731712240201597, 0.0008618922764358243], [0.047297784761344774, 0.04492791443285873], [0.03533670337102897, -0.01660890714221877], [0.001445496611079264, -0.0717186937703543], [-0.09561235584453824, 0.056247198764648725], [-0.0671019544235776, 0.03590586227674679], [0.07784573016889383, -0.05803660478965381], [0.01331611202636843, 0.025813445766917492], [-0.017235125273383552, -0.002401383373398453], [0.09775988652788495, 0.030551712836075582], [0.01125490602373774, 0.027284367415301318], [-0.05025292971702736, 0.008814037298903725], [-0.02849680638925655, 0.016913190560746832], [-0.029970359802930658, 0.023796782081555442], [-0.021859774107346824, 0.02341998346200824], [0.03622426320109305, 0.02325170900125564], [0.0030499168232603893, 0.014844206090696343], [-0.0372405453947674, 0.02176003962737075], [-0.02934198422876905, -0.08488791686448786], [-0.015551531374482935, -0.0037441731987231763], [0.06911257970639598, 0.0037420827205786877], [-0.02123951111348307, -0.025819650437550523], [-0.005258359889684424, -0.09336582381766598], [-0.05814643751763362, -0.011056543424227754], [0.015713527531802173, -0.0036942611903725713], [-0.019657471431595394, 0.038248459515203774], [-0.018364447123972734, -0.0054294586402410736], [0.11953202908455722, 0.001401192355171244], [0.04723982150562878, 0.030559912295097438], [-0.09228580177845842, -0.027679311248654], [0.006493997086995812, 0.020487063467127378], [-0.017614327517160404, 0.008405589575698503]];
var new_dataset_mds_cosine = [[-0.007080806242335661, 0.010439492813003331], [0.02888764658737545, 0.01736501956914418], [-0.00727929137872399, 0.011073991396913115], [0.011473237726957939, -0.004237740024087206], [0.005959968597638679, -0.004705925315370882], [0.002348504339549042, 0.002422618357614743], [0.0057933082941365064, 0.024256569568059258], [0.00219648096102847, -0.003412555707405033], [0.007060866378432176, 0.01891275322036044], [-0.10680119439830428, -0.036530431108450966], [-0.039517632283077635, -0.025232400620977084], [0.04207156142487044, -0.10912696088542326], [0.023517203738933016, 0.03495858850795707], [0.013645839770982653, -0.02329534683179121], [0.01194734981638137, 0.027074104439392337], [0.0015869430870642666, -0.006701912271620757], [-0.0014349302521663354, 0.00959725652750557], [0.0014330876285661917, -0.006909560064071495], [-0.0003511580071028333, -0.001713359666403505], [0.013290561817916227, -0.013078931116402829], [-0.007392492383593114, 0.0014266996288051187], [-0.01961635965194069, -0.04653506879449843], [-0.013271406044131873, 0.09038397125703637], [-0.017530782872665233, -0.04304888884319178], [-0.028943534333285108, -0.039104276064380585], [0.0028537647832588844, 0.00022294647485962375], [0.006191844579776296, -0.008827403635325396], [-0.014047430364195193, -0.03978860792599969], [0.021676438508710167, 0.03877610202998978], [0.01125539641989693, 0.020485386384804623], [0.006370945904173224, 0.018180616890276797], [0.006212951542117082, 0.01133525832821111], [0.006425021041499851, 0.023324678235288495], [0.020237945131326655, -0.024054446564521607], [0.004552445242785604, -0.006182220976590153], [-0.0002640145165106065, 0.02672382654117734], [-0.02304873144140048, -0.05767807976272253], [-0.0038736055518832986, 0.008618352478378999], [-0.006232010583621624, -0.0071661851419585875], [0.0008386868375531126, 0.0186533335010846], [-0.00550898419412015, -0.04688083316120383], [-0.03401718537617734, 0.013780826447944235], [-0.0010319485851260869, -0.007026912581319107], [0.009532735117334814, 0.021170589149812277], [-0.0016594201232003674, 0.006377217968315355], [0.05983586302710141, 0.07595033731574062], [-0.01087217978457368, 0.014654349579417482], [0.008925088429474379, 0.019660127585881], [0.010417721662729298, -0.00936057623686469], [0.003235689970565439, 0.004773609103606728]];
var new_dataset_mds_correlation = [[-0.01896240227388529, 0.013357248927122534], [0.05398134999365775, 0.03692457138127575], [-0.018547454496600023, 0.0177836546140018], [0.025333166087366216, -0.005942536755258935], [0.01086815280060514, -0.0066573100230117735], [0.0030490642937731193, 0.006774962015432947], [0.003057327401358542, 0.04603235017220718], [0.00581490087153514, -0.007114084642641735], [0.007473777891205434, 0.039972043359713966], [-0.18880867748487934, -0.0745073683441192], [-0.07269213942147536, -0.04948732664596765], [0.10084981290671398, -0.21237671843151096], [0.03614454318476666, 0.07455618142096583], [0.03798910377748631, -0.047871123630041625], [0.013450482447708358, 0.04101257876256931], [0.004032358084490662, -0.012073514908016718], [-0.008581451351090338, 0.022230496672938388], [0.0041269363963379255, -0.013362426749489467], [-0.0008649258465662879, -0.0035469176684767324], [0.03346748797252254, -0.024675216812063108], [-0.015617881128438975, 0.003911311665685341], [-0.025151444637257457, -0.08573190947235487], [-0.04229061381957223, 0.18031896034137718], [-0.017055266743517025, -0.07970877324365785], [-0.034069102229054515, -0.06615993240615593], [0.005148263957124652, 0.0004991091806598308], [0.016472473334067907, -0.015274239192464203], [-0.016867265606256687, -0.0817712965729023], [0.030586655341820982, 0.09483168170622863], [0.015780584128437844, 0.0466695120206136], [0.006301410530961414, 0.037566321151987186], [0.008090872516755627, 0.027084841762558355], [0.005360310140402367, 0.038642156260201364], [0.056524748686008576, -0.050183302668930604], [0.010648300559691492, -0.011125875396211628], [-0.007169151740430286, 0.04312506642405385], [-0.023292543274076455, -0.1020692326160182], [-0.011292573264715371, 0.01806774416748397], [-0.014634886486862874, -0.013245256971448299], [-0.002710758340011717, 0.027654359065311516], [-0.0024615387618876416, -0.08804856675737459], [-0.05489960556072482, 0.009987522999129774], [-0.0011426241660226378, -0.014039510308140353], [0.010788335674266614, 0.04503038727680462], [-0.0061793532031246354, 0.013187727269352426], [0.06737734451482182, 0.11633302667653621], [-0.03055132452557008, 0.030748900694347825], [0.011290707854227254, 0.03810535841806158], [0.025715815046321398, -0.017336811021209212], [0.0041186979675841935, 0.011901176830844911]];
var new_dataset_isomap = [[0.06947000327506862, 0.027002179569858828], [-0.5576590696899323, -0.154885417794404], [0.13387595413899658, -0.015530645817414736], [0.04329325638637852, 0.011007869178756438], [0.0262988821188184, 0.02493552297702158], [-0.00042343074122828934, -0.015156231275588765], [-0.16470325305861164, -0.07518528754744884], [0.10613184988141867, -0.009641416682211648], [0.025040927862190806, -0.04295529930777022], [0.2684170549042967, -0.03897827685436597], [-0.06629832433829407, 0.2067105440486542], [0.10775765800822562, -0.05453915442696532], [0.1233468440452686, -0.08550289476613344], [0.025774083821590795, 0.007555298868335642], [-0.3541478238307446, -0.1403421990547721], [0.048470179390063414, 0.0008400899679356001], [0.10818184126150908, -0.020081299789095276], [0.0520539099425825, 0.02633996004435764], [0.021852769457233946, 0.014336114667590924], [0.08796042086581131, -0.01954567579364953], [0.1663084388708114, -0.02704706413044846], [0.019730654429882685, 0.2769737221936874], [0.1229696605208482, -0.04541545886554722], [-0.23026505891820595, 0.3006510626030192], [0.1637377778043434, -0.01690791731688512], [-0.014777046342318278, 0.025473809510191976], [0.04422003555409042, 0.01795380031644018], [0.1882273163691296, -0.0222873792876278], [0.19170794061180665, -0.09666695183484807], [-0.13185151093071729, -0.06422864997485894], [-0.14355572074280437, -0.07330996893214142], [-0.08933454870120089, -0.060917107997370656], [-0.20449754127933384, -0.08402067693966998], [0.07812145087605335, -0.013586659410335857], [0.0020923395802338422, -0.010622367979613275], [-0.2527402059878375, -0.08287772786481602], [-0.011305364561287628, 0.3170628136298555], [0.0371274174597773, 0.0058575873386133345], [0.22022138166042424, -0.06082969801295825], [-0.2753117105129502, -0.06152548296774187], [0.021286125748735132, 0.28548915298904143], [-0.29348411257595414, 0.11168972625914853], [0.08267315225242293, 0.007298635771043051], [-0.05817803652659311, -0.043725405327591026], [0.03451349451160796, -0.00380428281445505], [0.33987638594015596, -0.14641084864223147], [0.17909074244407847, -0.02574753887255947], [-0.29774572198942983, -0.031084502252276963], [0.041323283954379224, 0.006700014563635939], [-0.03487475322078936, -0.030518415963390742]];
var new_textLegends = ["Albania", "Andorra", "Argentina", "Australia", "Austria", "Belgium", "Brazil", "Cambodia", "Canada", "Chile", "China", "Cuba", "Czech Republic", "Denmark", "Finland", "France", "French Guiana", "Germany", "Greece", "Guadeloupe", "Hong Kong", "Hungary", "India", "Ireland", "Israel", "Italy", "Luxembourg", "Malta", "Martinique", "Morocco", "Netherlands", "New Zealand", "Norway", "Poland", "Portugal", "Romania", "Russia", "Saint Pierre and Miquelon", "Singapore", "Slovenia", "South Africa", "South Korea", "Spain", "Sweden", "Switzerland", "Taiwan", "Thailand", "Tunisia", "United Kingdom", "United States"];



var width = 1200;
var height = 800;
var axisSize = 50;
var barPadding = 10;

function clearSvg() {
    d3.select("#chart")
        .selectAll("*").remove();
}

function makeSvg() {
    clearSvg();
    var svg = d3.select("#chart")
        .append("svg")
        .attr("width", width + 2 * axisSize)
        .attr("height", height + 2 * axisSize);
    return svg;
}

var minX;
var maxX;
var minY;
var maxY;

var scaleX;
var scaleY;

function makeDotGraph(dataset) {
    minX = d3.min(dataset, function(d) { return d[0]; });
    maxX = d3.max(dataset, function(d) { return d[0]; });
    minY = d3.min(dataset, function(d) { return d[1]; });
    maxY = d3.max(dataset, function(d) { return d[1]; });

    var color = d3.scale.category20();

    scaleX = d3.scale.linear()
        .range([0, width])
        .domain([minX, maxX]);
    scaleY = d3.scale.linear()
        .range([height, 0])
        .domain([minY, maxY]);

    var svg = makeSvg();
    makeLines(svg, dataset);

    for (i = 0; i < dataset.length; i++) {
        svg.append("circle")
            .attr("id", "dot" + i)
            .attr("cx", function() {
                if (scaleX(dataset[i][0]) > width / 2)
                    return axisSize;
                else
                    return axisSize + width;
            })
            .attr("cy", function() {
                if (scaleY(dataset[i][1]) > height / 2)
                    return axisSize;
                else
                    return axisSize + height;
            })
            .attr("r", 10)
            .attr("fill", function() {
                return color(i);
            })
            .attr("opacity", "1.0")
            .transition()
            .delay(function() {
                return i * 5;
            })
            .duration(500)
            .attr("cx", function() {
                return scaleX(dataset[i][0]) + axisSize;
            })
            .attr("cy", function() {
                return scaleY(dataset[i][1]) + axisSize;
            });
    }

    makeLabels(svg, dataset);

    return svg;
}

function makeLabels(svg, dataset) {
    for (i = 0; i < dataset.length; i++) {
        svg.append("text")
            .attr("x", function() {
                return scaleX(dataset[i][0]) + axisSize + 10;
            })
            .attr("y", function() {
                return scaleY(dataset[i][1]) + axisSize + 5;
            })
            .attr("font-family", "Verdana")
            .attr("font-size", "12px")
            .attr("stroke", "white")
            .attr("stroke-width", "2.3px")
            .attr("opacity", "0.5")
            .text(new_textLegends[i]);
        svg.append("text")
            .attr("x", function() {
                return scaleX(dataset[i][0]) + axisSize + 10;
            })
            .attr("y", function() {
                return scaleY(dataset[i][1]) + axisSize + 5;
            })
            .attr("font-family", "Verdana")
            .attr("font-size", "12px")
            .text(new_textLegends[i]);
    }
}

function makeLines(svg, dataset) {


    var cSet = new Set();
    cSet.add(0);

    while (cSet.size != dataset.length) {
        k1 = 0;
        k2 = 0;
        d = Number.MAX_VALUE;
        for (let i of cSet.keys()) {
            console.log(i);
            for (j = 0; j < dataset.length; j++) {
                if (cSet.has(j) == false &&
                    Math.pow(dataset[i][0] - dataset[j][0], 2) + Math.pow(dataset[i][1] - dataset[j][1], 2) < d) {
                    d = Math.pow(dataset[i][0] - dataset[j][0], 2) + Math.pow(dataset[i][1] - dataset[j][1], 2);
                    k1 = i;
                    k2 = j;
                }
            }
        }

        x1 = scaleX(dataset[k1][0]) + axisSize;
        y1 = scaleY(dataset[k1][1]) + axisSize;
        x2 = scaleX(dataset[k2][0]) + axisSize;
        y2 = scaleY(dataset[k2][1]) + axisSize;
        svg.append("path")
            .attr("stroke", "#ffd800")
            .attr("stroke-width", "5px")
            .attr("fill", "none")
            .attr("d", function() {
                return "M" + x1 + "," + y1 + "L" + x2 + "," + y2;
            })
            .attr("opacity", "0.0")
            .transition()
            .delay(1000)
            .attr("opacity", "1.0")
        cSet.add(k2);
    }
}

makeDotGraph(new_dataset_pca);