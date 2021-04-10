quests[++questIndexBuilder] = { //
		name : "Fashion",
		hoverover : "Quick fashion quiz",
		tags : "2021-4-10",
		//splash : {splashType : splashTypeText , splashText : "Test github" },
		questInfo: new Array()
	};
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Is this the best shirt around at the moment?",
	image : "https://m.media-amazon.com/images/I/61HoppYcR1L._AC_UL1000_.jpg",
	answer : "Yes"
}) ;

quests[++questIndexBuilder] = { //
		name : "Phil",
		hoverover : "Celebrate the life of Prince Philip",
		tags : "2021-4-10,InnerWheel,surfers",
		splash : {splashType : splashTypePictureAndText , splashText : "How much do you know about Prince Philip?" , splashImage : "https://media3.s-nbcnews.com/i/newscms/2021_14/3450776/210217-prince-philip-ew-337p_6a9135d14650a6f366ada2635850c39d.jpg"},
		questInfo: new Array()
	};
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePictureAnswer, 	
	question : "Which of these surnames did Prince Philip never use?  " + Table4ColumnStart + "Saxe-Coburg-Gotha</td><td>Mountbatten-Windsor</td><td>Mountbatten</td><td>Schleswig-Holstein-Sonderburg-Glucksburg" + Table4ColumnEnd,
	answer : "Saxe-Coburg-Gotha - although his Great-Grandmother was Alice Saxe-Coburg-Gotha (Queen Victoria's daughter)"	,
	answerimage : "https://cdn.images.express.co.uk/img/dynamic/106/590x/secondary/Prince-Philip-family-tree-1908624.jpg?r=1618004245639"});

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePictureAnswer, 	
	question : "Before his marriage, what was Prince Philip's title?  Prince of: " + Table4ColumnStart + "Greece and Turkey</td><td>Greece and Denmark</td><td>Greece and Albania</td><td>Greece" + Table4ColumnEnd,
	answer : "Greece and Denmark - his Great Grandfather was the 'throw-away' Prince William in Denmark who was offered and accepted the title of King George 1st - King of the Hellenes at the age of 17 in 1863"	,
	answerimage : "https://cdn.images.express.co.uk/img/dynamic/106/590x/secondary/Prince-Philip-family-tree-1908624.jpg?r=1618004245639"});

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Following Prince Philip's carousing at The Thursday Club in Soho, what nickname did Private Eye give him?"+ Table4ColumnStart + "Little Philip</td><td>The Naked Waiter</td><td>The Man in the Iron Mask</td><td>Murgatroyd and Winterbotham" + Table4ColumnEnd,
	image : "https://d2zfp6uemhh7c1.cloudfront.net/wp-content/uploads/2019/09/06121619/oAD77Vi.jpg",
	answer : "The Naked Waiter."}) ;

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Where was Prince Philip born?"+ Table4ColumnStart + "Crete</td><td>Athens</td><td>Corfu</td><td>Ibeza" + Table4ColumnEnd,
	image : "https://d2zfp6uemhh7c1.cloudfront.net/wp-content/uploads/2019/09/06121608/44S3HtI.jpg",
	answer : "Corfu."}) ;
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "How many children, grandchildren and great-grand children do the Queen & Prince Philip have?",
	image : "https://i.guim.co.uk/img/media/aa6c3f0e6ecb6dc1dbe3895b552eaa7db6114dd3/168_111_4427_4321/master/4427.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=a1d6f2b594c57ee0d0b994b297533595",
	answer : "22.  4 children, 8 grandchildren and 10 great-grandchildren."}) ;
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Was Prince Philip awarded the Greek War Cross of Valour for his bravery during WII?",
	image : "https://www.identifymedals.com/wp-content/uploads/2019/04/Military-Medals_Greece_Cross-of-Valour.jpg",
	answer : "True, he was."}) ;

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "He once said dontopedalogy was 'a science which I have practised for a good many years'. How did he define dontopedalogy?"+ Table4ColumnStart + "The art of remembering people's names</td><td>The skill of maintaining a stiff upper lip</td><td>The science of opening your mouth and putting your foot in it</td><td>The skill of playing second fiddle" + Table4ColumnEnd,
	image : "https://c.files.bbci.co.uk/12B42/production/_95901667_gettyimages-185200977.jpg",
	answer : "The science of opening your mouth and putting your foot in it"}) ;

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "At the 1969 royal variety performance, Prince Philip asked the singer Tom Jones whether he gargled with?"+ Table4ColumnStart + "Pebbles</td><td>Diamonds</td><td>Women's pants</td><td>Coal" + Table4ColumnEnd,
	image : "https://cdn.images.express.co.uk/img/dynamic/1/590x/secondary/Prince-Philip-2994522.jpg?r=1617979261937",
	answer : "Pebbles"}) ;
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "True or False - on seeing plans for the Duke and Duchess of York's house at Sunninghill Park in 1988 Prince Philip said 'It looks like a tart's bedroom' ?",
	image : "https://i.guim.co.uk/img/media/82aeb2ea75aa29c01fb47dc127eef4f9ce5172c4/0_1505_2834_1701/master/2834.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=89d177b921f47f740009bf7ec74b8ade",
	answer : "True"}) ;

quests[++questIndexBuilder] = { //
		name : "Royal Movies",
		hoverover : "Movies with some royal connection",
		tags : "2021-4-10,InnerWheel,surfers,movies",
		questInfo: new Array()
	};
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,	question : "What movie", // Cleopatra
	image : "https://lh3.googleusercontent.com/pw/ACtC-3fzlIIgfkqXQkb_6sjhzsGZw48FYUFNrhPPM6p-wiaZrSLC9WaXCSMRgmg2tAIUqcre34JKgKm9YX9iMRt8haEcX3xDNzW7FmdajvQZCgY6_Psj4o-cawhDHfKf6n_aNn1Htht-XkMcsbpW0VaE5dxVww=w256-h340-no?authuser=0",
	answerimage : "https://lh3.googleusercontent.com/pw/ACtC-3fEoZmLRmovtSvERpPf8UzgLGM7P9O6ADmAlSoOjCwbIf5iBNi-SNk_G6CQj2bltqJvh7-9Q8pkc6HPNYcbRfaC6ejl3aILSK78Cac1EgFY7cmZaxh1OengQEXFkJfAXSTblBpHtRYaI9Qk2V4G5Q8uUg=w256-h340-no?authuser=0"}) ;
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,	question : "What movie", // kings speech
	image : "https://lh3.googleusercontent.com/pw/ACtC-3ep5PJYY8M8xnp47O1LnS7p-WvhHigVIUVBQ5F0TERRJyJJJehccL_7I4OwaI7hfl-Ni3pTXSzhM9nt46Fd1v34GYha3468bjSa3TmDP829_VKZDNG6II03CMc2TfnVEPBsDnoVFHkpsIgp6uNXkABmwg=w256-h340-no?authuser=0",
	answerimage : "https://lh3.googleusercontent.com/pw/ACtC-3fNQVJO022Ie8VXsDcoIAyAYHVW6SwZw0P64TtiVLLCecoLofIqaGdQ0kQPoZZVEcSOCUuqgnDm9R4TVY-rs8YhK5VO3qzoZ0qSpi7VRoyJ8cuGuWikEAbUsXFJl9l1DWeOveSvYZzIc_BSS50GfwAseg=w256-h340-no?authuser=0"}) ;
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,	question : "What movie", // The Queen
	image : "https://lh3.googleusercontent.com/pw/ACtC-3eXFyLNzfID9xaS7Z38kZx9vVFdY5ryQxi9MPHbh2shpYtqGzyBqONJTJJY0S_XlPYfjKBFH5F3P-suo48RR6E0xCgiLKlJg2igNKiAw_Kz729Bk1O62P2qS7a9Kih9vxN_MeWetNaW8elejcTG3_VQrg=w256-h340-no?authuser=0",
	answerimage : "https://lh3.googleusercontent.com/pw/ACtC-3d0RWq2utf9HIrOOrCfR20fLy0U5Dwvsz9g9OpVXP7IO8A4vIV7vpydWzOkOrDJoLG6IEu2CEyr4Dd1Y4Yliz1VPQFSbCE1HmtbXPb9SWENlcDa_5GuZOt1AMact76OP-NasTXXakbAyurNVVEIbeCAqA=w256-h340-no?authuser=0"}) ;
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,	question : "What movie", // Victoria and abdul
	image : "https://lh3.googleusercontent.com/pw/ACtC-3eIqwAA51Xmn7iQkMH66GAZosEHnnL7cAUBjr0dhA_lzjFBRh6X1k3sB7Ux_TyYq4nuHuQhztMyYQfx0dw0HR4PMMmDP5c1K6sYWb2qXgumt5igTQDPDzxUWgiyAkr4gq4RDGEvWpP6AdEXfjIZkmAJjw=w256-h340-no?authuser=0",
	answerimage : "https://lh3.googleusercontent.com/pw/ACtC-3eKwT4ubdGjkQ6Gr7LUbpIHiP4cnp2n6whnJ7AgOVqiC35SeVSbxPnXYsWQeLzwizAt8TugJWiVuYhlmAv6uOYNxxiJmd4dD_l68JpZpfLg7vv2knCdqDUy1bBwOh2VpyRQQZv3BXlYenJ85h1l5IbszA=w256-h340-no?authuser=0"}) ;
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,	question : "What movie", //Coming to America
	image : "https://lh3.googleusercontent.com/pw/ACtC-3cvI3B81JV6OGV6qlQJQXucMPveY-PA236MEvNR2O-CAv0nTVGFr2iPecgzSkuAwz67vbgxthkTqTV9RGoWuHcCi3dgHpiLWbg4L6wNwaI92ZkaFDf6pkrzDtsDQKc0FxzqvoWmEEwvUFfOpxf-yfoYKw=w256-h340-no?authuser=0",
	answerimage : "https://lh3.googleusercontent.com/pw/ACtC-3dXGd1vvkpdcK5wuWIeDbDfPMElDcFbQB3bmd_31fxWb4Nv7cPXeWTdv4G3_V-Wbu4daOXPOBk0y5L1ejSkzZzr93-tOICwggacen5AyopYT_nPCOoID12DXDIado8t9r-JZv7e0c26T9EMgnHy2hvlxQ=w256-h340-no?authuser=0"}) ;
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,	question : "What movie", // Elizabeth
	image : "https://lh3.googleusercontent.com/pw/ACtC-3fERro-zEwtVXAO5zvPh1KfcM8zVDp9vQUWBNhMwtb6WxYI5-9dMMaXJIDpbg5DlwZzbptMeySRvd4yZ0EDae-48I0CSiBYKDwAfA0xni2a6GTwiTuDCIp6b6Ee59pf2hVYTWmUx99sR7mdBh1xXaZUcw=w256-h340-no?authuser=0",
	answerimage : "https://lh3.googleusercontent.com/pw/ACtC-3fYpXkkkEsC6dd-Px35weBBf1X0ANUIa-2PF2TEpt9SdsXGcZInJ6fg3ovY4Nmz91gmSD9AlOvDeZazGpRSugwpcv8og5dkoWDk0dUaLLbgIv_gOdTzGJB6bCvPKJQL0Zc2nhfhpesN5k4HzETiKtygUg=w256-h340-no?authuser=0"}) ;
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,	question : "What movie", // Young Victoria
	image : "https://lh3.googleusercontent.com/pw/ACtC-3cJNx2EMVXXoM5P4klZlKKbdoCtut84ktMD9GWUhx2Q9RNhBiyIJep3WfEicrQSPI7hJV1lxkIj1tgCqb7dv17KZOz5jB5ZNXVpdxkww7oXtrF3kvkVN1u2vUhIwU-0d8c77ccGp5OItIiyz7Bpj5VMkw=w256-h340-no?authuser=0",
	answerimage : "https://lh3.googleusercontent.com/pw/ACtC-3cybZNcHvZEH05A2AXpoz2BYaGFj3eqoSF0QvoOedSCXZpB5Fw4-CJeGa9ilV4bIC2USt1r2MTl49cp4nUhvisLOpqi4pgMK7Ix4XksGyF86qjINWukQYijfq0MEnXJzxw3Ew89vWupG5_laPm5Dp7cwg=w256-h340-no?authuser=0"}) ;
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,	question : "What movie", // Henry V
	image : "https://lh3.googleusercontent.com/pw/ACtC-3d_2MWF1C7iDoZJfBQiczSdBWCz0StCS-7N1uDKIgLcAeiaBzlMCoGN4JxqNYUj7jqeo4YVOe7fb6G1fqLCJv2fLetcrX3ClIp6QCNwtR_LkK0N3jYc1bV-ntUrs8cb0TxlZPI8skv-up5dHfQ72YmtxQ=w256-h340-no?authuser=0",
	answerimage : "https://lh3.googleusercontent.com/pw/ACtC-3czLxvvy-R9Oz7alZIx2PimBCiDcyr3cIX8JjkGW2OPlz7F79mtAnmhBsSjD367fyi_6hq09Z6fbyVKPrYBC9A8psgNTtJwyTzc_L7O5Ympr27A93eQ3gO34aney5yJTYYzGFItB15I6K9O8tfsRvoZRQ=w256-h340-no?authuser=0"}) ;
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,	question : "What movie", // Madness of King George
	image : "https://lh3.googleusercontent.com/pw/ACtC-3fL-7VicVXlvVXHGQaZwMl1Xd3uDFXcR-m1ITcJIoo6KkoEyV7hu4rYXwZhXyN6ciRE8G7JHNpozNn7sfEx1tuoiCC8GSqGjKESsssxZaW3Sc9giy1B7MrrQqRbVavunBsNesNlC2iwdQYAHZzxjB4IzA=w183-h275-no?authuser=0",
	answerimage : "https://lh3.googleusercontent.com/pw/ACtC-3edACTsQF3LxkVPetsIp32VX2eUW-kmfcZUtI12RZDBrRPNk_nn-3wteuYKIyjv48FdEGPLjAEv5RPIwTRd9unzjS3Ga72QndhemVoO4DgTfqxCFZD-3lk8N0CBv8NlvVCZxpns7C0jlgflvscVAXYb-w=w183-h275-no?authuser=0"}) ;
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,	question : "What movie", // Mrs Brown
	image : "https://lh3.googleusercontent.com/pw/ACtC-3fZ6GSPLYZlh3ukjq261f98W14THC-24I-f0sTT3rMQBiS1UlNFsAIz5jrXplGUz8OVjISPFTMGAQlqR2sgmy7C-YxnUtz2ksr3AThpRzRHZl3qq_ZIPxbUwJL3ara_NeX1NkH4QHw0ez78UUU10ST9NQ=w163-h310-no?authuser=0",
	answerimage : "https://lh3.googleusercontent.com/pw/ACtC-3e56jE0GYRdGMGPa3pDR4wdeA_FWq2lj2KNyOSxzmINbefx506R9hI0NkJ7Pj7xLiArXu_I5uAr3g7pzYF3_cOEe6theXFBlQRdOnMCGmfYkuBj2qv0mKTUtzTVWP8qcGubjbaAiD9Zh1JEnd9fnZUEKg=w163-h310-no?authuser=0"}) ;
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,	question : "What movie", // Richard III
	image : "https://lh3.googleusercontent.com/pw/ACtC-3ccMFfG0M-CNPPTYAABDy6moKyFwcuwxFcM-hTqnraCHsmzrDjRTe4hWcKEduE9sgSVg7Ls0nzkD4xrpNN-oo-w1hyVLEXKbsLhEubSyE9Zml_WrkoN9aZNKU4DPbt2k8znBvgzyL0TaDpF_elnzg4sFA=w566-h800-no?authuser=0",
	answerimage : "https://lh3.googleusercontent.com/pw/ACtC-3coVpHNLkSrOaePLzJuvO_I3GdR_FMAsjuXSorPMIxrDw4wi0n_ECK5GZo532EJDvackIYEtWMU9YRUaZS--ZHjHJZ0dfLYesUL_3pG3jgUkqvFEmuDym5CcJLZ1_637RcQ5oghMH23UmwQi8LlGDh_tw=w566-h800-no?authuser=0"}) ;


quests[++questIndexBuilder] = { //
		name : "Royal sing-a-long",
		hoverover : "Sing-a-long to the royals",
		tags : "music,2021-4-10,InnerWheel",
		questInfo: new Array()
	};

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeSpotify,
	question : "",
	spotify : '<iframe src="https://open.spotify.com/embed/playlist/7LEIxcT8KCfxiXHm0OMxmb" width="500" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
	answer : ""}) ;



/*
  addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "",
	answer : ""} );

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "?",
	image : "",
	answer : ""}) ;
 
 
 
 
quests[++questIndexBuilder] = { //
		name : "Test new quiz builder",
		hoverover : "Try out the quicker builder",
		tags : "test",
		splash : {splashType : splashTypeText / splashTypePictureAndText , splashText : "Test Text", splashImage : "" },
		questInfo: new Array()
	};

quests[++questIndexBuilder] = {  //
		name : "Test new month-based quiz builder",
		hoverover : "Try out the quicker builder",
		tags : "test,year,saturday",
		questInfo: new Array()
	};
	
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText, 	
	question : "?  " + Table4ColumnStart + "?</td><td>?</td><td>?</td><td>?" + Table4ColumnEnd,
	answer : "?"	});

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "",
	answer : ""    } );

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "What movie is being described",
	image : "https://lh3.googleusercontent.com/Ftq4kmwf2ZMgm2Au1KHEirPcTYyA2MfoTe5ti0A2v6cPUAyexLjvfFtcovCeJDtF8oX8j6EXHIV9HMrZj41byAmnurxMK4mfRcSw695znXl608VK__rflaCyjX_fcVMXtxvgNfEU0NU=w1920-h1080",
	answer : "Groundhog Day"
}) ;

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeSpotify,
	question : 'Name the products these songs were used to advertise',
	spotify : '<iframe src="https://open.spotify.com/embed/playlist/7BQJ0lhgEX1NCPKBt6TlYm" width="500" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
	answer : "Cadbury, Levi's,Muller Light, Galaxy, Wrigleys, Guinness, Vauxhall, Nike, Levi's, Barclaycard,Quality Street  "
}) ;

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeSpotify,
	question : '',
	spotify : '<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRm7q0c3dgVMI_pieDAUPcSHXQ8N3I20dHQytGEjaKsq2Pj-l2xHcRpud-McY2UhU_qrBcLyVRidpOJ/embed?start=false&loop=false&delayms=10000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>',
	answer : "Click the presentation to move it along"
} );

addQuest(quests[questIndexBuilder],{		type : quizQuestionTypeText,
		question : "In August, who said (during a voice check for a radio broadcast) 'My fellow Americans, I'm pleased to tell you today that I've signed legislation that will outlaw Russia forever. We begin bombing in five minutes'?",
		answer : "POTUS Ronald Reagan  <iframe width='560' height='315' src='https://www.youtube.com/embed/bBow1ToJBFE' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
}) ;

addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,
		question : "What movie", //Brigadoon
		image : "",
		answerimage : ""
}) ;

addQuest(quests[questIndexBuilder],{		type : quizQuestionTypePictureAnswer,
		question : "Which actor has died most times on the big-screen (ie in films)? <BR/> (a) Danny Trejo, <BR/> (II) Vincent Price, <BR/> (3) Christopher Lee, <BR/> (Ivy) Dennis Hopper.",
		answerimage : "https://lh3.googleusercontent.com/X8Cwofy-XdhCTIt7Ict9vOQ-Du4KGOMC8wwGSXAP_y9RdlJOiP8RTp3Nnmj5rqik9AV-epVXWxb6hDPjwtbBuHqOur_YQKJrM5P1EoCO3U9U8yFzGXGHvX7El6AE_lK5SsiOB2DR-Dg=w1920-h1080"
	} ); 
	
addQuest(quests[questIndexBuilder],{		type : quizQuestionTypePictureAnswer,
	question : "Which actor has died most times on the big-screen (ie in films)? <BR/> (a) Danny Trejo, <BR/> (II) Vincent Price, <BR/> (3) Christopher Lee, <BR/> (Ivy) Dennis Hopper.",
	answerimage : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Danny_Trejo_by_Gage_Skidmore.jpg/220px-Danny_Trejo_by_Gage_Skidmore.jpg"
} ); 

questIndexBuilder++;

addQuest(quests[questIndexBuilder],{		type : quizQuestionTypeText,
	question : "who was born?",
	answer : "Ted"
} ); 

questIndexBuilder++;
*/
