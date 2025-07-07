const lessonContent = `
 <div class="container">
      <h2>English Practice Test – 1</h2>
      <div
        id="countdown-timer"
        style="
          position: fixed;
          top: 16px;
          right: 16px;
          background: #fff3cd;
          border: 2px solid #ffa726;
          padding: 8px 12px;
          font-weight: bold;
          font-size: 16px;
          color: #d84315;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          z-index: 9999;
        "
      ></div>
      <button
        onclick="startOneMinuteChallenge()"
        style="margin: 12px 0; padding: 8px 16px"
      >
        🕐 Thử sức trong 5 phút
      </button>

      <!-- PART I -->
      <h3>I. Choose the correct English translation</h3>
      <div id="part-I">
        <div class="question-block" data-correct="C">
          <p>1. Cô ấy thích xem phim hành động vì chúng đầy sự hồi hộp.</p>
          <div class="option">
            <label
              ><input name="q1" type="radio" value="A" /> She doesn't like
              horror films because they are too exciting for her.
            </label>
          </div>
          <div class="option">
            <label
              ><input name="q1" type="radio" value="B" /> She loves watching
              animated films about exciting animals in action.
            </label>
          </div>
          <div class="option">
            <label
              ><input name="q1" type="radio" value="C" /> She enjoys watching
              action films because they are full of excitement.</label
            >
          </div>
        </div>
        <div class="question-block" data-correct="B">
          <p>
            2. Melanie thích hài lãng mạn nhưng bạn cô ấy lại thích phim giả
            tưởng.
          </p>
          <div class="option">
            <label
              ><input name="q2" type="radio" value="A" /> Melanie likes romantic
              films, but her friend likes action films.</label
            >
          </div>
          <div class="option">
            <label
              ><input name="q2" type="radio" value="B" /> Melanie likes romantic
              comedy films, but her friend likes fantasy films.
            </label>
          </div>
          <div class="option">
            <label
              ><input name="q2" type="radio" value="C" /> Melanie likes comedy
              shows, but her friend likes animation.</label
            >
          </div>
        </div>
        <div class="question-block" data-correct="B">
          <p>3. Tôi thích nhất thể loại phim hài vì tôi thích cười.</p>
          <div class="option">
            <label
              ><input name="q3" type="radio" value="A" /> I enjoy watching
              action films because they are full of excitement.
            </label>
          </div>
          <div class="option">
            <label
              ><input name="q3" type="radio" value="B" /> My favorite type of
              film is comedy because I love laughing.
            </label>
          </div>
          <div class="option">
            <label
              ><input name="q3" type="radio" value="C" />I don't like horror
              films because I love laughing.
            </label>
          </div>
        </div>
        <div class="question-block" data-correct="C">
          <p>4. Em trai tôi yêu thích phim tài liệu về các loài động vật.</p>
          <div class="option">
            <label
              ><input name="q4" type="radio" value="A" /> My little brother
              loves action films about animals.
            </label>
          </div>
          <div class="option">
            <label
              ><input name="q4" type="radio" value="B" /> My little brother
              loves animations about animals.
            </label>
          </div>
          <div class="option">
            <label
              ><input name="q4" type="radio" value="C" /> My little brother
              loves documentaries about animals.
            </label>
          </div>
        </div>
        <div class="question-block" data-correct="C">
          <p>5. Tôi thích xem phim khoa học viễn tưởng ở rạp chiếu phim.</p>
          <div class="option">
            <label
              ><input name="q5" type="radio" value="A" /> I enjoy watching
              science-fiction films at home.
            </label>
          </div>
          <div class="option">
            <label
              ><input name="q5" type="radio" value="B" /> I enjoy watching
              action films at the cinema.
            </label>
          </div>
          <div class="option">
            <label
              ><input name="q5" type="radio" value="C" /> I enjoy watching
              science-fiction films at the cinema.</label
            >
          </div>
        </div>
      </div>

      <button onclick="submitAnswers('q1', 5, 'result-I')">
        Submit Part I
      </button>
      <div class="result" id="result-I"></div>
      <button onclick="resetPart('q1', 5, 'result-I')">Reset Part I</button>
      <!-- PART II -->
      <h3>II. Choose the best option A, B or C to complete the sentences</h3>
      <div id="part-II">
        <div class="question-block" data-correct="A">
          <p>
            6. A: .............to learn how to make pastries next month? B: Yes,
            she..............
          </p>
          <div class="option">
            <label
              ><input name="q6" type="radio" value="A" /> Is Ella going / is
            </label>
          </div>
          <div class="option">
            <label
              ><input name="q6" type="radio" value="B" /> Is Ella going / isn't
            </label>
          </div>
          <div class="option">
            <label
              ><input name="q6" type="radio" value="C" /> Is Ella going to /
              is</label
            >
          </div>
        </div>
        <div class="question-block" data-correct="C">
          <p>
            7. A: What................ to cook for dinner tonight? B:
            I............. make chicken satay.
          </p>
          <div class="option">
            <label
              ><input name="q7" type="radio" value="A" /> are you going to / am
              going</label
            >
          </div>
          <div class="option">
            <label
              ><input name="q7" type="radio" value="B" /> are you going / be
              going to
            </label>
          </div>
          <div class="option">
            <label
              ><input name="q7" type="radio" value="C" /> are you going / am
              going to
            </label>
          </div>
        </div>
        <div class="question-block" data-correct="A">
          <p>
            8. A: .............paint your bedroom walls white? B: No,
            we............ We are going to paint them blue.
          </p>
          <div class="option">
            <label
              ><input name="q8" type="radio" value="A" /> Are you going to /
              aren't
            </label>
          </div>
          <div class="option">
            <label
              ><input name="q8" type="radio" value="B" /> Do you going to /
              don't
            </label>
          </div>
          <div class="option">
            <label
              ><input name="q8" type="radio" value="C" /> Are you going to /
              are</label
            >
          </div>
        </div>
        <div class="question-block" data-correct="B">
          <p>
            9. A: Where............to sit? B: She............to sit in the front
            row.
          </p>
          <div class="option">
            <label
              ><input name="q9" type="radio" value="A" /> is she going to / is
              going
            </label>
          </div>
          <div class="option">
            <label
              ><input name="q9" type="radio" value="B" /> is she going / is
              going
            </label>
          </div>
          <div class="option">
            <label
              ><input name="q9" type="radio" value="C" /> is she going to / is
              going to</label
            >
          </div>
        </div>
        <div class="question-block" data-correct="C">
          <p>
            10. A: .............to buy a house in the countryside? B: No, they
            aren't. They ................buy a house in the countryside.
          </p>
          <div class="option">
            <label
              ><input name="q10" type="radio" value="A" /> Are they going to /
              are going to
            </label>
          </div>
          <div class="option">
            <label
              ><input name="q10" type="radio" value="B" /> Are they going / are
              going
            </label>
          </div>
          <div class="option">
            <label
              ><input name="q10" type="radio" value="C" /> Are they going / are
              going to</label
            >
          </div>
        </div>
      </div>

      <button onclick="submitAnswers('q6', 5, 'result-II')">
        Submit Part II
      </button>
      <div class="result" id="result-II"></div>
      <button onclick="resetPart('q6', 5, 'result-II')">Reset Part II</button>
    </div>
    <!-- PART III -->
    <!-- PART III -->
    <h3>III. Reading comprehension</h3>
    <div id="part-III">
      <!-- Question 11 -->
      <div class="question-block" data-correct="B">
        <div class="reading-passage">
          <p>
            <strong>MOTHER</strong>
            <br />This comedy thriller is by the director Kadri Kõusaar. It
            takes place in a small town in Estonia. A man is shot to death, and
            his mother tries to find out who did it. She talks to people in town
            and learns that her son had some visitors before he was shot.<br />
          </p>
        </div>
        <p>
          11. After talking with the townspeople, the mother finds out
          that......
        </p>
        <div class="option">
          <label
            ><input name="q11" type="radio" value="A" /> some visitors knew who
            shot her son.
          </label>
        </div>
        <div class="option">
          <label
            ><input name="q11" type="radio" value="B" />some people visited her
            son before his death.
          </label>
        </div>
        <div class="option">
          <label
            ><input name="q11" type="radio" value="C" /> some visitors in the
            town shot her son.
          </label>
        </div>
      </div>

      <!-- Question 12 -->
      <div class="question-block" data-correct="B">
        <div class="reading-passage">
          <p>
            <strong>APRIL AND THE EXTRAORDINARY WORLD </strong>
            <br />This animated film is set in Paris in 1941. April lives with
            her family. They are happy together until one day, her family
            suddenly disappears. April with her clever cat begins an exciting
            journey to find her family. Along the way, April meets new friends
            and discovers amazing things. This film is a fun story for the whole
            family. (In French with English subtitles.) <br />
          </p>
        </div>
        <p>12.Who is "April and the Extraordinary World" for?</p>
        <div class="option">
          <label
            ><input name="q12" type="radio" value="A" />It's only for people who
            go with their family.
          </label>
        </div>
        <div class="option">
          <label
            ><input name="q12" type="radio" value="B" /> It's for both children
            and adults.
          </label>
        </div>
        <div class="option">
          <label
            ><input name="q12" type="radio" value="C" /> It's only for
            children.</label
          >
        </div>
      </div>

      <!-- Question 13 -->
      <div class="question-block" data-correct="B">
        <div class="reading-passage">
          <p>
            <strong>BROTHER </strong>
            <br />This drama from Venezuela tells the story of two brothers who
            live in Caracas, a big city in Venezuela. Both brothers love
            football, and they dream of becoming professional players one day.
            But life in their neighbourhood is not easy. It is full of problems,
            danger, and violence. The brothers must work hard together to follow
            their dream. <br />
          </p>
        </div>
        <p>13. The brothers must work hard together to............</p>
        <div class="option">
          <label
            ><input name="q13" type="radio" value="A" /> have an easier life in
            their neighbourhood.
          </label>
        </div>
        <div class="option">
          <label
            ><input name="q13" type="radio" value="B" /> become professional
            football players.
          </label>
        </div>
        <div class="option">
          <label
            ><input name="q13" type="radio" value="C" /> follow a professional
            lifestyle.</label
          >
        </div>
      </div>

      <!-- Question 14 -->
      <div class="question-block" data-correct="C">
        <div class="reading-passage">
          <strong>THE MOUNTAIN RESCUE </strong>
          <br />This action film is about a group of friends who love exploring
          high mountains. One day, they go on a climbing trip together to a
          snowy mountain. During their climb, they get caught in a snowstorm.
          They work hard together to stay safe from the storm and they also
          learn the power of teamwork and friendship. <br />
        </div>
        <p>14. What do the friends learn from the climbing trip?</p>
        <div class="option">
          <label
            ><input name="q14" type="radio" value="A" /> the power of mountain
            climbing.
          </label>
        </div>
        <div class="option">
          <label
            ><input name="q14" type="radio" value="B" /> the safety of
            friendship .</label
          >
        </div>
        <div class="option">
          <label
            ><input name="q14" type="radio" value="C" /> the power of working
            together.</label
          >
        </div>
      </div>

      <!-- Question 15 -->
      <div class="question-block" data-correct="B">
        <div class="reading-passage">
          <p>
            <strong>LOST IN THE COSMOS </strong>
            <br />Famous scientist Edmond Skirch works with a research team. He
            suddenly disappears when he is working on a new invention. The
            police question all the members of the research team to find out
            what happened. They discover that someone from the outer space took
            Edmond Skirch to their planet. <br />
          </p>
        </div>
        <p>15. What type of film can "Lost in the Cosmos" possibly be?</p>
        <div class="option">
          <label
            ><input name="q15" type="radio" value="A" /> a comedy thriller film
            .</label
          >
        </div>
        <div class="option">
          <label
            ><input name="q15" type="radio" value="B" /> a science fiction film
            .</label
          >
        </div>
        <div class="option">
          <label
            ><input name="q15" type="radio" value="C" /> a romantic comedy
            film.</label
          >
        </div>
      </div>
    </div>

    <button onclick="submitAnswers('q11', 5, 'result-III')">
      Submit Part III
    </button>
    <div class="result" id="result-III"></div>
    <button onclick="resetPart('q11', 5, 'result-III')">Reset Part III</button>
    <!-- PART IV -->
    <h3>IV. Fill in the blank (TWO or THREE words from the text)</h3>
    <div id="part-IV">
      <div class="question-block" data-correct="funny film">
        <div class="passage">
          <strong>SISTER</strong>
          <br />This is a film about Natalie, a young girl who works as a
          policewoman. Natalie lives with her sister. One day, her sister
          disappears at a festival and Natalie decides to find her sister by
          herself. There are funny moments that make you burst out laughing.
          <br />
        </div>
        <p>
          16. "Sister" is a..........about a policewoman named Natalie and her
          search for her missing sister.
        </p>
        <input
          name="q16"
          placeholder="Your answer here"
          style="width: 90%; margin: 10px 20px; padding: 6px"
          type="text"
          autocomplete="off"
        />
      </div>

      <div class="question-block" data-correct="shot her">
        <div class="passage">
          <strong>MOTHER </strong>
          <br />This thriller is by director Kadri Kõusaar. It takes place in a
          small town in Estonia. Someone shot her son, and nobody knows who did
          it. His mother tries to find out the truth. She talks to people in the
          town and learns surprising secrets about them.
          <br />
        </div>
        <p>
          17. "Mother" is a thriller about a woman who tries to find out who....
          son.
        </p>
        <input
          name="q17"
          placeholder="Your answer here"
          style="width: 90%; margin: 10px 20px; padding: 6px"
          type="text"
          autocomplete="off"
        />
      </div>

      <div class="question-block" data-correct="find her family">
        <div class="passage">
          <strong>APRIL AND THE EXTRAORDINARY WORLD </strong>
          <br />This animated film is set in Paris in 1941. When her family
          suddenly disappears, April with her clever cat begins an exciting
          journey to find her family. Along the way, April meets new friends and
          discovers amazing things. This film is a fun story for everyone.
          <br />
        </div>
        <p>
          18. : April's family suddenly disappears. On the way to ..............
          she meets new friends and discovers amazing things.
        </p>
        <input
          name="q18"
          placeholder="Your answer here"
          style="width: 90%; margin: 10px 20px; padding: 6px"
          type="text"
          autocomplete="off"
        />
      </div>

      <div class="question-block" data-correct="emotional story|emotional film">
        <div class="passage">
          <strong>PARASITE</strong>
          <br />This film is about a poor family who finds a way to work for a
          rich family. The film shows the differences between rich and poor
          people and what they will do to have better lives. It is an emotional
          story with many surprising moments.
          <br />
        </div>
        <p>
          19. : "Parasite" is an....... about the differences between rich and
          poor people and their effort for better lives.
        </p>
        <input
          name="q19"
          placeholder="Your answer here"
          style="width: 90%; margin: 10px 20px; padding: 6px"
          type="text"
          autocomplete="off"
        />
      </div>

      <div class="question-block" data-correct="a crime writer">
        <div class="passage">
          <strong>Knives out</strong>
          <br />A crime writer dies suddenly and nobody knows who did it. Famous
          detective Benoit Blanc tries to find out who the killer is. The story
          is full of twists as the detective discovers what really happened.
          <br />
        </div>
        <p>
          20. "Knives out" is a film about a famous detective who tries to find
          the killer of ..............
        </p>
        <input
          name="q20"
          placeholder="Your answer here"
          style="width: 90%; margin: 10px 20px; padding: 6px"
          type="text"
          autocomplete="off"
        />
      </div>
    </div>

    <button onclick="submitTextAnswers(16, 5, 'result-IV')">
      Submit Part IV
    </button>
    <div class="result" id="result-IV"></div>
    <button onclick="resetPart('q16', 5, 'result-IV')">Reset Part IV</button>
    <!-- PART V -->
    <h3>V. Complete the prediction with THREE to FOUR WORDS.</h3>
    <div id="part-V">
      <div class="question-block" data-correct="visit our grandparents in">
        <div class="passage">
          <p>
            We are going to Hoa Binh next week. We are going to visit our
            grandparents there.
          </p>
        </div>
        <p>21. We are going to.... ...........Hoa Binh next week.</p>
        <input
          name="q21"
          placeholder="Your answer here"
          style="width: 90%; margin: 10px 20px; padding: 6px"
          type="text"
          autocomplete="off"
        />
      </div>

      <div class="question-block" data-correct="to look for a">
        <div class="passage">
          <p>Jenny is going to Hanoi. She is going to look for a job there.</p>
        </div>
        <p>22. Jenny is going..............job in Hanoi.</p>
        <input
          name="q22"
          placeholder="Your answer here"
          style="width: 90%; margin: 10px 20px; padding: 6px"
          type="text"
          autocomplete="off"
        />
      </div>

      <div class="question-block" data-correct="to wear the black">
        <div class="passage">
          <p>
            There's the black dress and the white one. What are you going to
            wear?
          </p>
        </div>
        <p>23. Are you going ..............dress or the white one?</p>
        <input
          name="q23"
          placeholder="Your answer here"
          style="width: 90%; margin: 10px 20px; padding: 6px"
          type="text"
          autocomplete="off"
        />
      </div>

      <div class="question-block" data-correct="not going to">
        <div class="passage">
          <p>
            She is going to watch a film on TV tonight, but not something scary.
          </p>
        </div>
        <p>24. : She is ..............watch a scary film on TV tonight.</p>
        <input
          name="q24"
          placeholder="Your answer here"
          style="width: 90%; margin: 10px 20px; padding: 6px"
          type="text"
          autocomplete="off"
        />
      </div>

      <div class="question-block" data-correct="spend your summer in">
        <div class="passage">
          <p>
            Where are you going to spend your summer? In Thailand or in China?
          </p>
        </div>
        <p>25. Are you going to ............Thailand or in China?</p>
        <input
          name="q25"
          placeholder="Your answer here"
          style="width: 90%; margin: 10px 20px; padding: 6px"
          type="text"
          autocomplete="off"
        />
      </div>
    </div>

    <button onclick="submitTextAnswers(21, 5, 'result-V')">
      Submit Part V
    </button>
    <div class="result" id="result-V"></div>
    <button onclick="resetPart('q21', 5, 'result-V')">Reset Part V</button>
    <!-- PART VI -->
    <!-- PART VI -->
    <h3>VI. Sentence ordering</h3>
    <div class="sentence-ordering" id="part-vi">
      <!-- Question 14 -->
      <div
        class="sentence-question"
        data-answer="I'm going to buy tickets for the new fantasy film at the cinema."
        data-group="q26"
      >
        <p>26. Put the words in the correct order:</p>
        <p>
          <em class="shufflable"
            >for the new /I'm /buy tickets /at the cinema. /going /to /fantasy
            film
          </em>
        </p>

        <div
          class="drop-area"
          ondragover="allowDrop(event)"
          ondrop="drop(event)"
        ></div>

        <div class="word-bank" data-group="q26">
          <span
            draggable="true"
            id="phrase_0_0"
            data-group="q26"
            ondragstart="drag(event)"
            ondragend="dragEnd(event)"
            >I'm</span
          >
          <span
            draggable="true"
            id="phrase_0_1"
            data-group="q26"
            ondragstart="drag(event)"
            ondragend="dragEnd(event)"
            >for the new</span
          >
          <span
            draggable="true"
            id="phrase_0_2"
            data-group="q26"
            ondragstart="drag(event)"
            ondragend="dragEnd(event)"
            >buy tickets</span
          >
          <span
            draggable="true"
            id="phrase_0_3"
            data-group="q26"
            ondragstart="drag(event)"
            ondragend="dragEnd(event)"
            >at the cinema.</span
          >
          <span
            draggable="true"
            id="phrase_0_4"
            data-group="q26"
            ondragstart="drag(event)"
            ondragend="dragEnd(event)"
            >going</span
          >
          <span
            draggable="true"
            id="phrase_0_5"
            data-group="q26"
            ondragstart="drag(event)"
            ondragend="dragEnd(event)"
            >to</span
          >
          <span
            draggable="true"
            id="phrase_0_6"
            data-group="q26"
            ondragstart="drag(event)"
            ondragend="dragEnd(event)"
            >fantasy film</span
          >
        </div>
      </div>

      <!-- Question 15 -->
      <div
        class="sentence-question"
        data-answer="She doesn't like watching documentaries because she thinks they are boring."
        data-group="q27"
      >
        <p>27. Put the words in the correct order:</p>
        <p>
          <em class="shufflable"
            >they /documentaries /because /she thinks /watching /She /doesn't
            like /are boring.
          </em>
        </p>

        <div
          class="drop-area"
          ondragover="allowDrop(event)"
          ondrop="drop(event)"
        ></div>

        <div class="word-bank" data-group="q27">
          <span
            draggable="true"
            id="phrase_1_0"
            data-group="q27"
            ondragstart="drag(event)"
            ondragend="dragEnd(event)"
            >they</span
          >
          <span
            draggable="true"
            id="phrase_1_1"
            data-group="q27"
            ondragstart="drag(event)"
            ondragend="dragEnd(event)"
            >documentaries</span
          >
          <span
            draggable="true"
            id="phrase_1_2"
            data-group="q27"
            ondragstart="drag(event)"
            ondragend="dragEnd(event)"
            >because</span
          >
          <span
            draggable="true"
            id="phrase_1_3"
            data-group="q27"
            ondragstart="drag(event)"
            ondragend="dragEnd(event)"
            >she thinks</span
          >
          <span
            draggable="true"
            id="phrase_1_4"
            data-group="q27"
            ondragstart="drag(event)"
            ondragend="dragEnd(event)"
            >watching</span
          >
          <span
            draggable="true"
            id="phrase_1_5"
            data-group="q27"
            ondragstart="drag(event)"
            ondragend="dragEnd(event)"
            >She</span
          ><span
            draggable="true"
            id="phrase_1_6"
            data-group="q27"
            ondragstart="drag(event)"
            ondragend="dragEnd(event)"
            >doesn't like</span
          ><span
            draggable="true"
            id="phrase_1_7"
            data-group="q27"
            ondragstart="drag(event)"
            ondragend="dragEnd(event)"
            >are boring.</span
          >
        </div>
      </div>

      <!-- Question 16 -->
      <div
        class="sentence-question"
        data-answer="I'm never going to watch a horror film again because it is too scary."
        data-group="q28"
      >
        <p>28. Put the words in the correct order:</p>
        <p>
          <em class="shufflable">
            it is /a horror /to /I'm /film again /because /too scary. /never
            going /watch
          </em>
        </p>
        <div
          class="drop-area"
          ondragover="allowDrop(event)"
          ondrop="drop(event)"
        ></div>
        <div class="word-bank" data-group="q28">
          <span
            draggable="true"
            id="phrase_2_0"
            data-group="q28"
            ondragstart="drag(event)"
            ondragend="dragEnd(event)"
            >it is</span
          >
          <span
            draggable="true"
            id="phrase_2_1"
            data-group="q28"
            ondragstart="drag(event)"
            ondragend="dragEnd(event)"
            >a horror</span
          >
          <span
            draggable="true"
            id="phrase_2_2"
            data-group="q28"
            ondragstart="drag(event)"
            ondragend="dragEnd(event)"
            >to</span
          >
          <span
            draggable="true"
            id="phrase_2_3"
            data-group="q28"
            ondragstart="drag(event)"
            ondragend="dragEnd(event)"
            >I'm</span
          >
          <span
            draggable="true"
            id="phrase_2_4"
            data-group="q28"
            ondragstart="drag(event)"
            ondragend="dragEnd(event)"
            >film again</span
          >
          <span
            draggable="true"
            id="phrase_2_5"
            data-group="q28"
            ondragstart="drag(event)"
            ondragend="dragEnd(event)"
            >because</span
          >
          <span
            draggable="true"
            id="phrase_2_6"
            data-group="q28"
            ondragstart="drag(event)"
            ondragend="dragEnd(event)"
            >too scary.</span
          ><span
            draggable="true"
            id="phrase_2_7"
            data-group="q28"
            ondragstart="drag(event)"
            ondragend="dragEnd(event)"
            >never going</span
          ><span
            draggable="true"
            id="phrase_2_8"
            data-group="q28"
            ondragstart="drag(event)"
            ondragend="dragEnd(event)"
            >watch</span
          >
        </div>
      </div>

      <!-- Question 17 -->
      <div
        class="sentence-question"
        data-answer="Are you going to see the new science-fiction film at CGV cinema tonight?"
        data-group="q29"
      >
        <p>29. Put the words in the correct order:</p>
        <p>
          <em class="shufflable"
            >you /to /tonight? /going /Are/science-fiction /see /the new /film
            /at CGV cinema
          </em>
        </p>
        <div
          class="drop-area"
          ondragover="allowDrop(event)"
          ondrop="drop(event)"
        ></div>
        <div class="word-bank" data-group="q29">
          <span
            draggable="true"
            id="phrase_3_0"
            data-group="q29"
            ondragstart="drag(event)"
            ondragend="dragEnd(event)"
            >you</span
          >
          <span
            draggable="true"
            id="phrase_3_1"
            data-group="q29"
            ondragstart="drag(event)"
            ondragend="dragEnd(event)"
            >to</span
          >
          <span
            draggable="true"
            id="phrase_3_2"
            data-group="q29"
            ondragstart="drag(event)"
            ondragend="dragEnd(event)"
            >tonight?</span
          >
          <span
            draggable="true"
            id="phrase_3_3"
            data-group="q29"
            ondragstart="drag(event)"
            ondragend="dragEnd(event)"
            >going</span
          >
          <span
            draggable="true"
            id="phrase_3_4"
            data-group="q29"
            ondragstart="drag(event)"
            ondragend="dragEnd(event)"
            >Are</span
          >
          <span
            draggable="true"
            id="phrase_3_5"
            data-group="q29"
            ondragstart="drag(event)"
            ondragend="dragEnd(event)"
            >science-fiction</span
          ><span
            draggable="true"
            id="phrase_3_6"
            data-group="q29"
            ondragstart="drag(event)"
            ondragend="dragEnd(event)"
            >see</span
          ><span
            draggable="true"
            id="phrase_3_7"
            data-group="q29"
            ondragstart="drag(event)"
            ondragend="dragEnd(event)"
            >the new</span
          ><span
            draggable="true"
            id="phrase_3_8"
            data-group="q29"
            ondragstart="drag(event)"
            ondragend="dragEnd(event)"
            >film</span
          ><span
            draggable="true"
            id="phrase_3_9"
            data-group="q29"
            ondragstart="drag(event)"
            ondragend="dragEnd(event)"
            >at CGV cinema</span
          >
        </div>
      </div>

      <!-- Question 18 -->
      <div
        class="sentence-question"
        data-answer="Is Peter going to meet us at the entrance of the cinema?"
        data-group="q30"
      >
        <p>30. Put the words in the correct order:</p>
        <p>
          <em class="shufflable"
            >Is /going /at the entrance /of the cinema? /Peter /us /meet /to
          </em>
        </p>
        <div
          class="drop-area"
          ondragover="allowDrop(event)"
          ondrop="drop(event)"
        ></div>
        <div class="word-bank" data-group="q30">
          <span
            draggable="true"
            id="phrase_4_0"
            data-group="q30"
            ondragstart="drag(event)"
            ondragend="dragEnd(event)"
            >Is</span
          >
          <span
            draggable="true"
            id="phrase_4_1"
            data-group="q30"
            ondragstart="drag(event)"
            ondragend="dragEnd(event)"
            >Peter</span
          >
          <span
            draggable="true"
            id="phrase_4_2"
            data-group="q30"
            ondragstart="drag(event)"
            ondragend="dragEnd(event)"
            >going</span
          >
          <span
            draggable="true"
            id="phrase_4_3"
            data-group="q30"
            ondragstart="drag(event)"
            ondragend="dragEnd(event)"
            >at the entrance</span
          >
          <span
            draggable="true"
            id="phrase_4_4"
            data-group="q30"
            ondragstart="drag(event)"
            ondragend="dragEnd(event)"
            >of the cinema?</span
          >
          <span
            draggable="true"
            id="phrase_4_5"
            data-group="q30"
            ondragstart="drag(event)"
            ondragend="dragEnd(event)"
            >us</span
          ><span
            draggable="true"
            id="phrase_4_6"
            data-group="q30"
            ondragstart="drag(event)"
            ondragend="dragEnd(event)"
            >meet</span
          ><span
            draggable="true"
            id="phrase_4_7"
            data-group="q30"
            ondragstart="drag(event)"
            ondragend="dragEnd(event)"
            >to</span
          >
        </div>
      </div>
      <button onclick="checkSentenceOrdering()">Submit Part VI</button>
      <div class="result" id="result-VI"></div>
      <button onclick="resetSentenceOrdering()">Reset Part VI</button>
    </div>
    <div
      style="
        margin-top: 40px;
        padding: 20px;
        background-color: #fff3cd;
        border: 1px solid #ffeeba;
        border-radius: 8px;
        color: #856404;
        font-size: 16px;
      "
    >
      <strong>⚠️ Lưu ý:</strong> Website hiện tại có thể chưa hoạt động tốt trên
      điện thoại và còn nhiều lỗi như ko đủ đáp án.<br />
      Vui lòng liên hệ facebook
      <a
        href="https://www.facebook.com/vu.q.huy.795955"
        target="_blank"
        style="color: #0d6efd; text-decoration: underline"
        >Tại Đây</a
      >
      hoặc <strong>Zalo: 0778 366 110</strong> để được hỗ trợ nếu gặp lỗi.
    </div>
    `;
document.body.insertAdjacentHTML("beforeend", lessonContent);

window.lessonLoaded = function () {
  const loader = document.getElementById("page-loader");

  if (loader) {
    // Hiển thị ít nhất 2s
    const startTime = window.loaderStartTime || Date.now();
    const elapsed = Date.now() - startTime;
    const delay = Math.max(0, 2000 - elapsed); // đảm bảo đủ 2s

    setTimeout(() => {
      loader.style.opacity = "0";

      setTimeout(() => {
        loader.style.display = "none";
      }, 500); // đợi hiệu ứng transition
    }, delay);
  }

  // Hiện nút skip nếu chưa bị ẩn
  const skipBtn = document.getElementById("global-skip-btn");
  if (skipBtn && !localStorage.getItem("skipLoader")) {
    skipBtn.style.display = "block";
  }
};

// Ghi lại thời điểm loader bắt đầu hiển thị
window.loaderStartTime = Date.now();
if (window.lessonLoaded) window.lessonLoaded();

// Tải script xử lý
const script = document.createElement("script");
script.src = "/lessons/lesson1-script.js";
document.body.appendChild(script);
