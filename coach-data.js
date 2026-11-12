'use strict';
window.SCA_COACH = {
  "checked": "2026-11-12",
  "stages": [
    {
      "id": "open",
      "title": "Open",
      "purpose": "Make contact, check privacy and agree the agenda."
    },
    {
      "id": "understand",
      "title": "Understand",
      "purpose": "Hear the story, impact and the patient’s perspective."
    },
    {
      "id": "focus",
      "title": "Focus",
      "purpose": "Ask questions that change your assessment and summarise."
    },
    {
      "id": "explain",
      "title": "Explain",
      "purpose": "Share your assessment in small chunks, including uncertainty."
    },
    {
      "id": "plan",
      "title": "Plan",
      "purpose": "Recommend a safe next step and make it achievable together."
    },
    {
      "id": "close",
      "title": "Close",
      "purpose": "Agree warning signs, follow-up and check understanding."
    }
  ],
  "phrases": [
    {
      "id": "hello",
      "stage": "open",
      "title": "Start warmly and check privacy",
      "cue": "A patient joins a telephone appointment.",
      "model": "Hello, I’m Dr [name], one of the GPs. Could I check your name and date of birth? Is it safe and private for you to talk now?",
      "simple": "Hello, I’m Dr [name]. Could you confirm your details? Can you talk privately?",
      "starter": "Hello, I’m… Could I check… Is it…",
      "purpose": "Introduce yourself accurately, confirm identity and establish whether sensitive discussion is safe.",
      "tip": "Pause for each answer. Establish location and a callback route when the clinical situation requires it."
    },
    {
      "id": "agenda",
      "stage": "open",
      "title": "Find the agenda and agree a priority",
      "cue": "The patient has told you the first reason for coming.",
      "model": "Before we decide where to start, is there anything else you were hoping we could discuss today?",
      "simple": "Is there anything else you wanted help with today?",
      "starter": "Before we decide… is there anything else…",
      "purpose": "Find important concerns early, then agree a safe priority.",
      "tip": "An invitation is not a promise to finish every issue. Triage urgent concerns before deferring anything."
    },
    {
      "id": "story",
      "stage": "understand",
      "title": "Invite the story",
      "cue": "You need to hear what has been happening.",
      "model": "Could you talk me through what has been happening, starting from when you first noticed it?",
      "simple": "Could you tell me what happened from the beginning?",
      "starter": "Could you talk me through…",
      "purpose": "Let the patient describe the problem before narrowing the questions.",
      "tip": "Ask one question and allow an answer. Interrupt when an urgent finding requires immediate action."
    },
    {
      "id": "impact",
      "stage": "understand",
      "title": "Explore impact and concern",
      "cue": "You have heard the symptom story.",
      "model": "How is this affecting your day-to-day life? What is worrying you most about it?",
      "simple": "What is this stopping you from doing? What worries you most?",
      "starter": "How is this affecting… What is worrying…",
      "purpose": "Understand function and the patient’s concern, then use the answers in your plan.",
      "tip": "These are separate questions. Pause after the first and respond before asking the second."
    },
    {
      "id": "focus",
      "stage": "focus",
      "title": "Move to focused assessment",
      "cue": "You have heard the story and need to clarify risk.",
      "model": "Thank you—that helps me understand. I’d like to ask a few more specific questions to check what we need to do next.",
      "simple": "I’d like to ask a few specific questions now.",
      "starter": "Thank you… I’d like to ask…",
      "purpose": "Choose questions that distinguish causes and change urgency or management.",
      "tip": "A signpost does not replace the actual assessment. Ask the relevant questions clearly, one at a time."
    },
    {
      "id": "summary",
      "stage": "focus",
      "title": "Summarise and invite correction",
      "cue": "You are ready to bring the assessment together.",
      "model": "Let me check I’ve understood. [Brief summary.] Your main concern is [concern]. What have I missed?",
      "simple": "You’ve had [problem], and you’re worried about [concern]. Is that right?",
      "starter": "Let me check… Your main concern…",
      "purpose": "Check the facts and patient priority before explaining your assessment.",
      "tip": "A summary should be short and accurate. Correct it if the patient adds or changes information."
    },
    {
      "id": "explain",
      "stage": "explain",
      "title": "Explain the assessment",
      "cue": "You have sufficient information to share your assessment.",
      "model": "From what you’ve told me, [assessment] seems the most likely explanation. Let me explain why.",
      "simple": "I think this may be [assessment], because [reason].",
      "starter": "From what you’ve told me… because…",
      "purpose": "Explain the reasoning at the right level of certainty.",
      "tip": "Avoid promising a diagnosis from an incomplete remote assessment. Explain what further assessment is needed."
    },
    {
      "id": "uncertainty",
      "stage": "explain",
      "title": "Handle uncertainty and check understanding",
      "cue": "The patient asks how certain you are.",
      "model": "What we know is [finding]. What we still need to check is [uncertainty]. The next step is [action]. What would you like me to explain more clearly?",
      "simple": "We know [finding]. We need to check [uncertainty] by [action]. What questions do you have?",
      "starter": "What we know… What we still need… The next step…",
      "purpose": "Make uncertainty understandable and attach it to a practical next step.",
      "tip": "Pause after a small amount of information. Respond to the patient’s question before adding more."
    },
    {
      "id": "recommend",
      "stage": "plan",
      "title": "Recommend and explain why",
      "cue": "You need to move from explanation to a plan.",
      "model": "I recommend [action] because [reason]. Let me explain the relevant benefits and drawbacks. What are your thoughts about that?",
      "simple": "I recommend [action] to help with [goal]. How does that sound?",
      "starter": "I recommend… because… What are your thoughts…",
      "purpose": "Offer a clinically appropriate recommendation and invite the patient’s view.",
      "tip": "Discuss relevant alternatives, risks and the consequences of no change when appropriate. Urgency affects available choices."
    },
    {
      "id": "barrier",
      "stage": "plan",
      "title": "Find a barrier and adapt the plan",
      "cue": "The patient hesitates about your recommendation.",
      "model": "What might make this plan difficult for you? Let’s work through what we can do to make it manageable.",
      "simple": "What would make this difficult? What could help?",
      "starter": "What might make… Let’s work through…",
      "purpose": "Find the actual obstacle and agree arrangements the patient can use.",
      "tip": "Respond to the specific answer. Keep a necessary clinical recommendation clear while addressing practical barriers."
    },
    {
      "id": "safety",
      "stage": "close",
      "title": "Give specific safety advice",
      "cue": "You are preparing to finish after an appropriate assessment.",
      "model": "If [specific warning sign] happens, please [action and urgency]. If [expected progress] has not happened by [time], contact [service].",
      "simple": "If [warning sign], [action] straight away. We’ll review [when].",
      "starter": "If… please… If things have not… by…",
      "purpose": "Give relevant warning signs, a contact route, urgency and a review plan.",
      "tip": "Choose advice for this patient and condition. “Come back if worse” alone leaves the action unclear."
    },
    {
      "id": "check",
      "stage": "close",
      "title": "Confirm the plan and who owns it",
      "cue": "You have explained the plan and follow-up.",
      "model": "Just so I can check I’ve explained it clearly, could you tell me what you’ll do next and when you would seek help? I will [clinician action] by [time].",
      "simple": "Could you talk me through the plan in your own words? I’ll arrange [action] by [time].",
      "starter": "Just so I can check… could you tell me… I will…",
      "purpose": "Check understanding, correct gaps and name who will arrange and review each action.",
      "tip": "Make teach-back about the clarity of your explanation. Resolve any misunderstanding before closing."
    },
    {
      "id": "recover-summary",
      "stage": "focus",
      "title": "Take a moment to bring things together",
      "cue": "You lose your place halfway through a consultation.",
      "model": "Let me take a moment to bring everything together. You’ve told me [key points]. The next thing we need to decide is [decision].",
      "simple": "Let me summarise where we are, then agree the next step.",
      "starter": "Let me take a moment… You’ve told me… The next thing…",
      "purpose": "Recover your place using a concise clinical summary and a clear next decision.",
      "tip": "Pause for the patient’s response. Adapt the wording and urgency to the actual clinical situation."
    },
    {
      "id": "recover-concern",
      "stage": "focus",
      "title": "Return to the patient’s original concern",
      "cue": "You have focused on clinical details and need to return to the patient’s worry.",
      "model": "I haven’t forgotten your concern about [issue]. Now that we’ve checked [relevant assessment], let’s come back to what this means for you.",
      "simple": "Let’s come back to your worry about [issue].",
      "starter": "I haven’t forgotten… Let’s come back…",
      "purpose": "Reconnect the assessment with the concern the patient actually raised.",
      "tip": "Pause for the patient’s response. Adapt the wording and urgency to the actual clinical situation."
    },
    {
      "id": "recover-clarity",
      "stage": "explain",
      "title": "Repair an unclear explanation",
      "cue": "The patient looks puzzled or says they do not understand.",
      "model": "I’m sorry, I haven’t explained that clearly. Let me try again in a different way. [Short explanation.] Which part would be helpful to go over?",
      "simple": "Let me explain that more clearly. What would you like me to go over?",
      "starter": "I haven’t explained… Let me try…",
      "purpose": "Take responsibility for clarity and check the particular misunderstanding.",
      "tip": "Pause for the patient’s response. Adapt the wording and urgency to the actual clinical situation."
    },
    {
      "id": "recover-priority",
      "stage": "focus",
      "title": "Explain why a new finding changes the plan",
      "cue": "The patient discloses a warning symptom during a routine discussion.",
      "model": "What you’ve just told me changes what we need to do next. I’m concerned about [finding], so I recommend [appropriate urgent action]. Let’s arrange that now.",
      "simple": "This new symptom changes the plan. We need [action] now.",
      "starter": "This changes… I’m concerned about… I recommend…",
      "purpose": "Recognise a changed priority and turn the explanation into practical action.",
      "tip": "Pause for the patient’s response. Adapt the wording and urgency to the actual clinical situation."
    }
  ],
  "cases": [
    {
      "id": "headache",
      "title": "A headache and a fear of something serious",
      "category": "Symptoms",
      "patient": "Sam Reed, 34 · Telephone",
      "brief": "A new headache presentation. No examination has yet been performed. Practise listening, focused assessment, uncertainty, an achievable assessment plan and a clear safety net. This is a communication exercise with selected assessment points, not a complete headache protocol.",
      "goal": "Complete a connected consultation, then repeat one difficult exchange with less help.",
      "atlas": null,
      "studio": "c11",
      "nodes": [
        {
          "id": "hello",
          "phrase": "hello",
          "stage": "open",
          "patient": "I’ve booked because of these headaches.",
          "task": "Make contact and establish that this telephone discussion is private.",
          "model": "Hello, I’m Dr Patel, one of the GPs. Could I check your name and date of birth? Are you somewhere you can speak privately?",
          "simple": "Hello, I’m Dr Patel. Could you confirm your details? Is it private for you to talk?",
          "starter": "Hello, I’m… Could I check… Is it…",
          "purpose": "Introduce yourself accurately, confirm identity and establish whether sensitive discussion is safe.",
          "tip": "Pause for each answer. Establish location and a callback route when the clinical situation requires it.",
          "reply": "I’m Sam Reed, 34. I’m at home and can speak privately.",
          "options": [
            "Check identity and privacy before proceeding.",
            "Assume the booking details establish privacy.",
            "Start by saying the headache is probably stress."
          ],
          "answer": 0,
          "why": "Privacy and identity are established before discussing sensitive details.",
          "essential": [
            "Introduced role and checked identity",
            "Checked privacy and ability to talk"
          ],
          "improve": [
            "Use the name and role you actually hold."
          ],
          "next": "agenda"
        },
        {
          "id": "agenda",
          "phrase": "agenda",
          "stage": "open",
          "patient": "I mainly want to know why they keep coming back.",
          "task": "Find other concerns and agree what matters today.",
          "model": "We can look at the headaches and what might help. Before we start, is there anything else you wanted to discuss?",
          "simple": "Is there anything else you wanted help with today?",
          "starter": "Before we decide… is there anything else…",
          "purpose": "Find important concerns early, then agree a safe priority.",
          "tip": "An invitation is not a promise to finish every issue. Triage urgent concerns before deferring anything.",
          "reply": "No, just the headaches. I’m hoping you can tell me whether I need a scan.",
          "options": [
            "Find the agenda and explore the scan request.",
            "Promise a scan before assessment.",
            "Tell the patient scans are never needed."
          ],
          "answer": 0,
          "why": "The request reveals an expectation. Its appropriateness depends on the assessment.",
          "essential": [
            "Invited other concerns",
            "Acknowledged the scan expectation without promising it"
          ],
          "improve": [
            "Ask what the patient hopes a scan would explain."
          ],
          "next": "story"
        },
        {
          "id": "story",
          "phrase": "story",
          "stage": "understand",
          "patient": "They started about three weeks ago.",
          "task": "Invite the sequence before narrowing the assessment.",
          "model": "Could you talk me through the headaches from when you first noticed them?",
          "simple": "Could you tell me how they started and what happens?",
          "starter": "Could you talk me through…",
          "purpose": "Let the patient describe the problem before narrowing the questions.",
          "tip": "Ask one question and allow an answer. Interrupt when an urgent finding requires immediate action.",
          "reply": "They build up gradually, usually on busy workdays. It feels like a tight band on both sides.",
          "options": [
            "Hear the story and clarify the pattern.",
            "Interrupt with a long list of unrelated questions.",
            "Diagnose a tumour from duration alone."
          ],
          "answer": 0,
          "why": "The story helps choose the focused questions. It does not by itself exclude a serious cause.",
          "essential": [
            "Invited the patient’s account",
            "Allowed the symptom pattern to emerge"
          ],
          "improve": [
            "Clarify duration, frequency and change from any previous headaches."
          ],
          "next": "impact"
        },
        {
          "id": "impact",
          "phrase": "impact",
          "stage": "understand",
          "patient": "I’ve been avoiding work. My aunt had a brain tumour.",
          "task": "Explore the effect and the personal reason for the concern.",
          "model": "It sounds as though this is affecting work, and your aunt’s experience has made it frightening. What feels similar to what happened to her?",
          "simple": "What has this stopped you doing? What is making you worry about a tumour?",
          "starter": "How is this affecting… What is worrying…",
          "purpose": "Understand function and the patient’s concern, then use the answers in your plan.",
          "tip": "These are separate questions. Pause after the first and respond before asking the second.",
          "reply": "I’m frightened I’ll miss something serious. She was very unwell before anyone knew.",
          "options": [
            "Acknowledge the specific concern and explore it.",
            "Say “Don’t worry” before understanding the concern.",
            "Promise there is no possibility of serious illness."
          ],
          "answer": 0,
          "why": "Acknowledging the reason for fear makes it possible to address it accurately later.",
          "essential": [
            "Reflected a detail the patient gave",
            "Explored the fear without false reassurance"
          ],
          "improve": [
            "Leave a pause after acknowledging the fear."
          ],
          "next": "focus"
        },
        {
          "id": "focus",
          "phrase": "focus",
          "stage": "focus",
          "patient": "What do you need to ask me now?",
          "task": "Ask focused questions and be ready to change urgency.",
          "model": "I’d like to check the onset and any warning symptoms. Did any headache become extremely painful suddenly? Have you had weakness, difficulty speaking, loss of vision, fever with a stiff neck, or a recent head injury?",
          "simple": "Did it start very suddenly? Have you had any new weakness, speech or vision problems?",
          "starter": "Thank you… I’d like to ask…",
          "purpose": "Choose questions that distinguish causes and change urgency or management.",
          "tip": "A signpost does not replace the actual assessment. Ask the relevant questions clearly, one at a time.",
          "reply": "None of those. They start gradually. I’m not vomiting. They aren’t brought on by coughing or exercise.",
          "options": [
            "Assess warning features before deciding on routine care.",
            "Assume no warning symptoms because the patient sounds well.",
            "Continue routine advice after a sudden extremely painful onset."
          ],
          "answer": 0,
          "why": "The full assessment also considers progression, eye symptoms, medicines, systemic illness and other relevant risk factors; ask one question at a time.",
          "essential": [
            "Clarified onset and relevant warning symptoms",
            "Recognised that a warning finding would change the plan"
          ],
          "improve": [
            "Break the model into individual questions and listen after each."
          ],
          "next": "summary",
          "branch": {
            "label": "Practise a different patient answer",
            "patient": "Actually, this one became the worst headache I’ve ever had within seconds.",
            "next": "urgent"
          }
        },
        {
          "id": "summary",
          "phrase": "summary",
          "stage": "focus",
          "patient": "I’ve taken occasional paracetamol, but no other medicines.",
          "task": "Summarise and identify what still needs assessment.",
          "model": "You’ve had gradually developing headaches for three weeks, and you’re worried because of your aunt’s illness. You’ve described no warning symptoms so far. I’d like to complete the assessment, including an examination. What have I missed?",
          "simple": "The headaches build gradually, and your main worry is a tumour. Is that right? We still need to complete the assessment.",
          "starter": "Let me check… Your main concern…",
          "purpose": "Check the facts and patient priority before explaining your assessment.",
          "tip": "A summary should be short and accurate. Correct it if the patient adds or changes information.",
          "reply": "That’s right. I’d feel better if somebody examined me.",
          "options": [
            "Check the summary and arrange the missing assessment.",
            "Treat this telephone summary as a normal examination.",
            "Dismiss the request for an examination."
          ],
          "answer": 0,
          "why": "Remote history cannot supply examination findings. The next step must reflect the actual clinical assessment.",
          "essential": [
            "Checked facts and the patient’s concern",
            "Identified the need to complete assessment"
          ],
          "improve": [
            "Also clarify analgesic frequency and relevant medical history."
          ],
          "next": "explain"
        },
        {
          "id": "explain",
          "phrase": "explain",
          "stage": "explain",
          "patient": "Does it sound like a tumour?",
          "task": "Explain proportionately without an unsupported guarantee.",
          "model": "The pattern you describe can occur with common headache conditions. I haven’t found warning symptoms in what you’ve told me, but I can’t rule out every cause by phone. I recommend completing an examination before we settle on the plan.",
          "simple": "There are common explanations for this pattern. We need to complete the assessment before deciding.",
          "starter": "From what you’ve told me… because…",
          "purpose": "Explain the reasoning at the right level of certainty.",
          "tip": "Avoid promising a diagnosis from an incomplete remote assessment. Explain what further assessment is needed.",
          "reply": "So you’re not saying it is definitely nothing?",
          "options": [
            "Explain the current impression and its limits.",
            "Guarantee that a serious cause is impossible.",
            "Describe an unconfirmed tumour as the diagnosis."
          ],
          "answer": 0,
          "why": "Link reassurance to actual findings and explain the remaining uncertainty.",
          "essential": [
            "Linked explanation to the supplied history",
            "Avoided claiming that serious illness was excluded remotely"
          ],
          "improve": [
            "Use everyday words before diagnostic labels."
          ],
          "next": "uncertainty"
        },
        {
          "id": "uncertainty",
          "phrase": "uncertainty",
          "stage": "explain",
          "patient": "Why not just send me for a scan?",
          "task": "Address the question and explain how the next step helps.",
          "model": "I understand why you’re asking. Whether a scan would help depends on the history and examination. Let’s complete that assessment so we can decide what investigation, if any, is appropriate. What questions do you have about that?",
          "simple": "We first need the examination. That helps us decide whether a scan would be useful.",
          "starter": "What we know… What we still need… The next step…",
          "purpose": "Make uncertainty understandable and attach it to a practical next step.",
          "tip": "Pause after a small amount of information. Respond to the patient’s question before adding more.",
          "reply": "I thought a scan was the only way to be taken seriously.",
          "options": [
            "Address the scan concern and explain assessment-led decisions.",
            "Offer imaging solely to make the conversation easier.",
            "Say the patient is wasting appointments."
          ],
          "answer": 0,
          "why": "The concern deserves attention even when a particular investigation may not be indicated.",
          "essential": [
            "Answered the reason for the request",
            "Explained the next assessment without promising or prohibiting imaging"
          ],
          "improve": [
            "Ask whether the explanation has addressed the patient’s worry."
          ],
          "next": "recommend"
        },
        {
          "id": "recommend",
          "phrase": "recommend",
          "stage": "plan",
          "patient": "What would you recommend today?",
          "task": "Give a clear next step with its reason.",
          "model": "I recommend a face-to-face assessment to complete the examination and review the headache pattern. We can discuss suitable symptom relief after checking what is safe for you. A diary of when headaches occur and any medicines used may help us review the pattern.",
          "simple": "Let’s arrange an examination and check suitable pain relief. Keeping a headache diary may help.",
          "starter": "I recommend… because… What are your thoughts…",
          "purpose": "Offer a clinically appropriate recommendation and invite the patient’s view.",
          "tip": "Discuss relevant alternatives, risks and the consequences of no change when appropriate. Urgency affects available choices.",
          "reply": "Yes, but I work shifts and can’t attend during my usual hours.",
          "options": [
            "Agree assessment and an appropriate interim plan.",
            "Prescribe a specific regimen without checking suitability.",
            "Leave the follow-up entirely to chance."
          ],
          "answer": 0,
          "why": "Timing of assessment follows the full clinical picture. New warning features require urgent or emergency action.",
          "essential": [
            "Recommended completion of assessment",
            "Discussed an interim approach without unsupported prescribing"
          ],
          "improve": [
            "Describe what the examination and review are intended to achieve."
          ],
          "next": "barrier"
        },
        {
          "id": "barrier",
          "phrase": "barrier",
          "stage": "plan",
          "patient": "I’m worried I won’t manage the appointment around work.",
          "task": "Find the practical barrier and make arrangements.",
          "model": "What times could you manage? Let’s check what appointments are actually available. We’ll agree the timing based on the assessment and make a clear plan if you cannot attend.",
          "simple": "When could you attend? Let’s check a workable appointment and what to do if it falls through.",
          "starter": "What might make… Let’s work through…",
          "purpose": "Find the actual obstacle and agree arrangements the patient can use.",
          "tip": "Respond to the specific answer. Keep a necessary clinical recommendation clear while addressing practical barriers.",
          "reply": "I can come tomorrow morning. In this scenario, the practice confirms that appointment.",
          "options": [
            "Resolve access and confirm a feasible appointment.",
            "Promise a service without checking availability.",
            "Treat shift work as refusal of care."
          ],
          "answer": 0,
          "why": "A plan needs a confirmed practical route. The scenario supplies an available appointment; real availability must be checked.",
          "essential": [
            "Explored the barrier without blame",
            "Confirmed a feasible assessment arrangement"
          ],
          "improve": [
            "Check that the agreed timing remains clinically appropriate."
          ],
          "next": "safety"
        },
        {
          "id": "safety",
          "phrase": "safety",
          "stage": "close",
          "patient": "What should I look out for before then?",
          "task": "Give specific warning signs and action.",
          "model": "If a headache starts suddenly and is extremely painful, or you develop weakness, difficulty speaking, confusion or loss of vision, call 999 or go to A&E immediately. Do not drive yourself. For new concerning symptoms or worsening before the appointment, seek earlier medical advice rather than waiting.",
          "simple": "A sudden extremely painful headache or new weakness, speech trouble, confusion or loss of vision needs emergency help. Don’t drive yourself.",
          "starter": "If… please… If things have not… by…",
          "purpose": "Give relevant warning signs, a contact route, urgency and a review plan.",
          "tip": "Choose advice for this patient and condition. “Come back if worse” alone leaves the action unclear.",
          "reply": "If one of those happens, I shouldn’t wait for tomorrow.",
          "options": [
            "Link relevant warning signs to immediate action.",
            "Only say “Come back if worse”.",
            "Tell the patient to wait for the booked review whatever happens."
          ],
          "answer": 0,
          "why": "Safety advice needs a recognisable symptom, urgency and route. Tailor additional warning features to the assessment.",
          "essential": [
            "Named relevant emergency features",
            "Gave an immediate route and advised against driving"
          ],
          "improve": [
            "Check understanding of the difference between emergency help and planned review."
          ],
          "next": "check"
        },
        {
          "id": "check",
          "phrase": "check",
          "stage": "close",
          "patient": "Can we go over the plan once more?",
          "task": "Use teach-back and confirm ownership.",
          "model": "Of course. Could you tell me the next steps in your own words so I can check I’ve explained them clearly? The practice has confirmed your assessment tomorrow morning. We’ll review the findings and agree treatment and follow-up then.",
          "simple": "Could you talk me through the plan? Your assessment is booked for tomorrow, with earlier help if warning symptoms occur.",
          "starter": "Just so I can check… could you tell me… I will…",
          "purpose": "Check understanding, correct gaps and name who will arrange and review each action.",
          "tip": "Make teach-back about the clarity of your explanation. Resolve any misunderstanding before closing.",
          "reply": "I’ll attend tomorrow. If it suddenly becomes extremely painful or I get those new neurological symptoms, I’ll get emergency help.",
          "options": [
            "Check understanding and close the follow-up loop.",
            "Ask “You understand, don’t you?” and end immediately.",
            "Assume a referral request guarantees attendance."
          ],
          "answer": 0,
          "why": "Correct any misunderstanding and make responsibilities clear. An accurate teach-back is supplied here after the learner’s attempt.",
          "essential": [
            "Invited the patient to explain the plan",
            "Confirmed the assessment and earlier-help route"
          ],
          "improve": [
            "Ask what remaining questions the patient has."
          ],
          "next": null
        },
        {
          "id": "urgent",
          "phrase": "focus",
          "stage": "focus",
          "patient": "It became extremely painful within seconds. I’m alone at home.",
          "task": "Change the plan immediately and arrange emergency help.",
          "model": "What you’ve just described needs emergency assessment now. I’m concerned because the pain became extremely severe so suddenly. I will arrange emergency help. Please confirm your exact location and a number to call back if we are disconnected. Do not drive yourself.",
          "simple": "This sudden, extremely painful headache needs emergency help now. Let’s confirm where you are and arrange an ambulance.",
          "starter": "This changes… I’m concerned because… I will arrange…",
          "purpose": "Act on a time-critical finding and make the handover practical.",
          "tip": "Stop routine teaching and management when a real emergency is identified. Follow the emergency pathway, maintain contact as appropriate and document the handover.",
          "reply": "I’ll stay here. You have my address and callback number; in this fictional scenario the emergency handover is accepted.",
          "options": [
            "Arrange immediate emergency assessment and confirm location and handover.",
            "Finish a routine headache diary discussion first.",
            "Wait for tomorrow’s appointment."
          ],
          "answer": 0,
          "why": "A sudden extremely painful headache requires immediate emergency assessment. A routine appointment is no longer the appropriate path.",
          "essential": [
            "Recognised the change in urgency",
            "Arranged emergency help and confirmed practical contact details"
          ],
          "improve": [
            "Acknowledge fear briefly while keeping action clear."
          ],
          "next": null
        }
      ],
      "links": [
        {
          "label": "NHS: headaches and urgent help",
          "url": "https://www.nhs.uk/symptoms/headaches/"
        },
        {
          "label": "NICE: headache assessment and management",
          "url": "https://www.nice.org.uk/guidance/cg150"
        },
        {
          "label": "NICE: shared decision making",
          "url": "https://www.nice.org.uk/guidance/ng197"
        }
      ]
    },
    {
      "id": "result",
      "title": "An unexpected high blood-sugar result",
      "category": "Results",
      "patient": "Leena Shah, 52 · Telephone",
      "brief": "A screening HbA1c is 52 mmol/mol. Leena reports no typical diabetes symptoms and no known reason for HbA1c unreliability in the supplied record. Confirm the context and arrange confirmation rather than diagnosing from a text message. Acute symptoms or rapid deterioration change the pathway.",
      "goal": "Practise the structure, explain the next step and respond to this patient’s particular concern.",
      "atlas": "em-type2-diabetes",
      "studio": "c15",
      "links": [
        {
          "label": "NICE: identifying high risk and possible diabetes",
          "url": "https://www.nice.org.uk/guidance/ph38"
        },
        {
          "label": "NICE: type 2 diabetes management",
          "url": "https://www.nice.org.uk/guidance/ng28"
        },
        {
          "label": "NHS: diabetic ketoacidosis and emergency symptoms",
          "url": "https://www.nhs.uk/conditions/diabetic-ketoacidosis/"
        }
      ],
      "nodes": [
        {
          "id": "hello",
          "phrase": "hello",
          "stage": "open",
          "patient": "The text said my blood sugar is high. Does that mean diabetes?",
          "task": "Establish identity, privacy and who is involved.",
          "model": "Hello, I’m Dr Patel, one of the GPs. Could I confirm your name and date of birth? Is it safe and private for us to talk?",
          "simple": "Hello, I’m Dr Patel. Could you confirm your details? Can you talk privately?",
          "starter": "Hello, I’m… Could I check… Is it…",
          "purpose": "Introduce yourself accurately, confirm identity and establish whether sensitive discussion is safe.",
          "tip": "Pause for each answer. Establish location and a callback route when the clinical situation requires it.",
          "reply": "The patient confirms their details and that this fictional conversation is private.",
          "options": [
            "Establish identity, privacy and who is involved.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "Confirm the person and safe communication before discussing details.",
          "essential": [
            "Introduced role and confirmed identity",
            "Checked privacy and involvement"
          ],
          "improve": [
            "Pause for each answer. Establish location and a callback route when the clinical situation requires it."
          ],
          "next": "agenda"
        },
        {
          "id": "agenda",
          "phrase": "agenda",
          "stage": "open",
          "patient": "I want to understand the result, and whether I caused it.",
          "task": "Find the full agenda and agree a safe priority.",
          "model": "Before we decide where to start, is there anything else you were hoping we could discuss? Then we can agree what needs attention first.",
          "simple": "Is there anything else you wanted to discuss? Let’s agree where to start.",
          "starter": "Before we decide… is there anything else…",
          "purpose": "Find important concerns early, then agree a safe priority.",
          "tip": "An invitation is not a promise to finish every issue. Triage urgent concerns before deferring anything.",
          "reply": "The patient confirms the concerns described in the brief.",
          "options": [
            "Find the full agenda and agree a safe priority.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "Assess urgency before deciding what can wait.",
          "essential": [
            "Invited the full agenda",
            "Agreed a priority with attention to urgency"
          ],
          "improve": [
            "An invitation is not a promise to finish every issue. Triage urgent concerns before deferring anything."
          ],
          "next": "story"
        },
        {
          "id": "story",
          "phrase": "story",
          "stage": "understand",
          "patient": "I only had the test because it was offered at my health check.",
          "task": "Clarify understanding, symptoms and why the test was taken.",
          "model": "Could you tell me what you understood from the message, and whether you’ve noticed any changes in your health?",
          "simple": "What did the message say to you? Have you noticed any symptoms?",
          "starter": "Could you talk me through…",
          "purpose": "Let the patient describe the problem before narrowing the questions.",
          "tip": "Ask one question and allow an answer. Interrupt when an urgent finding requires immediate action.",
          "reply": "I feel well. I haven’t been especially thirsty or passing urine more often.",
          "options": [
            "Clarify understanding, symptoms and why the test was taken.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "Interpret a screening result in its clinical context; feeling well does not remove the need to act.",
          "essential": [
            "Explored the patient’s understanding",
            "Asked about relevant symptoms"
          ],
          "improve": [
            "Ask one question and allow an answer. Interrupt when an urgent finding requires immediate action."
          ],
          "next": "impact"
        },
        {
          "id": "impact",
          "phrase": "impact",
          "stage": "understand",
          "patient": "My mother had diabetes. I feel I’ve let myself down.",
          "task": "Explore the meaning of the result and respond without blame.",
          "model": "This result is not a judgement about you. What worries you most about what it might mean for your life?",
          "simple": "You haven’t failed. What worries you most about this result?",
          "starter": "How is this affecting… What is worrying…",
          "purpose": "Understand function and the patient’s concern, then use the answers in your plan.",
          "tip": "These are separate questions. Pause after the first and respond before asking the second.",
          "reply": "I’m afraid I’ll lose my job or need injections straight away.",
          "options": [
            "Explore the meaning of the result and respond without blame.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "Understanding the feared consequence lets the explanation address the actual concern.",
          "essential": [
            "Responded to the sense of blame",
            "Explored the specific feared consequences"
          ],
          "improve": [
            "These are separate questions. Pause after the first and respond before asking the second."
          ],
          "next": "focus"
        },
        {
          "id": "focus",
          "phrase": "focus",
          "stage": "focus",
          "patient": "Do I need treatment straight away?",
          "task": "Assess acute symptoms and whether HbA1c is suitable before choosing confirmation.",
          "model": "First I need to check whether you’re unwell. Have you had marked thirst, frequent urination, weight loss, vomiting or abdominal pain? Have you been unusually sleepy or breathing differently? I’ll also check factors that could affect this test’s accuracy.",
          "simple": "Have you had thirst, extra urination, weight loss, vomiting or unusual sleepiness?",
          "starter": "Thank you… I’d like to ask…",
          "purpose": "Choose questions that distinguish causes and change urgency or management.",
          "tip": "A signpost does not replace the actual assessment. Ask the relevant questions clearly, one at a time.",
          "reply": "No. I feel my usual self. The clinician checks the relevant history and confirms that repeat testing is appropriate in this scenario.",
          "options": [
            "Assess acute symptoms and whether HbA1c is suitable before choosing confirmation.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "Suspected acute diabetes or an unreliable HbA1c needs a different assessment pathway. Ask these questions individually.",
          "essential": [
            "Checked for symptoms that change urgency",
            "Considered whether the result is reliable in context"
          ],
          "improve": [
            "A signpost does not replace the actual assessment. Ask the relevant questions clearly, one at a time."
          ],
          "next": "summary"
        },
        {
          "id": "summary",
          "phrase": "summary",
          "stage": "focus",
          "patient": "So one result is enough to say I definitely have it?",
          "task": "Summarise the context and distinguish a concerning result from a confirmed diagnosis.",
          "model": "You feel well, and the test was part of screening. The HbA1c is above the diabetes threshold, but in someone without symptoms we need a second blood test to confirm the diagnosis. Have I understood your situation correctly?",
          "simple": "The result is above the threshold. As you have no symptoms, we need another test to confirm it.",
          "starter": "Let me check… Your main concern…",
          "purpose": "Check the facts and patient priority before explaining your assessment.",
          "tip": "A summary should be short and accurate. Correct it if the patient adds or changes information.",
          "reply": "Yes. I didn’t realise it needed confirming.",
          "options": [
            "Summarise the context and distinguish a concerning result from a confirmed diagnosis.",
            "Diagnose definite type 2 diabetes from this single asymptomatic screening result.",
            "Dismiss the result because the patient feels well."
          ],
          "answer": 0,
          "why": "An asymptomatic result at or above the diagnostic threshold requires confirmation; do not label it merely borderline.",
          "essential": [
            "Explained that the result needs action",
            "Explained the need for confirmation in this scenario"
          ],
          "improve": [
            "A summary should be short and accurate. Correct it if the patient adds or changes information."
          ],
          "next": "explain"
        },
        {
          "id": "explain",
          "phrase": "explain",
          "stage": "explain",
          "patient": "What does HbA1c actually mean?",
          "task": "Explain the test in everyday language before discussing treatment.",
          "model": "It is a blood test that gives a picture of your average blood-sugar level over the previous few months. Your result is higher than expected. We need to confirm it and then discuss what it means for you.",
          "simple": "It shows your average blood sugar over the last few months. Yours is high and needs confirming.",
          "starter": "From what you’ve told me… because…",
          "purpose": "Explain the reasoning at the right level of certainty.",
          "tip": "Avoid promising a diagnosis from an incomplete remote assessment. Explain what further assessment is needed.",
          "reply": "Does that mean I’ll definitely need insulin?",
          "options": [
            "Explain the test in everyday language before discussing treatment.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "Keep the explanation specific to the result and avoid predicting treatment before confirmation and assessment.",
          "essential": [
            "Explained the test clearly",
            "Avoided predicting treatment from one result"
          ],
          "improve": [
            "Avoid promising a diagnosis from an incomplete remote assessment. Explain what further assessment is needed."
          ],
          "next": "uncertainty"
        },
        {
          "id": "uncertainty",
          "phrase": "uncertainty",
          "stage": "explain",
          "patient": "I’m worried about injections.",
          "task": "Address the fear and connect uncertainty with a concrete next step.",
          "model": "Needing another test does not mean you will automatically need injections. If diabetes is confirmed, we’ll discuss the type, your overall health and suitable treatment options. What would help you feel clearer about the next step?",
          "simple": "We haven’t decided on treatment. First we confirm the result, then make a plan together.",
          "starter": "What we know… What we still need… The next step…",
          "purpose": "Make uncertainty understandable and attach it to a practical next step.",
          "tip": "Pause after a small amount of information. Respond to the patient’s question before adding more.",
          "reply": "I’d like to know when the repeat test will happen.",
          "options": [
            "Address the fear and connect uncertainty with a concrete next step.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "Do not promise that insulin will never be needed. Explain the current decision.",
          "essential": [
            "Addressed the concern about injections",
            "Kept the uncertainty linked to confirmation"
          ],
          "improve": [
            "Pause after a small amount of information. Respond to the patient’s question before adding more."
          ],
          "next": "recommend"
        },
        {
          "id": "recommend",
          "phrase": "recommend",
          "stage": "plan",
          "patient": "What do we do next?",
          "task": "Arrange confirmation with clear results ownership.",
          "model": "I recommend arranging the repeat blood test promptly. We’ll agree who reviews the result and how you will hear from us. If it confirms diabetes, we’ll arrange the further assessment and discuss a suitable management plan.",
          "simple": "Let’s book the repeat test and agree when and how we’ll discuss the result.",
          "starter": "I recommend… because… What are your thoughts…",
          "purpose": "Offer a clinically appropriate recommendation and invite the patient’s view.",
          "tip": "Discuss relevant alternatives, risks and the consequences of no change when appropriate. Urgency affects available choices.",
          "reply": "I can’t easily take time off work.",
          "options": [
            "Arrange confirmation with clear results ownership.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "A test request alone does not close the loop; arrange review and communication.",
          "essential": [
            "Arranged a confirmation plan",
            "Named the need for result review and communication"
          ],
          "improve": [
            "Discuss relevant alternatives, risks and the consequences of no change when appropriate. Urgency affects available choices."
          ],
          "next": "barrier"
        },
        {
          "id": "barrier",
          "phrase": "barrier",
          "stage": "plan",
          "patient": "I start work at eight every morning.",
          "task": "Address access and confirm the practical arrangements.",
          "model": "What appointment times could you manage? Let’s check what is available and agree a plan you can attend. In this scenario, we can confirm a suitable appointment within the local confirmation pathway.",
          "simple": "When could you come? Let’s check an appointment that works.",
          "starter": "What might make… Let’s work through…",
          "purpose": "Find the actual obstacle and agree arrangements the patient can use.",
          "tip": "Respond to the specific answer. Keep a necessary clinical recommendation clear while addressing practical barriers.",
          "reply": "The practice confirms an early appointment and a clinician callback after the result is available.",
          "options": [
            "Address access and confirm the practical arrangements.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "Offer only real availability. Timing follows the local diagnostic pathway and clinical assessment.",
          "essential": [
            "Explored work-related access",
            "Confirmed a feasible test and review arrangement"
          ],
          "improve": [
            "Respond to the specific answer. Keep a necessary clinical recommendation clear while addressing practical barriers."
          ],
          "next": "safety"
        },
        {
          "id": "safety",
          "phrase": "safety",
          "stage": "close",
          "patient": "What if I feel unwell while I’m waiting?",
          "task": "Provide earlier-help advice matched to possible deterioration.",
          "model": "Don’t wait for the repeat test if you develop marked thirst, frequent urination or unexplained weight loss—contact us promptly. If you become unwell with vomiting or abdominal pain, especially with deep breathing, sleepiness or confusion, call 999 or go to A&E immediately. These can be signs of a diabetes emergency, even before a diagnosis is confirmed. Do not drive yourself.",
          "simple": "New thirst or passing urine more often needs prompt advice. Vomiting or abdominal pain with deep breathing, sleepiness or confusion needs emergency help now. Do not drive yourself.",
          "starter": "If… please… If things have not… by…",
          "purpose": "Give relevant warning signs, a contact route, urgency and a review plan.",
          "tip": "Choose advice for this patient and condition. “Come back if worse” alone leaves the action unclear.",
          "reply": "I’ll seek help sooner if symptoms develop.",
          "options": [
            "Provide earlier-help advice matched to possible deterioration.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "Do not treat a planned repeat test as a reason to delay assessing acute illness.",
          "essential": [
            "Explained symptoms that require earlier assessment",
            "Gave an emergency route for severe deterioration"
          ],
          "improve": [
            "Choose advice for this patient and condition. “Come back if worse” alone leaves the action unclear."
          ],
          "next": "check"
        },
        {
          "id": "check",
          "phrase": "check",
          "stage": "close",
          "patient": "Could you remind me who will contact me?",
          "task": "Use teach-back and explicitly retain responsibility for results.",
          "model": "Could you talk me through the plan in your own words so I can check I’ve explained it clearly? The practice will review the repeat result and contact you using the agreed number. If you have not heard by the agreed date, please contact us; we remain responsible for checking the result.",
          "simple": "The practice will review and contact you. Could you tell me the plan back?",
          "starter": "Just so I can check… could you tell me… I will…",
          "purpose": "Check understanding, correct gaps and name who will arrange and review each action.",
          "tip": "Make teach-back about the clarity of your explanation. Resolve any misunderstanding before closing.",
          "reply": "I’ll attend the booked test. The practice will review and contact me, and I’ll call if I haven’t heard by our agreed date.",
          "options": [
            "Use teach-back and explicitly retain responsibility for results.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "A patient backup contact plan complements clinician ownership; it does not transfer responsibility.",
          "essential": [
            "Checked the patient’s understanding",
            "Confirmed review ownership and a backup contact plan"
          ],
          "improve": [
            "Make teach-back about the clarity of your explanation. Resolve any misunderstanding before closing."
          ],
          "next": null
        }
      ],
      "atlasLabel": "After confirmation: type 2 management ↗"
    },
    {
      "id": "asthma",
      "title": "The reliever inhaler is needed more often",
      "category": "Chronic disease",
      "patient": "Omar Khan, 29 · Video",
      "brief": "Omar has confirmed asthma and requests another blue reliever inhaler. Increased use and night symptoms require assessment of current severity and control. This lesson teaches the discussion and review process, not a complete prescribing regimen.",
      "goal": "Practise the structure, explain the next step and respond to this patient’s particular concern.",
      "atlas": "rs-adult-asthma",
      "studio": "c5",
      "links": [
        {
          "label": "NICE: asthma assessment and management",
          "url": "https://www.nice.org.uk/guidance/ng245"
        },
        {
          "label": "NHS: asthma and emergency help",
          "url": "https://www.nhs.uk/conditions/asthma/"
        }
      ],
      "nodes": [
        {
          "id": "hello",
          "phrase": "hello",
          "stage": "open",
          "patient": "Could you just send another blue inhaler?",
          "task": "Establish identity, privacy and who is involved.",
          "model": "Hello, I’m Dr Patel, one of the GPs. Could I confirm your name and date of birth? Is it safe and private for us to talk?",
          "simple": "Hello, I’m Dr Patel. Could you confirm your details? Can you talk privately?",
          "starter": "Hello, I’m… Could I check… Is it…",
          "purpose": "Introduce yourself accurately, confirm identity and establish whether sensitive discussion is safe.",
          "tip": "Pause for each answer. Establish location and a callback route when the clinical situation requires it.",
          "reply": "The patient confirms their details and that this fictional conversation is private.",
          "options": [
            "Establish identity, privacy and who is involved.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "Confirm the person and safe communication before discussing details.",
          "essential": [
            "Introduced role and confirmed identity",
            "Checked privacy and involvement"
          ],
          "improve": [
            "Pause for each answer. Establish location and a callback route when the clinical situation requires it."
          ],
          "next": "agenda"
        },
        {
          "id": "agenda",
          "phrase": "agenda",
          "stage": "open",
          "patient": "I need the inhaler, and I’m not sleeping well.",
          "task": "Find the full agenda and agree a safe priority.",
          "model": "Before we decide where to start, is there anything else you were hoping we could discuss? Then we can agree what needs attention first.",
          "simple": "Is there anything else you wanted to discuss? Let’s agree where to start.",
          "starter": "Before we decide… is there anything else…",
          "purpose": "Find important concerns early, then agree a safe priority.",
          "tip": "An invitation is not a promise to finish every issue. Triage urgent concerns before deferring anything.",
          "reply": "The patient confirms the concerns described in the brief.",
          "options": [
            "Find the full agenda and agree a safe priority.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "Assess urgency before deciding what can wait.",
          "essential": [
            "Invited the full agenda",
            "Agreed a priority with attention to urgency"
          ],
          "improve": [
            "An invitation is not a promise to finish every issue. Triage urgent concerns before deferring anything."
          ],
          "next": "story"
        },
        {
          "id": "story",
          "phrase": "story",
          "stage": "understand",
          "patient": "I’ve needed it most days this week.",
          "task": "Establish current severity as well as the recent pattern.",
          "model": "Could you talk me through your breathing over the last week, including how you are feeling right now?",
          "simple": "How has your breathing been this week? How is it now?",
          "starter": "Could you talk me through…",
          "purpose": "Let the patient describe the problem before narrowing the questions.",
          "tip": "Ask one question and allow an answer. Interrupt when an urgent finding requires immediate action.",
          "reply": "I’m comfortable sitting here now, but I’ve woken coughing several nights.",
          "options": [
            "Establish current severity as well as the recent pattern.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "A routine refill request can conceal an exacerbation; assess the person now.",
          "essential": [
            "Asked about current symptoms",
            "Explored recent and night symptoms"
          ],
          "improve": [
            "Ask one question and allow an answer. Interrupt when an urgent finding requires immediate action."
          ],
          "next": "impact"
        },
        {
          "id": "impact",
          "phrase": "impact",
          "stage": "understand",
          "patient": "I’m worried I’ll get breathless at work.",
          "task": "Explore function and understanding of treatment.",
          "model": "That sounds worrying, especially when you’re working. What has the breathing stopped you doing, and what would you most like to get back to?",
          "simple": "What is your breathing stopping you doing? What worries you most?",
          "starter": "How is this affecting… What is worrying…",
          "purpose": "Understand function and the patient’s concern, then use the answers in your plan.",
          "tip": "These are separate questions. Pause after the first and respond before asking the second.",
          "reply": "I’ve stopped playing football. I thought the blue inhaler was all I needed.",
          "options": [
            "Explore function and understanding of treatment.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "The patient’s goals and beliefs help explain actual medicine use.",
          "essential": [
            "Explored functional impact",
            "Asked about the patient’s treatment understanding"
          ],
          "improve": [
            "These are separate questions. Pause after the first and respond before asking the second."
          ],
          "next": "focus"
        },
        {
          "id": "focus",
          "phrase": "focus",
          "stage": "focus",
          "patient": "I’m not struggling right now. What else do you need to know?",
          "task": "Assess severity, actual use and technique before changing treatment.",
          "model": "I need to check how severe the symptoms have been, your reliever use and any attacks. Are you able to speak normally and walk about? I’d also like to review your peak-flow readings if available, previous serious attacks and which inhalers you actually use.",
          "simple": "Let’s check severity, reliever use, previous attacks and your actual inhalers.",
          "starter": "Thank you… I’d like to ask…",
          "purpose": "Choose questions that distinguish causes and change urgency or management.",
          "tip": "A signpost does not replace the actual assessment. Ask the relevant questions clearly, one at a time.",
          "reply": "No severe symptoms now. I stopped the preventer months ago. I’m not sure I use it correctly. A prompt in-person review is arranged according to the clinical assessment.",
          "options": [
            "Assess severity, actual use and technique before changing treatment.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "Current symptoms determine urgency. A remote conversation alone cannot supply measurements or technique assessment that has not occurred.",
          "essential": [
            "Assessed severity and risk history",
            "Explored preventer use and technique"
          ],
          "improve": [
            "A signpost does not replace the actual assessment. Ask the relevant questions clearly, one at a time."
          ],
          "next": "summary"
        },
        {
          "id": "summary",
          "phrase": "summary",
          "stage": "focus",
          "patient": "So the waking at night matters?",
          "task": "Summarise control and follow up the reason for stopping treatment.",
          "model": "You’ve needed relief most days and have been waking with symptoms. Those suggest your asthma is not well controlled. You’ve also stopped the preventer. Have I got that right?",
          "simple": "The frequent reliever and night symptoms suggest poor control. Is that right?",
          "starter": "Let me check… Your main concern…",
          "purpose": "Check the facts and patient priority before explaining your assessment.",
          "tip": "A summary should be short and accurate. Correct it if the patient adds or changes information.",
          "reply": "Yes. I stopped it because I was worried about steroids.",
          "options": [
            "Summarise control and follow up the reason for stopping treatment.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "Avoid labelling the person as non-compliant; identify the reason.",
          "essential": [
            "Linked symptoms to control",
            "Invited correction and explored the medicine concern"
          ],
          "improve": [
            "A summary should be short and accurate. Correct it if the patient adds or changes information."
          ],
          "next": "explain"
        },
        {
          "id": "explain",
          "phrase": "explain",
          "stage": "explain",
          "patient": "Are steroids dangerous?",
          "task": "Explain the role of anti-inflammatory treatment and explore the specific fear.",
          "model": "The inhaled anti-inflammatory treatment helps control swelling in the airways and reduce attacks. We should discuss benefits and possible side effects of the appropriate inhaler, and check how to use it. What have you heard that worries you?",
          "simple": "The preventer reduces airway inflammation. Let’s discuss its benefits, side effects and your concern.",
          "starter": "From what you’ve told me… because…",
          "purpose": "Explain the reasoning at the right level of certainty.",
          "tip": "Avoid promising a diagnosis from an incomplete remote assessment. Explain what further assessment is needed.",
          "reply": "I thought any steroid would make me gain a lot of weight.",
          "options": [
            "Explain the role of anti-inflammatory treatment and explore the specific fear.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "Avoid treating all steroid formulations, doses and risks as identical.",
          "essential": [
            "Explained the purpose of inhaled treatment",
            "Explored the specific feared harm"
          ],
          "improve": [
            "Avoid promising a diagnosis from an incomplete remote assessment. Explain what further assessment is needed."
          ],
          "next": "uncertainty"
        },
        {
          "id": "uncertainty",
          "phrase": "uncertainty",
          "stage": "explain",
          "patient": "Can you decide everything from this video call?",
          "task": "Explain what assessment remains and how it changes the plan.",
          "model": "We can identify that you need a review, but we still need to assess control, check measurements where appropriate and watch your inhaler technique. That will help us choose the right treatment and written action plan.",
          "simple": "We need to review control and your technique before agreeing the treatment.",
          "starter": "What we know… What we still need… The next step…",
          "purpose": "Make uncertainty understandable and attach it to a practical next step.",
          "tip": "Pause after a small amount of information. Respond to the patient’s question before adding more.",
          "reply": "I’d like somebody to show me how to use it.",
          "options": [
            "Explain what assessment remains and how it changes the plan.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "Checking technique and actual use can address poor control; do not automatically escalate without review.",
          "essential": [
            "Identified missing assessment",
            "Linked it to the treatment decision"
          ],
          "improve": [
            "Pause after a small amount of information. Respond to the patient’s question before adding more."
          ],
          "next": "recommend"
        },
        {
          "id": "recommend",
          "phrase": "recommend",
          "stage": "plan",
          "patient": "Will you just give me more blue inhalers?",
          "task": "Recommend an ICS-containing approach with assessment and an action plan.",
          "model": "I don’t recommend managing asthma with a blue reliever alone. We need an appropriate inhaled anti-inflammatory treatment plan, following the current pathway. Let’s review your inhalers and choose a suitable regimen, with clear instructions and an action plan.",
          "simple": "We need a treatment plan that includes anti-inflammatory treatment, not just repeated blue inhalers.",
          "starter": "I recommend… because… What are your thoughts…",
          "purpose": "Offer a clinically appropriate recommendation and invite the patient’s view.",
          "tip": "Discuss relevant alternatives, risks and the consequences of no change when appropriate. Urgency affects available choices.",
          "reply": "I’m willing to try, but I’ll forget doses on shifts.",
          "options": [
            "Recommend an ICS-containing approach with assessment and an action plan.",
            "Keep issuing SABA alone because the patient prefers it.",
            "Increase treatment without reviewing technique, actual use or current severity."
          ],
          "answer": 0,
          "why": "Current guidance advises against SABA-only treatment. Exact regimen and licensed use depend on assessment.",
          "essential": [
            "Avoided endorsing SABA-only management",
            "Proposed an individualised review and action plan"
          ],
          "improve": [
            "Discuss relevant alternatives, risks and the consequences of no change when appropriate. Urgency affects available choices."
          ],
          "next": "barrier"
        },
        {
          "id": "barrier",
          "phrase": "barrier",
          "stage": "plan",
          "patient": "My shifts make routines difficult.",
          "task": "Adapt a clinically appropriate plan to the actual barrier.",
          "model": "Which parts of your day are predictable? Let’s discuss an appropriate regimen you can use safely, check the device with you and agree reminders that fit your shifts.",
          "simple": "What routine could work around your shifts? Let’s choose and practise an appropriate inhaler plan.",
          "starter": "What might make… Let’s work through…",
          "purpose": "Find the actual obstacle and agree arrangements the patient can use.",
          "tip": "Respond to the specific answer. Keep a necessary clinical recommendation clear while addressing practical barriers.",
          "reply": "I could link it to brushing my teeth, if that matches the regimen we agree.",
          "options": [
            "Adapt a clinically appropriate plan to the actual barrier.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "Do not invent dosing advice; demonstrate the prescribed regimen and confirm understanding.",
          "essential": [
            "Explored the practical barrier",
            "Kept routines linked to the agreed regimen"
          ],
          "improve": [
            "Respond to the specific answer. Keep a necessary clinical recommendation clear while addressing practical barriers."
          ],
          "next": "safety"
        },
        {
          "id": "safety",
          "phrase": "safety",
          "stage": "close",
          "patient": "What if I have an attack before the review?",
          "task": "Give device-specific safety advice and an emergency route.",
          "model": "Follow your personalised asthma action plan and the instructions for your actual reliever. If you are having an attack and getting worse, or the reliever is not helping, call 999. Don’t drive yourself. Increased symptoms or needing relief more often also need prompt medical advice.",
          "simple": "Use your action plan. An attack that is worsening or not responding to your reliever needs 999.",
          "starter": "If… please… If things have not… by…",
          "purpose": "Give relevant warning signs, a contact route, urgency and a review plan.",
          "tip": "Choose advice for this patient and condition. “Come back if worse” alone leaves the action unclear.",
          "reply": "I’ll follow my plan and call 999 if the reliever isn’t helping during an attack.",
          "options": [
            "Give device-specific safety advice and an emergency route.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "Reliever instructions differ by regimen. Avoid giving one universal inhaler dose.",
          "essential": [
            "Linked advice to the actual action plan",
            "Specified when emergency help is needed"
          ],
          "improve": [
            "Choose advice for this patient and condition. “Come back if worse” alone leaves the action unclear."
          ],
          "next": "check"
        },
        {
          "id": "check",
          "phrase": "check",
          "stage": "close",
          "patient": "What should I do after this call?",
          "task": "Confirm the arrangements and ongoing review.",
          "model": "Could you tell me the plan in your own words? We’ll confirm the assessment appointment, review your inhalers and technique, give you a written action plan and agree a follow-up date. We’ll also check how you are getting on with the change.",
          "simple": "Let’s check the plan: assessment, inhaler teaching, written action plan and follow-up.",
          "starter": "Just so I can check… could you tell me… I will…",
          "purpose": "Check understanding, correct gaps and name who will arrange and review each action.",
          "tip": "Make teach-back about the clarity of your explanation. Resolve any misunderstanding before closing.",
          "reply": "I’ll attend the review with all my inhalers and seek help earlier if my breathing worsens.",
          "options": [
            "Confirm the arrangements and ongoing review.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "Control, technique and response need follow-up after a change.",
          "essential": [
            "Used teach-back",
            "Named assessment, action-plan and follow-up responsibilities"
          ],
          "improve": [
            "Make teach-back about the clarity of your explanation. Resolve any misunderstanding before closing."
          ],
          "next": null
        }
      ]
    },
    {
      "id": "distress",
      "title": "Low mood after a relationship breakdown",
      "category": "Emotional distress",
      "patient": "Alex Morgan, 38 · Telephone",
      "brief": "Alex reports poor sleep, low mood and difficulty working after separation. Do not assume this is simply a normal reaction or diagnose from duration alone. Assess symptoms, function, risk and preferences. The urgent branch is a separate practice scenario.",
      "goal": "Practise the structure, explain the next step and respond to this patient’s particular concern.",
      "atlas": "mh-adjustment",
      "studio": null,
      "links": [
        {
          "label": "NICE: depression assessment and management",
          "url": "https://www.nice.org.uk/guidance/ng222"
        },
        {
          "label": "NHS: urgent mental health help",
          "url": "https://www.nhs.uk/nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/"
        }
      ],
      "nodes": [
        {
          "id": "hello",
          "phrase": "hello",
          "stage": "open",
          "patient": "I don’t know why I booked. I’m not coping.",
          "task": "Establish identity, privacy and who is involved.",
          "model": "Hello, I’m Dr Patel, one of the GPs. Could I confirm your name and date of birth? Is it safe and private for us to talk?",
          "simple": "Hello, I’m Dr Patel. Could you confirm your details? Can you talk privately?",
          "starter": "Hello, I’m… Could I check… Is it…",
          "purpose": "Introduce yourself accurately, confirm identity and establish whether sensitive discussion is safe.",
          "tip": "Pause for each answer. Establish location and a callback route when the clinical situation requires it.",
          "reply": "The patient confirms their details and that this fictional conversation is private.",
          "options": [
            "Establish identity, privacy and who is involved.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "Confirm the person and safe communication before discussing details.",
          "essential": [
            "Introduced role and confirmed identity",
            "Checked privacy and involvement"
          ],
          "improve": [
            "Pause for each answer. Establish location and a callback route when the clinical situation requires it."
          ],
          "next": "agenda"
        },
        {
          "id": "agenda",
          "phrase": "agenda",
          "stage": "open",
          "patient": "I need to sleep, but everything feels too much.",
          "task": "Find the full agenda and agree a safe priority.",
          "model": "Before we decide where to start, is there anything else you were hoping we could discuss? Then we can agree what needs attention first.",
          "simple": "Is there anything else you wanted to discuss? Let’s agree where to start.",
          "starter": "Before we decide… is there anything else…",
          "purpose": "Find important concerns early, then agree a safe priority.",
          "tip": "An invitation is not a promise to finish every issue. Triage urgent concerns before deferring anything.",
          "reply": "The patient confirms the concerns described in the brief.",
          "options": [
            "Find the full agenda and agree a safe priority.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "Assess urgency before deciding what can wait.",
          "essential": [
            "Invited the full agenda",
            "Agreed a priority with attention to urgency"
          ],
          "improve": [
            "An invitation is not a promise to finish every issue. Triage urgent concerns before deferring anything."
          ],
          "next": "story"
        },
        {
          "id": "story",
          "phrase": "story",
          "stage": "understand",
          "patient": "My partner left six weeks ago.",
          "task": "Hear the symptoms and context without prematurely labelling them.",
          "model": "I’m glad you came to talk. Could you tell me what the last few weeks have been like for you?",
          "simple": "Could you tell me what has been hardest recently?",
          "starter": "Could you talk me through…",
          "purpose": "Let the patient describe the problem before narrowing the questions.",
          "tip": "Ask one question and allow an answer. Interrupt when an urgent finding requires immediate action.",
          "reply": "I lie awake, can’t concentrate and have stopped seeing friends.",
          "options": [
            "Hear the symptoms and context without prematurely labelling them.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "A life event does not remove the need to assess depression, other causes and risk.",
          "essential": [
            "Invited the patient’s account",
            "Explored the symptom pattern and context"
          ],
          "improve": [
            "Ask one question and allow an answer. Interrupt when an urgent finding requires immediate action."
          ],
          "next": "impact"
        },
        {
          "id": "impact",
          "phrase": "impact",
          "stage": "understand",
          "patient": "I’m ashamed. Other people cope with break-ups.",
          "task": "Acknowledge this person’s experience and explore function.",
          "model": "You’re dealing with a major change and it sounds as though daily life has become very difficult. What has been hardest to manage?",
          "simple": "This has been very difficult for you. What is hardest day to day?",
          "starter": "How is this affecting… What is worrying…",
          "purpose": "Understand function and the patient’s concern, then use the answers in your plan.",
          "tip": "These are separate questions. Pause after the first and respond before asking the second.",
          "reply": "I’m missing work and barely eating.",
          "options": [
            "Acknowledge this person’s experience and explore function.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "Avoid comparing distress with other people or minimising the impact.",
          "essential": [
            "Reflected the patient’s actual experience",
            "Explored functioning and basic needs"
          ],
          "improve": [
            "These are separate questions. Pause after the first and respond before asking the second."
          ],
          "next": "focus"
        },
        {
          "id": "focus",
          "phrase": "focus",
          "stage": "focus",
          "patient": "Sometimes I just want everything to stop.",
          "task": "Ask directly about suicide and assess the answer, rather than infer risk.",
          "model": "When things feel this difficult, have you had thoughts about ending your life? Are you having those thoughts now? I’d like to understand any plans, access to means and what has helped you stay safe.",
          "simple": "Have you been thinking about suicide? Are those thoughts happening now?",
          "starter": "Thank you… I’d like to ask…",
          "purpose": "Choose questions that distinguish causes and change urgency or management.",
          "tip": "A signpost does not replace the actual assessment. Ask the relevant questions clearly, one at a time.",
          "reply": "I’ve felt overwhelmed, but I have no thoughts of suicide or self-harm. The clinician continues a fuller risk and mental-state assessment; no immediate safety concern emerges in this ordinary path.",
          "options": [
            "Ask directly about suicide and assess the answer, rather than infer risk.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "Continue assessment of intent, plans, access, past behaviour, support and immediate safety where indicated. A denial alone is not a complete assessment.",
          "essential": [
            "Asked directly and clearly about suicide",
            "Recognised the need for a fuller individual risk assessment"
          ],
          "improve": [
            "A signpost does not replace the actual assessment. Ask the relevant questions clearly, one at a time."
          ],
          "next": "summary",
          "branch": {
            "label": "Practise an immediate-risk answer",
            "patient": "I have the tablets beside me and I’m planning to take them tonight. I don’t think I can keep myself safe.",
            "next": "urgent"
          }
        },
        {
          "id": "summary",
          "phrase": "summary",
          "stage": "focus",
          "patient": "Does that mean you think I’m depressed?",
          "task": "Summarise and check relevant diagnostic alternatives.",
          "model": "You’ve described low mood, poor sleep, reduced appetite and difficulty functioning after the separation. We need to understand the full pattern, including previous episodes and any periods of unusually high mood, before settling on an assessment. What have I missed?",
          "simple": "You’ve described several symptoms that need assessment. Let’s check the full picture before deciding.",
          "starter": "Let me check… Your main concern…",
          "purpose": "Check the facts and patient priority before explaining your assessment.",
          "tip": "A summary should be short and accurate. Correct it if the patient adds or changes information.",
          "reply": "I’ve never had a period of feeling unusually high or needing almost no sleep.",
          "options": [
            "Summarise and check relevant diagnostic alternatives.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "Use history, severity and function together; consider bipolarity and physical or substance contributors.",
          "essential": [
            "Summarised symptoms and impairment",
            "Acknowledged relevant alternatives and missing assessment"
          ],
          "improve": [
            "A summary should be short and accurate. Correct it if the patient adds or changes information."
          ],
          "next": "explain"
        },
        {
          "id": "explain",
          "phrase": "explain",
          "stage": "explain",
          "patient": "I thought you would just tell me to pull myself together.",
          "task": "Validate the need for help and explain an assessment-led approach.",
          "model": "What you’ve described deserves help. We can work through the possible explanations and choose support that fits how severe the symptoms are and what matters to you.",
          "simple": "You deserve support. Let’s discuss what could help.",
          "starter": "From what you’ve told me… because…",
          "purpose": "Explain the reasoning at the right level of certainty.",
          "tip": "Avoid promising a diagnosis from an incomplete remote assessment. Explain what further assessment is needed.",
          "reply": "I’d prefer some help talking things through if possible.",
          "options": [
            "Validate the need for help and explain an assessment-led approach.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "Avoid guaranteeing a particular diagnosis or making treatment depend on a symptom count alone.",
          "essential": [
            "Validated without judgement",
            "Linked support to severity and preferences"
          ],
          "improve": [
            "Avoid promising a diagnosis from an incomplete remote assessment. Explain what further assessment is needed."
          ],
          "next": "uncertainty"
        },
        {
          "id": "uncertainty",
          "phrase": "uncertainty",
          "stage": "explain",
          "patient": "Can you say exactly how long recovery will take?",
          "task": "Acknowledge uncertainty and establish a practical goal.",
          "model": "I can’t give an exact timescale. We can agree a treatment or support plan, review how you are doing and adjust it. What would be the most useful first change for you?",
          "simple": "We can’t predict an exact recovery date. We can agree help and review progress.",
          "starter": "What we know… What we still need… The next step…",
          "purpose": "Make uncertainty understandable and attach it to a practical next step.",
          "tip": "Pause after a small amount of information. Respond to the patient’s question before adding more.",
          "reply": "Being able to eat regularly and get back to work would help.",
          "options": [
            "Acknowledge uncertainty and establish a practical goal.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "Hope is compatible with an honest review plan; avoid promising rapid recovery.",
          "essential": [
            "Explained uncertainty honestly",
            "Identified a patient-centred goal"
          ],
          "improve": [
            "Pause after a small amount of information. Respond to the patient’s question before adding more."
          ],
          "next": "recommend"
        },
        {
          "id": "recommend",
          "phrase": "recommend",
          "stage": "plan",
          "patient": "What are my options?",
          "task": "Discuss clinically suitable options and the patient’s preference.",
          "model": "Depending on the assessment, options can include structured self-help, psychological support and, when appropriate, medicines. We should discuss the benefits, burdens and your preference. Let’s agree support for eating, sleep and work as well as the main treatment.",
          "simple": "Let’s discuss suitable talking or self-help options and whether medicine is appropriate for your situation.",
          "starter": "I recommend… because… What are your thoughts…",
          "purpose": "Offer a clinically appropriate recommendation and invite the patient’s view.",
          "tip": "Discuss relevant alternatives, risks and the consequences of no change when appropriate. Urgency affects available choices.",
          "reply": "I’d like to start with psychological support, if it is suitable.",
          "options": [
            "Discuss clinically suitable options and the patient’s preference.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "Treatment selection depends on severity, previous response, risk and preference. Antidepressants are not automatic for every presentation.",
          "essential": [
            "Discussed suitable options without a blanket prescription",
            "Included preferences and immediate functional needs"
          ],
          "improve": [
            "Discuss relevant alternatives, risks and the consequences of no change when appropriate. Urgency affects available choices."
          ],
          "next": "barrier"
        },
        {
          "id": "barrier",
          "phrase": "barrier",
          "stage": "plan",
          "patient": "I’m worried there will be a long wait.",
          "task": "Address access and mobilise support with consent.",
          "model": "Let’s check what is actually available and how to access it. We’ll agree support while you wait and an earlier review if things worsen. Who could help you with meals or getting through the next few days?",
          "simple": "Let’s check access and agree help while you wait. Who could support you now?",
          "starter": "What might make… Let’s work through…",
          "purpose": "Find the actual obstacle and agree arrangements the patient can use.",
          "tip": "Respond to the specific answer. Keep a necessary clinical recommendation clear while addressing practical barriers.",
          "reply": "My sister could help. I’d like her involved, with my permission.",
          "options": [
            "Address access and mobilise support with consent.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "A referral alone may leave an unsupported waiting period. Agree practical interim care.",
          "essential": [
            "Checked the access barrier",
            "Agreed interim support and consent to involvement"
          ],
          "improve": [
            "Respond to the specific answer. Keep a necessary clinical recommendation clear while addressing practical barriers."
          ],
          "next": "safety"
        },
        {
          "id": "safety",
          "phrase": "safety",
          "stage": "close",
          "patient": "Who do I contact if things get much worse?",
          "task": "Provide a specific safety plan matched to local services and urgency.",
          "model": "If you feel unable to keep yourself safe or there is immediate danger, call 999 or go to A&E. For urgent mental health help without immediate danger, use the local urgent mental health service or NHS 111 in England. We’ll write down the relevant local contacts and an earlier-help plan.",
          "simple": "Immediate danger needs 999. For urgent support, use the local crisis route we agree today.",
          "starter": "If… please… If things have not… by…",
          "purpose": "Give relevant warning signs, a contact route, urgency and a review plan.",
          "tip": "Choose advice for this patient and condition. “Come back if worse” alone leaves the action unclear.",
          "reply": "I’ll keep the contacts and ask for help earlier if I’m struggling.",
          "options": [
            "Provide a specific safety plan matched to local services and urgency.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "Urgent mental health routes vary across UK nations. Use the patient’s actual location and pathway.",
          "essential": [
            "Distinguished immediate danger from urgent support",
            "Agreed accessible local contacts and earlier help"
          ],
          "improve": [
            "Choose advice for this patient and condition. “Come back if worse” alone leaves the action unclear."
          ],
          "next": "check"
        },
        {
          "id": "check",
          "phrase": "check",
          "stage": "close",
          "patient": "Will someone check on me?",
          "task": "Confirm review, support and the patient’s understanding.",
          "model": "Yes. Let’s confirm the review appointment and what we’ll check then. Could you tell me the plan and who you would contact if you felt unsafe? With your agreement, we can include your sister in the support plan.",
          "simple": "Let’s book the review and check your safety contacts and support.",
          "starter": "Just so I can check… could you tell me… I will…",
          "purpose": "Check understanding, correct gaps and name who will arrange and review each action.",
          "tip": "Make teach-back about the clarity of your explanation. Resolve any misunderstanding before closing.",
          "reply": "I’ll use the agreed support, attend the booked review and seek help sooner if I feel unsafe.",
          "options": [
            "Confirm review, support and the patient’s understanding.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "Review timing follows severity, risk and any treatment started; do not leave it as “come back if needed”.",
          "essential": [
            "Confirmed a definite review arrangement",
            "Checked understanding of support and earlier-help routes"
          ],
          "improve": [
            "Make teach-back about the clarity of your explanation. Resolve any misunderstanding before closing."
          ],
          "next": null
        },
        {
          "id": "urgent",
          "phrase": "focus",
          "stage": "focus",
          "patient": "I have the tablets beside me and I’m planning to take them tonight. I don’t think I can keep myself safe.",
          "task": "Arrange immediate safety and emergency assessment.",
          "model": "Thank you for telling me. I’m concerned about your immediate safety. Let’s confirm exactly where you are and a callback number. I will arrange emergency help now and stay in contact while we make the handover. If it can be done safely, move away from the tablets and let us involve someone you trust.",
          "simple": "I’m concerned you may be in immediate danger. Let’s confirm where you are and arrange emergency help now.",
          "starter": "Thank you for telling me… I’m concerned… I will arrange…",
          "purpose": "Act on a time-critical finding and make the handover practical.",
          "tip": "Stop routine teaching and management when a real emergency is identified. Follow the emergency pathway, maintain contact as appropriate and document the handover.",
          "reply": "The clinician confirms the location, arranges emergency help and makes an accepted handover in this fictional scenario.",
          "options": [
            "Arrange immediate safety measures and emergency assessment.",
            "Finish routine sleep advice and review next month.",
            "Ask for a promise not to act and end the call."
          ],
          "answer": 0,
          "why": "Stated intent, means and inability to stay safe require immediate action. A safety promise is not a substitute for assessment and an actual handover.",
          "essential": [
            "Recognised immediate danger",
            "Arranged emergency help and practical handover"
          ],
          "improve": [
            "Keep contact and involve appropriate support safely; follow the local emergency pathway."
          ],
          "next": null
        }
      ]
    },
    {
      "id": "eczema",
      "title": "A parent is frightened of steroid cream",
      "category": "Treatment disagreement",
      "patient": "Maya’s parent · Maya is 6 · Video",
      "brief": "A parent has not used a prescribed topical corticosteroid because of fears about harm. Establish who is present, hear the child where appropriate, assess the skin and possible infection, then explain a practical written treatment plan.",
      "goal": "Practise the structure, explain the next step and respond to this patient’s particular concern.",
      "atlas": "pd-eczema",
      "studio": null,
      "links": [
        {
          "label": "NICE: childhood eczema",
          "url": "https://www.nice.org.uk/guidance/cg57"
        },
        {
          "label": "NHS: atopic eczema",
          "url": "https://www.nhs.uk/conditions/atopic-eczema/"
        }
      ],
      "nodes": [
        {
          "id": "hello",
          "phrase": "hello",
          "stage": "open",
          "patient": "I’m not putting that steroid on my daughter.",
          "task": "Establish identity, privacy and who is involved.",
          "model": "Hello, I’m Dr Patel, one of the GPs. Could I check your name, your relationship to Maya and her details? Is Maya with you, and can we talk privately? I’d like to include her in a way that suits her age.",
          "simple": "Could I check your details and Maya’s? Who is with you? Let’s include Maya in the conversation.",
          "starter": "Hello, I’m… Could I check… Is it…",
          "purpose": "Introduce yourself accurately, confirm identity and establish whether sensitive discussion is safe.",
          "tip": "Pause for each answer. Establish location and a callback route when the clinical situation requires it.",
          "reply": "The patient confirms their details and that this fictional conversation is private.",
          "options": [
            "Establish identity, privacy and who is involved.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "Confirm the person and safe communication before discussing details.",
          "essential": [
            "Confirmed the child, adult and relationship",
            "Checked privacy and included the child appropriately"
          ],
          "improve": [
            "Pause for each answer. Establish location and a callback route when the clinical situation requires it."
          ],
          "next": "agenda"
        },
        {
          "id": "agenda",
          "phrase": "agenda",
          "stage": "open",
          "patient": "I want a safer cream, and she isn’t sleeping.",
          "task": "Find the full agenda and agree a safe priority.",
          "model": "Before we decide where to start, is there anything else you were hoping we could discuss? Then we can agree what needs attention first.",
          "simple": "Is there anything else you wanted to discuss? Let’s agree where to start.",
          "starter": "Before we decide… is there anything else…",
          "purpose": "Find important concerns early, then agree a safe priority.",
          "tip": "An invitation is not a promise to finish every issue. Triage urgent concerns before deferring anything.",
          "reply": "The patient confirms the concerns described in the brief.",
          "options": [
            "Find the full agenda and agree a safe priority.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "Assess urgency before deciding what can wait.",
          "essential": [
            "Invited the full agenda",
            "Agreed a priority with attention to urgency"
          ],
          "improve": [
            "An invitation is not a promise to finish every issue. Triage urgent concerns before deferring anything."
          ],
          "next": "story"
        },
        {
          "id": "story",
          "phrase": "story",
          "stage": "understand",
          "patient": "Her skin is itchy every night.",
          "task": "Hear the actual treatment use and include the child appropriately.",
          "model": "Could you tell me how the skin has changed and what you’ve tried so far? I’d also like to hear from Maya in a way that feels comfortable for her.",
          "simple": "How has the eczema been? What have you used? Maya, what bothers you most?",
          "starter": "Could you talk me through…",
          "purpose": "Let the patient describe the problem before narrowing the questions.",
          "tip": "Ask one question and allow an answer. Interrupt when an urgent finding requires immediate action.",
          "reply": "The itchy patches have flared. We use moisturiser sometimes, but not the steroid.",
          "options": [
            "Hear the actual treatment use and include the child appropriately.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "Explore the account before interpreting reluctance as refusal of all care.",
          "essential": [
            "Explored what has actually been used",
            "Included the child appropriately"
          ],
          "improve": [
            "Ask one question and allow an answer. Interrupt when an urgent finding requires immediate action."
          ],
          "next": "impact"
        },
        {
          "id": "impact",
          "phrase": "impact",
          "stage": "understand",
          "patient": "A friend said steroids thin the skin.",
          "task": "Explore the specific concern before explaining benefits and harms.",
          "model": "You’re trying to protect her from harm. Could you tell me what you’ve heard and what worries you most about using the cream?",
          "simple": "What worries you most about the steroid cream?",
          "starter": "How is this affecting… What is worrying…",
          "purpose": "Understand function and the patient’s concern, then use the answers in your plan.",
          "tip": "These are separate questions. Pause after the first and respond before asking the second.",
          "reply": "I thought even a tiny amount would damage her skin permanently.",
          "options": [
            "Explore the specific concern before explaining benefits and harms.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "An accurate concern deserves a proportionate explanation rather than dismissal.",
          "essential": [
            "Acknowledged the protective intention",
            "Explored the feared harm"
          ],
          "improve": [
            "These are separate questions. Pause after the first and respond before asking the second."
          ],
          "next": "focus"
        },
        {
          "id": "focus",
          "phrase": "focus",
          "stage": "focus",
          "patient": "Can you just give a different cream?",
          "task": "Assess severity and infection before changing topical treatment.",
          "model": "First I need to assess the flare and check for infection. Is there rapidly worsening pain, spreading redness, weeping or crusting, fever, or clusters of painful blisters or small punched-out sores? We also need to check the areas affected and how unwell she seems.",
          "simple": "Let’s assess the skin and check for pain, infection, fever or painful blisters before changing treatment.",
          "starter": "Thank you… I’d like to ask…",
          "purpose": "Choose questions that distinguish causes and change urgency or management.",
          "tip": "A signpost does not replace the actual assessment. Ask the relevant questions clearly, one at a time.",
          "reply": "There are no infection warning features in this ordinary path. The clinician arranges an examination sufficient to assess severity and the affected sites.",
          "options": [
            "Assess severity and infection before changing topical treatment.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "Possible eczema herpeticum needs immediate treatment and same-day specialist advice; do not manage it as an ordinary flare.",
          "essential": [
            "Checked infection and systemic warning features",
            "Recognised the need to assess severity and body sites"
          ],
          "improve": [
            "A signpost does not replace the actual assessment. Ask the relevant questions clearly, one at a time."
          ],
          "next": "summary"
        },
        {
          "id": "summary",
          "phrase": "summary",
          "stage": "focus",
          "patient": "So it isn’t that I’ve done something wrong?",
          "task": "Summarise the reason for non-use and the untreated burden.",
          "model": "You’ve been worried about harm, so you held off using the prescribed cream. Meanwhile Maya is itchy and losing sleep. Have I understood that correctly?",
          "simple": "You were worried about side effects, and the itching is still affecting her sleep. Is that right?",
          "starter": "Let me check… Your main concern…",
          "purpose": "Check the facts and patient priority before explaining your assessment.",
          "tip": "A summary should be short and accurate. Correct it if the patient adds or changes information.",
          "reply": "Yes. I didn’t know what amount was safe.",
          "options": [
            "Summarise the reason for non-use and the untreated burden.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "Use the summary to identify the teaching need: a clear regimen and demonstration.",
          "essential": [
            "Summarised without blame",
            "Identified uncertainty about safe application"
          ],
          "improve": [
            "A summary should be short and accurate. Correct it if the patient adds or changes information."
          ],
          "next": "explain"
        },
        {
          "id": "explain",
          "phrase": "explain",
          "stage": "explain",
          "patient": "Why would a steroid help?",
          "task": "Explain the roles of treatments and discuss proportionate risk.",
          "model": "The moisturiser helps protect the skin barrier. The prescribed steroid treats the inflammation during a flare. Benefits generally outweigh harms when the appropriate product is used correctly, but the strength, site and duration matter.",
          "simple": "Moisturiser protects the skin. The steroid calms inflammation. We need clear instructions for the right product and area.",
          "starter": "From what you’ve told me… because…",
          "purpose": "Explain the reasoning at the right level of certainty.",
          "tip": "Avoid promising a diagnosis from an incomplete remote assessment. Explain what further assessment is needed.",
          "reply": "I didn’t realise they do different jobs.",
          "options": [
            "Explain the roles of treatments and discuss proportionate risk.",
            "Say steroid creams are completely harmless at every strength.",
            "Avoid discussing the fear and repeat the prescription instructions."
          ],
          "answer": 0,
          "why": "Avoid saying topical steroids are risk-free or that all strengths can be used everywhere.",
          "essential": [
            "Explained moisturiser and steroid roles",
            "Acknowledged that correct strength, site and duration matter"
          ],
          "improve": [
            "Avoid promising a diagnosis from an incomplete remote assessment. Explain what further assessment is needed."
          ],
          "next": "uncertainty"
        },
        {
          "id": "uncertainty",
          "phrase": "uncertainty",
          "stage": "explain",
          "patient": "Which one goes on her face?",
          "task": "Resolve product and application uncertainty before giving specific instructions.",
          "model": "We need to check the exact products and examine the affected areas before confirming which strength goes where. I’ll write the instructions down and show you the amount for each area.",
          "simple": "Let’s check the products and skin, then give you a written plan for each area.",
          "starter": "What we know… What we still need… The next step…",
          "purpose": "Make uncertainty understandable and attach it to a practical next step.",
          "tip": "Pause after a small amount of information. Respond to the patient’s question before adding more.",
          "reply": "A written plan and a demonstration would help.",
          "options": [
            "Resolve product and application uncertainty before giving specific instructions.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "Facial skin and other sensitive sites need particular care. Do not invent a universal regimen.",
          "essential": [
            "Checked the actual products and sites",
            "Offered specific written instructions and demonstration"
          ],
          "improve": [
            "Pause after a small amount of information. Respond to the patient’s question before adding more."
          ],
          "next": "recommend"
        },
        {
          "id": "recommend",
          "phrase": "recommend",
          "stage": "plan",
          "patient": "What would you recommend now?",
          "task": "Agree a practical treatment plan after assessment and explanation.",
          "model": "After assessing the flare, I recommend an individual written plan for regular emollient use and appropriate treatment of inflamed areas. We’ll discuss benefits, possible side effects, application and when to stop or step down, then review the response.",
          "simple": "Let’s agree a written plan for moisturising, treating the flare and reviewing the skin.",
          "starter": "I recommend… because… What are your thoughts…",
          "purpose": "Offer a clinically appropriate recommendation and invite the patient’s view.",
          "tip": "Discuss relevant alternatives, risks and the consequences of no change when appropriate. Urgency affects available choices.",
          "reply": "I’m willing to try if I can see exactly how.",
          "options": [
            "Agree a practical treatment plan after assessment and explanation.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "Match treatment to severity and body site, and retain review of benefit and harm.",
          "essential": [
            "Recommended a tailored plan",
            "Included application teaching and review"
          ],
          "improve": [
            "Discuss relevant alternatives, risks and the consequences of no change when appropriate. Urgency affects available choices."
          ],
          "next": "barrier"
        },
        {
          "id": "barrier",
          "phrase": "barrier",
          "stage": "plan",
          "patient": "The nursery won’t apply it unless they have instructions.",
          "task": "Address the practical barrier and use demonstration or teach-back.",
          "model": "Let’s write down what is needed and when, and check what the nursery can actually help with. Could you show me how you would apply the treatment so we can clear up any uncertainty?",
          "simple": "Let’s provide clear instructions and practise how to apply it.",
          "starter": "What might make… Let’s work through…",
          "purpose": "Find the actual obstacle and agree arrangements the patient can use.",
          "tip": "Respond to the specific answer. Keep a necessary clinical recommendation clear while addressing practical barriers.",
          "reply": "I can do the agreed routine at home and share the plan with nursery.",
          "options": [
            "Address the practical barrier and use demonstration or teach-back.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "A plan should fit the child’s routine and actual support available.",
          "essential": [
            "Addressed the nursery/routine barrier",
            "Checked the parent can use the treatment plan"
          ],
          "improve": [
            "Respond to the specific answer. Keep a necessary clinical recommendation clear while addressing practical barriers."
          ],
          "next": "safety"
        },
        {
          "id": "safety",
          "phrase": "safety",
          "stage": "close",
          "patient": "When should we get help sooner?",
          "task": "Give skin-specific earlier-help advice and flag possible eczema herpeticum.",
          "model": "Seek prompt medical advice if the skin becomes infected, rapidly worsens or she becomes unwell. Painful clustered blisters or punched-out sores can need urgent same-day specialist assessment, especially with fever or eye involvement. Don’t wait for the routine review.",
          "simple": "Rapid worsening, pain, fever or painful blisters need earlier assessment. Don’t wait for review.",
          "starter": "If… please… If things have not… by…",
          "purpose": "Give relevant warning signs, a contact route, urgency and a review plan.",
          "tip": "Choose advice for this patient and condition. “Come back if worse” alone leaves the action unclear.",
          "reply": "I’ll ask for help earlier if those changes happen.",
          "options": [
            "Give skin-specific earlier-help advice and flag possible eczema herpeticum.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "If suspected clinically, act immediately on the specialist pathway and start indicated systemic treatment; safety-net wording does not replace care.",
          "essential": [
            "Named relevant worsening/infection features",
            "Explained that concerning blistering needs urgent assessment"
          ],
          "improve": [
            "Choose advice for this patient and condition. “Come back if worse” alone leaves the action unclear."
          ],
          "next": "check"
        },
        {
          "id": "check",
          "phrase": "check",
          "stage": "close",
          "patient": "Can you check I’ve got the creams right?",
          "task": "Check actual understanding and arrange review of response.",
          "model": "Yes. Could you show or tell me which product goes where, how you will use it and when you will seek help? We’ll correct anything unclear and confirm the review appointment to check the response.",
          "simple": "Let’s go through which cream, which area, how to use it and when we’ll review.",
          "starter": "Just so I can check… could you tell me… I will…",
          "purpose": "Check understanding, correct gaps and name who will arrange and review each action.",
          "tip": "Make teach-back about the clarity of your explanation. Resolve any misunderstanding before closing.",
          "reply": "The parent repeats the individual written plan and the clinician corrects one misunderstanding before closing.",
          "options": [
            "Check actual understanding and arrange review of response.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "A yes/no question alone may miss an application error.",
          "essential": [
            "Used a practical check of understanding",
            "Confirmed review and earlier-help arrangements"
          ],
          "improve": [
            "Make teach-back about the clarity of your explanation. Resolve any misunderstanding before closing."
          ],
          "next": null
        }
      ]
    },
    {
      "id": "falls",
      "title": "Dizziness, several medicines and no transport",
      "category": "Multiple concerns",
      "patient": "Jean Ellis, 76 · Telephone",
      "brief": "Jean reports dizziness on standing after a recent medicine change and two recent falls. Do not assume a single medicine is the cause. Assess injury, syncope and acute illness; arrange a comprehensive, feasible assessment and medicines review.",
      "goal": "Practise the structure, explain the next step and respond to this patient’s particular concern.",
      "atlas": "op-falls",
      "studio": null,
      "links": [
        {
          "label": "NICE: falls assessment and prevention",
          "url": "https://www.nice.org.uk/guidance/ng249"
        },
        {
          "label": "NHS: falls and getting help",
          "url": "https://www.nhs.uk/conditions/falls/"
        }
      ],
      "nodes": [
        {
          "id": "hello",
          "phrase": "hello",
          "stage": "open",
          "patient": "These tablets are making me dizzy. Can I stop them?",
          "task": "Establish identity, privacy and who is involved.",
          "model": "Hello, I’m Dr Patel, one of the GPs. Could I confirm your name and date of birth? Is it safe and private for us to talk?",
          "simple": "Hello, I’m Dr Patel. Could you confirm your details? Can you talk privately?",
          "starter": "Hello, I’m… Could I check… Is it…",
          "purpose": "Introduce yourself accurately, confirm identity and establish whether sensitive discussion is safe.",
          "tip": "Pause for each answer. Establish location and a callback route when the clinical situation requires it.",
          "reply": "The patient confirms their details and that this fictional conversation is private.",
          "options": [
            "Establish identity, privacy and who is involved.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "Confirm the person and safe communication before discussing details.",
          "essential": [
            "Introduced role and confirmed identity",
            "Checked privacy and involvement"
          ],
          "improve": [
            "Pause for each answer. Establish location and a callback route when the clinical situation requires it."
          ],
          "next": "agenda"
        },
        {
          "id": "agenda",
          "phrase": "agenda",
          "stage": "open",
          "patient": "I’m dizzy, my knee hurts, and I can’t get to the surgery.",
          "task": "Find the full agenda and agree a safe priority.",
          "model": "Before we decide where to start, is there anything else you were hoping we could discuss? Then we can agree what needs attention first.",
          "simple": "Is there anything else you wanted to discuss? Let’s agree where to start.",
          "starter": "Before we decide… is there anything else…",
          "purpose": "Find important concerns early, then agree a safe priority.",
          "tip": "An invitation is not a promise to finish every issue. Triage urgent concerns before deferring anything.",
          "reply": "The patient confirms the concerns described in the brief.",
          "options": [
            "Find the full agenda and agree a safe priority.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "Assess urgency before deciding what can wait.",
          "essential": [
            "Invited the full agenda",
            "Agreed a priority with attention to urgency"
          ],
          "improve": [
            "An invitation is not a promise to finish every issue. Triage urgent concerns before deferring anything."
          ],
          "next": "story"
        },
        {
          "id": "story",
          "phrase": "story",
          "stage": "understand",
          "patient": "The dizziness is mostly when I stand up.",
          "task": "Clarify dizziness and falls rather than assume a medicine adverse effect.",
          "model": "Could you talk me through what happens when you stand, and tell me about the falls?",
          "simple": "What happens when you get dizzy? What happened in the falls?",
          "starter": "Could you talk me through…",
          "purpose": "Let the patient describe the problem before narrowing the questions.",
          "tip": "Ask one question and allow an answer. Interrupt when an urgent finding requires immediate action.",
          "reply": "I feel light-headed getting up. I’ve fallen twice in the last month.",
          "options": [
            "Clarify dizziness and falls rather than assume a medicine adverse effect.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "Establish timing, circumstances, symptoms and consequences before attributing cause.",
          "essential": [
            "Explored the symptom pattern",
            "Asked about the falls themselves"
          ],
          "improve": [
            "Ask one question and allow an answer. Interrupt when an urgent finding requires immediate action."
          ],
          "next": "impact"
        },
        {
          "id": "impact",
          "phrase": "impact",
          "stage": "understand",
          "patient": "I’m frightened I’ll lose my independence.",
          "task": "Explore the patient’s goal and present home safety.",
          "model": "Keeping your independence matters to you. What feels most difficult or unsafe at home at the moment?",
          "simple": "What are you finding hardest at home? What worries you most?",
          "starter": "How is this affecting… What is worrying…",
          "purpose": "Understand function and the patient’s concern, then use the answers in your plan.",
          "tip": "These are separate questions. Pause after the first and respond before asking the second.",
          "reply": "I avoid the stairs and worry about falling when I’m alone.",
          "options": [
            "Explore the patient’s goal and present home safety.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "The plan should address function and immediate safety alongside causes.",
          "essential": [
            "Acknowledged the independence goal",
            "Explored immediate functional and safety needs"
          ],
          "improve": [
            "These are separate questions. Pause after the first and respond before asking the second."
          ],
          "next": "focus"
        },
        {
          "id": "focus",
          "phrase": "focus",
          "stage": "focus",
          "patient": "I didn’t think falling was a medical problem.",
          "task": "Assess injuries, acute causes and ability to stay safe now.",
          "model": "I need to check for injury and causes that need urgent help. Did you hit your head, lose consciousness or have chest pain, palpitations or new weakness? Are you injured or unable to get up or walk safely now? I’ll also check blood-thinning medicines and recent illness.",
          "simple": "Did you injure yourself or black out? Any chest pain, palpitations or new weakness? Can you move safely now?",
          "starter": "Thank you… I’d like to ask…",
          "purpose": "Choose questions that distinguish causes and change urgency or management.",
          "tip": "A signpost does not replace the actual assessment. Ask the relevant questions clearly, one at a time.",
          "reply": "No head strike, blackout, chest pain or new neurological symptoms. Jean can move safely with her usual aid now. The clinician continues the broader assessment.",
          "options": [
            "Assess injuries, acute causes and ability to stay safe now.",
            "Assume every fall is a side effect of the newly changed tablet.",
            "Defer all assessment because the patient has had no head injury."
          ],
          "answer": 0,
          "why": "Falls may involve injury, syncope, acute illness or several interacting causes. Negative answers here do not replace a comprehensive assessment.",
          "essential": [
            "Checked injury and acute warning features",
            "Checked immediate mobility and safety"
          ],
          "improve": [
            "A signpost does not replace the actual assessment. Ask the relevant questions clearly, one at a time."
          ],
          "next": "summary"
        },
        {
          "id": "summary",
          "phrase": "summary",
          "stage": "focus",
          "patient": "The new tablet must be the reason, surely?",
          "task": "Summarise the possible link while exploring the full medicine burden.",
          "model": "The symptoms began after the change, so the medicine may be contributing. You’ve also had two falls, and we should look at other causes and your safety. Could we go through what you actually take each day?",
          "simple": "The medicine may be involved, but we need to check other causes and the full medicine list.",
          "starter": "Let me check… Your main concern…",
          "purpose": "Check the facts and patient priority before explaining your assessment.",
          "tip": "A summary should be short and accurate. Correct it if the patient adds or changes information.",
          "reply": "I take several prescribed tablets and an over-the-counter sleep aid.",
          "options": [
            "Summarise the possible link while exploring the full medicine burden.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "Include non-prescription medicines. Do not instruct blanket cessation of medicines without review.",
          "essential": [
            "Avoided assuming a single cause",
            "Asked about actual prescribed and non-prescribed use"
          ],
          "improve": [
            "A summary should be short and accurate. Correct it if the patient adds or changes information."
          ],
          "next": "explain"
        },
        {
          "id": "explain",
          "phrase": "explain",
          "stage": "explain",
          "patient": "Why do I need an examination?",
          "task": "Explain the assessment and link each part to the patient’s goal.",
          "model": "Dizziness on standing can have several causes. Checking your blood pressure lying and standing, your heart and mobility, and reviewing medicines can help us decide what needs changing.",
          "simple": "We need to check blood pressure on standing, your heart, walking and medicines to understand the falls.",
          "starter": "From what you’ve told me… because…",
          "purpose": "Explain the reasoning at the right level of certainty.",
          "tip": "Avoid promising a diagnosis from an incomplete remote assessment. Explain what further assessment is needed.",
          "reply": "I understand. I just don’t want another list of appointments.",
          "options": [
            "Explain the assessment and link each part to the patient’s goal.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "A comprehensive falls assessment considers relevant cardiovascular, medication, mobility, vision and other factors.",
          "essential": [
            "Explained relevant assessment components",
            "Connected assessment to safer independence"
          ],
          "improve": [
            "Avoid promising a diagnosis from an incomplete remote assessment. Explain what further assessment is needed."
          ],
          "next": "uncertainty"
        },
        {
          "id": "uncertainty",
          "phrase": "uncertainty",
          "stage": "explain",
          "patient": "Can you tell me exactly which tablet to stop now?",
          "task": "Explain uncertainty and make medication review practical.",
          "model": "I need to review the exact medicines, doses and assessment findings before advising a change. Let’s make sure you have a safe plan today rather than stopping everything yourself.",
          "simple": "We need to check the exact list and your assessment before changing tablets.",
          "starter": "What we know… What we still need… The next step…",
          "purpose": "Make uncertainty understandable and attach it to a practical next step.",
          "tip": "Pause after a small amount of information. Respond to the patient’s question before adding more.",
          "reply": "I can bring the packets, including the sleep aid.",
          "options": [
            "Explain uncertainty and make medication review practical.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "Some medicines require careful adjustment. Avoid an unsupported stop instruction.",
          "essential": [
            "Avoided blanket or unsupported stopping advice",
            "Asked for the actual medicine products"
          ],
          "improve": [
            "Pause after a small amount of information. Respond to the patient’s question before adding more."
          ],
          "next": "recommend"
        },
        {
          "id": "recommend",
          "phrase": "recommend",
          "stage": "plan",
          "patient": "What happens first?",
          "task": "Prioritise a feasible assessment and coordinate the plan.",
          "model": "First we’ll arrange an assessment with timing based on your symptoms and safety. We’ll review the medicines, check the dizziness and falls, and agree practical steps to reduce risk. I’d like one clinician to coordinate the plan so it stays manageable.",
          "simple": "Let’s arrange the assessment and medicine review, with one person coordinating the next steps.",
          "starter": "I recommend… because… What are your thoughts…",
          "purpose": "Offer a clinically appropriate recommendation and invite the patient’s view.",
          "tip": "Discuss relevant alternatives, risks and the consequences of no change when appropriate. Urgency affects available choices.",
          "reply": "I can’t get a lift to the surgery.",
          "options": [
            "Prioritise a feasible assessment and coordinate the plan.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "Assessment must actually happen. Match urgency and setting to clinical need and access.",
          "essential": [
            "Prioritised the immediate assessment",
            "Proposed clear coordination rather than fragmented tasks"
          ],
          "improve": [
            "Discuss relevant alternatives, risks and the consequences of no change when appropriate. Urgency affects available choices."
          ],
          "next": "barrier"
        },
        {
          "id": "barrier",
          "phrase": "barrier",
          "stage": "plan",
          "patient": "My daughter works and there’s no bus I can use.",
          "task": "Resolve transport and confirm actual support or assessment arrangements.",
          "model": "Let’s check what support or assessment setting is available. A home assessment may be appropriate if that is what your needs require, but I need to confirm the arrangements. Who can help you safely while we organise it?",
          "simple": "Let’s check an assessment route you can use and what help is available today.",
          "starter": "What might make… Let’s work through…",
          "purpose": "Find the actual obstacle and agree arrangements the patient can use.",
          "tip": "Respond to the specific answer. Keep a necessary clinical recommendation clear while addressing practical barriers.",
          "reply": "In this scenario, the service confirms an appropriate assessment arrangement and Jean agrees who can assist.",
          "options": [
            "Resolve transport and confirm actual support or assessment arrangements.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "Do not promise a home visit or transport service before checking availability and clinical appropriateness.",
          "essential": [
            "Explored the actual access barrier",
            "Confirmed a realistic assessment and interim support plan"
          ],
          "improve": [
            "Respond to the specific answer. Keep a necessary clinical recommendation clear while addressing practical barriers."
          ],
          "next": "safety"
        },
        {
          "id": "safety",
          "phrase": "safety",
          "stage": "close",
          "patient": "What should I do if I fall again?",
          "task": "Give an actionable plan for another fall or new acute symptoms.",
          "model": "If you are injured, cannot get up, hit your head or develop new worrying symptoms, seek urgent help; serious injury, stroke symptoms, chest pain or severe illness needs emergency help. Keep a way to call for help within reach. Don’t wait for the planned review if your safety changes.",
          "simple": "Get help after another fall if you are hurt or can’t get up. New serious symptoms need emergency help. Keep a phone or alarm accessible.",
          "starter": "If… please… If things have not… by…",
          "purpose": "Give relevant warning signs, a contact route, urgency and a review plan.",
          "tip": "Choose advice for this patient and condition. “Come back if worse” alone leaves the action unclear.",
          "reply": "I’ll keep my phone with me and seek help earlier if I fall or feel unsafe.",
          "options": [
            "Give an actionable plan for another fall or new acute symptoms.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "Tailor escalation to injury, symptoms and medicines, including anticoagulation. Do not leave a person unable to get up without help.",
          "essential": [
            "Explained an earlier-help route after a fall",
            "Addressed the practical means of calling for help"
          ],
          "improve": [
            "Choose advice for this patient and condition. “Come back if worse” alone leaves the action unclear."
          ],
          "next": "check"
        },
        {
          "id": "check",
          "phrase": "check",
          "stage": "close",
          "patient": "Who will keep track of all this?",
          "task": "Close with a manageable plan, teach-back and named ownership.",
          "model": "Let’s confirm who will coordinate the assessment, medication changes and follow-up. Could you tell me the immediate plan in your own words? We’ll write down each action, who is responsible and when you should hear from us.",
          "simple": "We’ll name a coordinator and write down who does what and when. Could you tell me the next step?",
          "starter": "Just so I can check… could you tell me… I will…",
          "purpose": "Check understanding, correct gaps and name who will arrange and review each action.",
          "tip": "Make teach-back about the clarity of your explanation. Resolve any misunderstanding before closing.",
          "reply": "Jean repeats the confirmed assessment arrangement and earlier-help plan; the clinician names the person responsible for follow-up.",
          "options": [
            "Close with a manageable plan, teach-back and named ownership.",
            "Move on without addressing the information the patient has just given.",
            "Give a definite reassurance or treatment promise before the necessary assessment."
          ],
          "answer": 0,
          "why": "A complex plan needs responsibility and timescales, not just a list of referrals.",
          "essential": [
            "Checked the immediate plan is understood",
            "Named responsibility and follow-up arrangements"
          ],
          "improve": [
            "Make teach-back about the clarity of your explanation. Resolve any misunderstanding before closing."
          ],
          "next": null
        }
      ]
    },
    {
      "id": "anxiety",
      "title": "Persistent worry and a request for fast relief",
      "category": "Mental health",
      "patient": "Nadia Wells, 31 · Video",
      "brief": "Nadia has worried about several areas of life for more than six months and is struggling at work. Assess the mental and physical picture, function, substance use and safety. A previous anxiety label does not explain every new physical symptom.",
      "goal": "Practise clear assessment, a proportionate explanation and a workable shared plan; repeat the hardest exchange with less help.",
      "atlas": "mh-gad",
      "studio": null,
      "links": [
        {
          "label": "NICE: generalised anxiety and panic disorder",
          "url": "https://www.nice.org.uk/guidance/cg113"
        },
        {
          "label": "NHS: generalised anxiety disorder",
          "url": "https://www.nhs.uk/mental-health/conditions/generalised-anxiety-disorder-gad/"
        }
      ],
      "nodes": [
        {
          "id": "hello",
          "phrase": "hello",
          "stage": "open",
          "patient": "Can I have something that will calm me down quickly?",
          "task": "Establish who you are speaking with and a safe setting.",
          "model": "Hello, I’m Dr Patel, one of the GPs. Could I check your name and date of birth? Is it safe and private for us to speak?",
          "simple": "Hello, I’m Dr Patel. Could you confirm your details? Can you speak privately?",
          "starter": "Hello, I’m… Could I check… Is it…",
          "purpose": "Introduce yourself accurately, confirm identity and establish whether sensitive discussion is safe.",
          "tip": "Pause for each answer. Establish location and a callback route when the clinical situation requires it.",
          "reply": "The patient confirms their identity and privacy in this fictional consultation.",
          "options": [
            "Establish who you are speaking with and a safe setting.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Identity, privacy and the patient’s preferences shape safe communication.",
          "essential": [
            "Introduced the role and checked identity",
            "Established privacy and who is involved"
          ],
          "improve": [
            "Pause for each answer. Establish location and a callback route when the clinical situation requires it."
          ],
          "next": "agenda"
        },
        {
          "id": "agenda",
          "phrase": "agenda",
          "stage": "open",
          "patient": "I worry all the time, and I keep getting a racing heart.",
          "task": "Find the full agenda and agree a safe priority.",
          "model": "Before we decide where to start, is there anything else you were hoping we could discuss? Then we can agree what needs attention first.",
          "simple": "Is there anything else you wanted help with? Let’s agree where to start.",
          "starter": "Before we decide… is there anything else…",
          "purpose": "Find important concerns early, then agree a safe priority.",
          "tip": "An invitation is not a promise to finish every issue. Triage urgent concerns before deferring anything.",
          "reply": "The patient confirms the agenda described in the brief.",
          "options": [
            "Find the full agenda and agree a safe priority.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Check the urgency of the concerns before deciding what can wait.",
          "essential": [
            "Invited other concerns",
            "Agreed the priority without overlooking urgent symptoms"
          ],
          "improve": [
            "An invitation is not a promise to finish every issue. Triage urgent concerns before deferring anything."
          ],
          "next": "story"
        },
        {
          "id": "story",
          "phrase": "story",
          "stage": "understand",
          "patient": "It’s work, money, my family—everything.",
          "task": "Explore the pattern, duration and controllability of worry.",
          "model": "Could you talk me through the worries and what happens when they take over?",
          "simple": "What do you worry about, and what happens when it feels overwhelming?",
          "starter": "Could you talk me through…",
          "purpose": "Let the patient describe the problem before narrowing the questions.",
          "tip": "Ask one question and allow an answer. Interrupt when an urgent finding requires immediate action.",
          "reply": "The worries shift between topics and are difficult to control. They affect sleep and concentration.",
          "options": [
            "Explore the pattern, duration and controllability of worry.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "A screening score can support assessment but does not replace the history and functional picture.",
          "essential": [
            "Explored the worry pattern and duration",
            "Clarified how difficult it is to control"
          ],
          "improve": [
            "Ask one question and allow an answer. Interrupt when an urgent finding requires immediate action."
          ],
          "next": "impact"
        },
        {
          "id": "impact",
          "phrase": "impact",
          "stage": "understand",
          "patient": "Everyone tells me to stop overthinking.",
          "task": "Acknowledge the experience and assess function.",
          "model": "It sounds exhausting to feel on alert so much of the time. How is it affecting work and life at home?",
          "simple": "That sounds exhausting. What is it stopping you doing?",
          "starter": "How is this affecting… What is worrying…",
          "purpose": "Understand function and the patient’s concern, then use the answers in your plan.",
          "tip": "These are separate questions. Pause after the first and respond before asking the second.",
          "reply": "I check my work repeatedly and avoid going out.",
          "options": [
            "Acknowledge the experience and assess function.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "The effect on everyday life helps choose the level of support and treatment.",
          "essential": [
            "Acknowledged the specific distress",
            "Explored functional impairment"
          ],
          "improve": [
            "These are separate questions. Pause after the first and respond before asking the second."
          ],
          "next": "focus"
        },
        {
          "id": "focus",
          "phrase": "focus",
          "stage": "focus",
          "patient": "The racing heart makes me think something is seriously wrong.",
          "task": "Assess physical symptoms and safety before attributing them to anxiety.",
          "model": "I want to understand the heart symptoms rather than assume they are anxiety. When do they happen? Any chest pain, fainting or severe breathlessness? I’ll also ask about medicines, caffeine, alcohol and your mood and safety.",
          "simple": "Let’s check the heart symptoms and any warning features, then the wider health picture.",
          "starter": "Thank you… I’d like to ask…",
          "purpose": "Choose questions that distinguish causes and change urgency or management.",
          "tip": "A signpost does not replace the actual assessment. Ask the relevant questions clearly, one at a time.",
          "reply": "There are no current acute warning symptoms. The clinician arranges appropriate physical assessment and asks directly about self-harm; no immediate danger is identified in this scenario.",
          "options": [
            "Assess physical symptoms and safety before attributing them to anxiety.",
            "Attribute all palpitations to anxiety because worry has been present for months.",
            "Order a broad test panel without clarifying whether acute warning symptoms are present."
          ],
          "answer": 0,
          "why": "New or changed symptoms can require urgent assessment even in someone with established anxiety.",
          "essential": [
            "Assessed physical warning features",
            "Considered relevant substances, mood and immediate safety"
          ],
          "improve": [
            "A signpost does not replace the actual assessment. Ask the relevant questions clearly, one at a time."
          ],
          "next": "summary"
        },
        {
          "id": "summary",
          "phrase": "summary",
          "stage": "focus",
          "patient": "So you do believe it is affecting me?",
          "task": "Summarise the mental and physical assessment without premature closure.",
          "model": "Yes. You’ve described persistent, hard-to-control worry that affects sleep, work and social life. We also need to complete the physical assessment of the palpitations. Is there anything important I’ve missed?",
          "simple": "The worry is affecting several parts of your life. We still need to assess the palpitations. Have I got that right?",
          "starter": "Let me check… Your main concern…",
          "purpose": "Check the facts and patient priority before explaining your assessment.",
          "tip": "A summary should be short and accurate. Correct it if the patient adds or changes information.",
          "reply": "That sums it up. I was afraid you would dismiss it.",
          "options": [
            "Summarise the mental and physical assessment without premature closure.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Hold both parts of the picture together and invite correction.",
          "essential": [
            "Summarised impairment and the concern",
            "Retained the need for appropriate physical assessment"
          ],
          "improve": [
            "A summary should be short and accurate. Correct it if the patient adds or changes information."
          ],
          "next": "explain"
        },
        {
          "id": "explain",
          "phrase": "explain",
          "stage": "explain",
          "patient": "Why can anxiety make my body feel like this?",
          "task": "Explain the possible link without invalidating physical symptoms.",
          "model": "The body’s alarm response can cause real physical symptoms, including a racing heart and tension. That may be part of what is happening, but we will still assess the symptoms appropriately.",
          "simple": "Anxiety can activate a physical alarm response. The symptoms are real, and we still check them properly.",
          "starter": "From what you’ve told me… because…",
          "purpose": "Explain the reasoning at the right level of certainty.",
          "tip": "Avoid promising a diagnosis from an incomplete remote assessment. Explain what further assessment is needed.",
          "reply": "I thought anxiety meant it was imaginary.",
          "options": [
            "Explain the possible link without invalidating physical symptoms.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "An explanation should not be used to rule out a physical cause without assessment.",
          "essential": [
            "Used plain language for the mind–body link",
            "Avoided dismissing or prematurely explaining all symptoms"
          ],
          "improve": [
            "Avoid promising a diagnosis from an incomplete remote assessment. Explain what further assessment is needed."
          ],
          "next": "uncertainty"
        },
        {
          "id": "uncertainty",
          "phrase": "uncertainty",
          "stage": "explain",
          "patient": "Will another blood test make the worry go away?",
          "task": "Explain the role and limits of tests and agree a practical goal.",
          "model": "Tests can help answer a specific clinical question. They may not resolve ongoing worry by themselves. We can explain the results clearly and also work on the anxiety and the repeated checking. What would you most like to be able to do again?",
          "simple": "We’ll test when it is clinically useful and also treat the worry itself. What would you like to get back to?",
          "starter": "What we know… What we still need… The next step…",
          "purpose": "Make uncertainty understandable and attach it to a practical next step.",
          "tip": "Pause after a small amount of information. Respond to the patient’s question before adding more.",
          "reply": "I want to concentrate at work and stop checking everything.",
          "options": [
            "Explain the role and limits of tests and agree a practical goal.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Avoid promising certainty or ordering tests only to end a difficult conversation.",
          "essential": [
            "Explained proportionate investigation",
            "Identified a meaningful functional goal"
          ],
          "improve": [
            "Pause after a small amount of information. Respond to the patient’s question before adding more."
          ],
          "next": "recommend"
        },
        {
          "id": "recommend",
          "phrase": "recommend",
          "stage": "plan",
          "patient": "Would diazepam be the quickest solution?",
          "task": "Discuss appropriate longer-term options and the reason for caution about benzodiazepines.",
          "model": "I understand wanting relief quickly. Benzodiazepines are not usually a long-term treatment for generalised anxiety because of harms and dependence. Suitable options may include structured self-help, psychological treatment or medication, depending on severity, previous treatment and your preference.",
          "simple": "Let’s choose a treatment for ongoing anxiety. Options include structured psychological help and, when appropriate, medicine; diazepam is not a routine long-term solution.",
          "starter": "I recommend… because… What are your thoughts…",
          "purpose": "Offer a clinically appropriate recommendation and invite the patient’s view.",
          "tip": "Discuss relevant alternatives, risks and the consequences of no change when appropriate. Urgency affects available choices.",
          "reply": "I’d like to hear more about psychological treatment.",
          "options": [
            "Discuss appropriate longer-term options and the reason for caution about benzodiazepines.",
            "Offer repeated diazepam prescriptions as the default long-term plan.",
            "Refuse all treatment because physical tests are pending."
          ],
          "answer": 0,
          "why": "NICE advises against routine benzodiazepines for GAD except short-term crisis use; do not turn that into an absolute prohibition in every circumstance.",
          "essential": [
            "Acknowledged the wish for prompt relief",
            "Discussed suitable options and benzodiazepine-related concerns"
          ],
          "improve": [
            "Discuss relevant alternatives, risks and the consequences of no change when appropriate. Urgency affects available choices."
          ],
          "next": "barrier"
        },
        {
          "id": "barrier",
          "phrase": "barrier",
          "stage": "plan",
          "patient": "I’m worried I won’t manage sessions around work.",
          "task": "Address access and agree interim support and review.",
          "model": "Let’s check which services and appointment formats are actually available. What times or formats would you be able to use? We can agree support while you wait and a review of how you are managing.",
          "simple": "Let’s find an available option you can attend and agree support while waiting.",
          "starter": "What might make… Let’s work through…",
          "purpose": "Find the actual obstacle and agree arrangements the patient can use.",
          "tip": "Respond to the specific answer. Keep a necessary clinical recommendation clear while addressing practical barriers.",
          "reply": "An evening or remote appointment would help if available.",
          "options": [
            "Address access and agree interim support and review.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Do not promise a specific service before checking access or assume a referral provides immediate support.",
          "essential": [
            "Explored the actual attendance barrier",
            "Agreed to confirm access and interim support"
          ],
          "improve": [
            "Respond to the specific answer. Keep a necessary clinical recommendation clear while addressing practical barriers."
          ],
          "next": "safety"
        },
        {
          "id": "safety",
          "phrase": "safety",
          "stage": "close",
          "patient": "What if I get worse before then?",
          "task": "Give a mental and physical earlier-help plan.",
          "model": "Contact us earlier if symptoms worsen or you cannot manage day-to-day needs. If you feel unable to keep yourself safe, seek emergency help. New chest pain, fainting or severe breathlessness needs appropriate urgent assessment rather than assuming anxiety. Let’s write down the relevant local contacts.",
          "simple": "Seek help sooner if you deteriorate. Immediate danger needs emergency help, and new serious physical symptoms need assessment.",
          "starter": "If… please… If things have not… by…",
          "purpose": "Give relevant warning signs, a contact route, urgency and a review plan.",
          "tip": "Choose advice for this patient and condition. “Come back if worse” alone leaves the action unclear.",
          "reply": "I’ll use the agreed contacts and won’t assume new serious symptoms are just anxiety.",
          "options": [
            "Give a mental and physical earlier-help plan.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Use local urgent mental-health pathways and the clinical severity of new physical symptoms to determine action.",
          "essential": [
            "Agreed a route for mental-health deterioration",
            "Distinguished new physical warning symptoms from established anxiety"
          ],
          "improve": [
            "Choose advice for this patient and condition. “Come back if worse” alone leaves the action unclear."
          ],
          "next": "check"
        },
        {
          "id": "check",
          "phrase": "check",
          "stage": "close",
          "patient": "How will we know whether treatment is helping?",
          "task": "Check understanding and agree how progress will be reviewed.",
          "model": "We’ll review the symptoms, side effects if relevant and what you are able to do, including your goal of concentrating at work. Could you tell me the plan and who you will contact if you need help sooner?",
          "simple": "We’ll book a review and check both symptoms and everyday functioning. Could you talk me through the plan?",
          "starter": "Just so I can check… could you tell me… I will…",
          "purpose": "Check understanding, correct gaps and name who will arrange and review each action.",
          "tip": "Make teach-back about the clarity of your explanation. Resolve any misunderstanding before closing.",
          "reply": "Nadia repeats the agreed treatment-access, assessment and review arrangements.",
          "options": [
            "Check understanding and agree how progress will be reviewed.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Use an agreed review interval and measures of functioning, not a promise that treatment will remove all worry.",
          "essential": [
            "Checked the patient’s understanding",
            "Named review of symptoms, function and any treatment harms"
          ],
          "improve": [
            "Make teach-back about the clarity of your explanation. Resolve any misunderstanding before closing."
          ],
          "next": null
        }
      ]
    },
    {
      "id": "withdrawal",
      "title": "A long-term sleeping medicine is running out",
      "category": "Prescribing and dependence",
      "patient": "Peter Lane, 58 · Telephone",
      "brief": "Peter requests an early supply of a long-term benzodiazepine. Verify the actual medicine and use, stock, last dose, withdrawal or toxicity, other sedatives and the prescribing record. Agree a safe immediate plan before discussing a supported reduction.",
      "goal": "Practise clear assessment, a proportionate explanation and a workable shared plan; repeat the hardest exchange with less help.",
      "atlas": "mh-dependence",
      "studio": null,
      "links": [
        {
          "label": "NICE: medicines associated with dependence and withdrawal",
          "url": "https://www.nice.org.uk/guidance/ng215"
        },
        {
          "label": "NHS: diazepam and stopping treatment",
          "url": "https://www.nhs.uk/medicines/diazepam/"
        }
      ],
      "nodes": [
        {
          "id": "hello",
          "phrase": "hello",
          "stage": "open",
          "patient": "Please don’t tell me you’re stopping my tablets.",
          "task": "Establish who you are speaking with and a safe setting.",
          "model": "Hello, I’m Dr Patel, one of the GPs. Could I check your name and date of birth? Is it safe and private for us to speak?",
          "simple": "Hello, I’m Dr Patel. Could you confirm your details? Can you speak privately?",
          "starter": "Hello, I’m… Could I check… Is it…",
          "purpose": "Introduce yourself accurately, confirm identity and establish whether sensitive discussion is safe.",
          "tip": "Pause for each answer. Establish location and a callback route when the clinical situation requires it.",
          "reply": "The patient confirms their identity and privacy in this fictional consultation.",
          "options": [
            "Establish who you are speaking with and a safe setting.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Identity, privacy and the patient’s preferences shape safe communication.",
          "essential": [
            "Introduced the role and checked identity",
            "Established privacy and who is involved"
          ],
          "improve": [
            "Pause for each answer. Establish location and a callback route when the clinical situation requires it."
          ],
          "next": "agenda"
        },
        {
          "id": "agenda",
          "phrase": "agenda",
          "stage": "open",
          "patient": "I need the prescription today. I’ve only got two tablets left.",
          "task": "Find the full agenda and agree a safe priority.",
          "model": "Before we decide where to start, is there anything else you were hoping we could discuss? Then we can agree what needs attention first.",
          "simple": "Is there anything else you wanted help with? Let’s agree where to start.",
          "starter": "Before we decide… is there anything else…",
          "purpose": "Find important concerns early, then agree a safe priority.",
          "tip": "An invitation is not a promise to finish every issue. Triage urgent concerns before deferring anything.",
          "reply": "The patient confirms the agenda described in the brief.",
          "options": [
            "Find the full agenda and agree a safe priority.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Check the urgency of the concerns before deciding what can wait.",
          "essential": [
            "Invited other concerns",
            "Agreed the priority without overlooking urgent symptoms"
          ],
          "improve": [
            "An invitation is not a promise to finish every issue. Triage urgent concerns before deferring anything."
          ],
          "next": "story"
        },
        {
          "id": "story",
          "phrase": "story",
          "stage": "understand",
          "patient": "I’ve taken them for years, but recently I’ve needed more.",
          "task": "Verify actual use and the immediate supply situation without blame.",
          "model": "Could you talk me through the exact medicine, how much you actually take and when you last took it? I’d like to understand how the supply has changed.",
          "simple": "Which medicine and dose do you take? When was the last dose, and how much is left?",
          "starter": "Could you talk me through…",
          "purpose": "Let the patient describe the problem before narrowing the questions.",
          "tip": "Ask one question and allow an answer. Interrupt when an urgent finding requires immediate action.",
          "reply": "Peter describes increased use beyond the agreed prescription. The clinician checks the prescribing record, remaining supply and other sources.",
          "options": [
            "Verify actual use and the immediate supply situation without blame.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Do not rely on the repeat list alone or issue an unverified replacement.",
          "essential": [
            "Clarified the exact medicine, actual use and last dose",
            "Checked the prescribing record and remaining supply"
          ],
          "improve": [
            "Ask one question and allow an answer. Interrupt when an urgent finding requires immediate action."
          ],
          "next": "impact"
        },
        {
          "id": "impact",
          "phrase": "impact",
          "stage": "understand",
          "patient": "I’m scared I won’t sleep or cope without them.",
          "task": "Explore possible withdrawal and the meaning of the request.",
          "model": "It sounds frightening to think you might run out. What happens when a dose is delayed, and what are you most worried would happen without it?",
          "simple": "What happens if you miss a dose? What worries you most about running out?",
          "starter": "How is this affecting… What is worrying…",
          "purpose": "Understand function and the patient’s concern, then use the answers in your plan.",
          "tip": "These are separate questions. Pause after the first and respond before asking the second.",
          "reply": "I feel shaky and panicky when I miss one.",
          "options": [
            "Explore possible withdrawal and the meaning of the request.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Recognise dependence and distress without equating them with intentional wrongdoing.",
          "essential": [
            "Explored symptoms after missed doses",
            "Acknowledged the fear without judgement"
          ],
          "improve": [
            "These are separate questions. Pause after the first and respond before asking the second."
          ],
          "next": "focus"
        },
        {
          "id": "focus",
          "phrase": "focus",
          "stage": "focus",
          "patient": "Can you just send the prescription while we talk?",
          "task": "Assess toxicity, withdrawal and interactions before deciding on supply.",
          "model": "First I need to check safety. Are you very drowsy, confused or having trouble breathing? Have you had severe shaking, hallucinations or a seizure after reducing or missing doses? I’ll also ask about alcohol, opioids and other sedating medicines.",
          "simple": "Let’s check for overdose or withdrawal symptoms and other sedatives before deciding the prescription plan.",
          "starter": "Thank you… I’d like to ask…",
          "purpose": "Choose questions that distinguish causes and change urgency or management.",
          "tip": "A signpost does not replace the actual assessment. Ask the relevant questions clearly, one at a time.",
          "reply": "No acute toxicity or severe withdrawal symptoms are present in the ordinary path. A prompt clinical review is arranged after verifying the prescription.",
          "options": [
            "Assess toxicity, withdrawal and interactions before deciding on supply.",
            "Issue the repeat medicine without assessing current toxicity, withdrawal or actual use.",
            "Refuse any immediate safety or supply discussion until a routine review next month."
          ],
          "answer": 0,
          "why": "Severe symptoms or immediate danger change the pathway; routine prescription processing cannot substitute for urgent care.",
          "essential": [
            "Checked current toxicity and withdrawal risk",
            "Asked about other sedatives and alcohol"
          ],
          "improve": [
            "A signpost does not replace the actual assessment. Ask the relevant questions clearly, one at a time."
          ],
          "next": "summary",
          "branch": {
            "label": "Practise a severe-withdrawal or other acute-illness disclosure",
            "patient": "I ran out two days ago. My partner says I had a seizure this morning and I am still confused.",
            "next": "urgent"
          }
        },
        {
          "id": "summary",
          "phrase": "summary",
          "stage": "focus",
          "patient": "I thought dependence meant I was an addict.",
          "task": "Summarise possible dependence and preserve a trusting discussion.",
          "model": "You’ve been using the medicine for a long time and feel unwell when a dose is missed. Physical dependence can develop with prescribed use. We need to understand the whole picture and make a safe plan; I’m not here to label or blame you.",
          "simple": "The body can adapt to prescribed medicine. Let’s understand what is happening and plan safely.",
          "starter": "Let me check… Your main concern…",
          "purpose": "Check the facts and patient priority before explaining your assessment.",
          "tip": "A summary should be short and accurate. Correct it if the patient adds or changes information.",
          "reply": "That makes it easier to talk honestly about taking extra.",
          "options": [
            "Summarise possible dependence and preserve a trusting discussion.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Dependence, tolerance, withdrawal and harmful use require careful assessment and should not be collapsed into a label.",
          "essential": [
            "Explained dependence without blame",
            "Invited an accurate account of actual use"
          ],
          "improve": [
            "A summary should be short and accurate. Correct it if the patient adds or changes information."
          ],
          "next": "explain"
        },
        {
          "id": "explain",
          "phrase": "explain",
          "stage": "explain",
          "patient": "Why are you concerned if it helps me sleep?",
          "task": "Explain the individual reasons for review and ask about harms.",
          "model": "We need to balance what it helps with against harms such as sedation, falls and problems from dependence or withdrawal. The increased use and symptoms when you miss a dose mean we should review the plan with you.",
          "simple": "It may help sleep, but we also need to review sedation, dependence and the increased use.",
          "starter": "From what you’ve told me… because…",
          "purpose": "Explain the reasoning at the right level of certainty.",
          "tip": "Avoid promising a diagnosis from an incomplete remote assessment. Explain what further assessment is needed.",
          "reply": "I hadn’t thought about the daytime drowsiness.",
          "options": [
            "Explain the individual reasons for review and ask about harms.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Relate the discussion to this person’s experience rather than delivering a generic warning.",
          "essential": [
            "Balanced benefit and relevant harms",
            "Linked the review to the patient’s actual use"
          ],
          "improve": [
            "Avoid promising a diagnosis from an incomplete remote assessment. Explain what further assessment is needed."
          ],
          "next": "uncertainty"
        },
        {
          "id": "uncertainty",
          "phrase": "uncertainty",
          "stage": "explain",
          "patient": "Are you going to make me stop tonight?",
          "task": "Avoid an abrupt unsupported stop and address the immediate situation.",
          "model": "I’m not recommending that you suddenly stop on your own. Abrupt withdrawal can be harmful. We need to verify the immediate prescribing arrangements and agree an individual, supported plan, including what to do if the supply problem cannot be resolved today.",
          "simple": "Don’t suddenly stop or change the dose yourself. Let’s agree a verified immediate plan and a supported review.",
          "starter": "What we know… What we still need… The next step…",
          "purpose": "Make uncertainty understandable and attach it to a practical next step.",
          "tip": "Pause after a small amount of information. Respond to the patient’s question before adding more.",
          "reply": "I’d like a written plan rather than a sudden change.",
          "options": [
            "Avoid an abrupt unsupported stop and address the immediate situation.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "NICE advises against abrupt cessation except exceptional medical circumstances; urgent toxicity is assessed separately.",
          "essential": [
            "Avoided an unsupported abrupt stop",
            "Addressed immediate verified prescribing and contingency arrangements"
          ],
          "improve": [
            "Pause after a small amount of information. Respond to the patient’s question before adding more."
          ],
          "next": "recommend"
        },
        {
          "id": "recommend",
          "phrase": "recommend",
          "stage": "plan",
          "patient": "Could you give me a tapering timetable now?",
          "task": "Agree an individual review and reduction process rather than a universal regimen.",
          "model": "A reduction plan needs the exact medicine, dose, your symptoms and support needs. Reductions are usually gradual and adjusted to how you are doing. We should agree the pace, review points and who coordinates prescribing, rather than use a fixed timetable for everyone.",
          "simple": "Let’s agree a gradual individual plan with reviews, after checking the medicine and your situation.",
          "starter": "I recommend… because… What are your thoughts…",
          "purpose": "Offer a clinically appropriate recommendation and invite the patient’s view.",
          "tip": "Discuss relevant alternatives, risks and the consequences of no change when appropriate. Urgency affects available choices.",
          "reply": "I’d prefer one clinician to coordinate it.",
          "options": [
            "Agree an individual review and reduction process rather than a universal regimen.",
            "Use the same fixed tapering schedule for every patient.",
            "Stop the medicine immediately to eliminate dependence."
          ],
          "answer": 0,
          "why": "Withdrawal plans vary; severe symptoms may require the pace to change and other causes to be assessed.",
          "essential": [
            "Explained why the plan is individual",
            "Named coordination and review as part of safe reduction"
          ],
          "improve": [
            "Discuss relevant alternatives, risks and the consequences of no change when appropriate. Urgency affects available choices."
          ],
          "next": "barrier"
        },
        {
          "id": "barrier",
          "phrase": "barrier",
          "stage": "plan",
          "patient": "I’m worried the anxiety will come back.",
          "task": "Address the underlying symptoms and practical support.",
          "model": "Let’s plan support for the sleep and anxiety as well as the medicine. What has helped before? We can discuss suitable non-drug options and check access, so you are supported during any change.",
          "simple": "We should support the sleep and anxiety while reviewing the medicine. What has helped before?",
          "starter": "What might make… Let’s work through…",
          "purpose": "Find the actual obstacle and agree arrangements the patient can use.",
          "tip": "Respond to the specific answer. Keep a necessary clinical recommendation clear while addressing practical barriers.",
          "reply": "Peter is willing to consider psychological and sleep support if access can be arranged.",
          "options": [
            "Address the underlying symptoms and practical support.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "A reduction plan that ignores the reason for taking the medicine is less workable.",
          "essential": [
            "Explored previous helpful strategies",
            "Included support for the underlying symptoms"
          ],
          "improve": [
            "Respond to the specific answer. Keep a necessary clinical recommendation clear while addressing practical barriers."
          ],
          "next": "safety"
        },
        {
          "id": "safety",
          "phrase": "safety",
          "stage": "close",
          "patient": "What should I do if I feel unwell before the review?",
          "task": "Give a clear withdrawal/toxicity contingency matched to severity.",
          "model": "Use the agreed urgent contact if withdrawal symptoms appear or the supply plan falls through. Severe confusion, a seizure, difficulty breathing or being difficult to wake needs emergency help. Do not take extra doses, mix with alcohol or drive if affected. We’ll write the contact and contingency plan down.",
          "simple": "Contact us urgently if the supply plan fails or symptoms develop. Seizures, severe confusion or breathing difficulty need emergency help.",
          "starter": "If… please… If things have not… by…",
          "purpose": "Give relevant warning signs, a contact route, urgency and a review plan.",
          "tip": "Choose advice for this patient and condition. “Come back if worse” alone leaves the action unclear.",
          "reply": "Peter repeats the urgent contacts and agrees not to make unsupervised changes.",
          "options": [
            "Give a clear withdrawal/toxicity contingency matched to severity.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Do not manage severe withdrawal or respiratory depression as a routine delayed review.",
          "essential": [
            "Specified urgent and emergency warning features",
            "Agreed a practical contingency and avoided unsafe self-adjustment"
          ],
          "improve": [
            "Choose advice for this patient and condition. “Come back if worse” alone leaves the action unclear."
          ],
          "next": "check"
        },
        {
          "id": "check",
          "phrase": "check",
          "stage": "close",
          "patient": "Can we confirm exactly what happens today?",
          "task": "Close the prescribing loop with teach-back and explicit ownership.",
          "model": "Let’s go through the verified immediate plan, who will issue or coordinate any prescription, and the booked review. Could you explain it back, including who you will contact if a problem occurs before then?",
          "simple": "Who does what today, when is the review, and who will you contact if the plan fails?",
          "starter": "Just so I can check… could you tell me… I will…",
          "purpose": "Check understanding, correct gaps and name who will arrange and review each action.",
          "tip": "Make teach-back about the clarity of your explanation. Resolve any misunderstanding before closing.",
          "reply": "Peter describes the confirmed clinician-owned prescribing arrangement, review date and urgent backup route.",
          "options": [
            "Close the prescribing loop with teach-back and explicit ownership.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "A vague reassurance about future supply is not a confirmed plan; record the actual arrangements.",
          "essential": [
            "Confirmed ownership of the immediate prescribing decision",
            "Checked understanding of review and contingency routes"
          ],
          "improve": [
            "Make teach-back about the clarity of your explanation. Resolve any misunderstanding before closing."
          ],
          "next": null
        },
        {
          "id": "urgent",
          "phrase": "focus",
          "stage": "focus",
          "patient": "I ran out two days ago. My partner says I had a seizure this morning and I am still confused.",
          "task": "Arrange emergency assessment for seizure and persistent confusion.",
          "model": "A seizure and ongoing confusion need emergency assessment now. Please do not drive. Let’s confirm where you are and arrange an ambulance. We will pass on the medicine, last dose and other substances to the emergency team.",
          "simple": "The seizure and confusion need emergency help now. Don’t drive; let’s arrange an ambulance and handover.",
          "starter": "This changes… I’m concerned because… I will arrange…",
          "purpose": "Arrange emergency assessment for seizure and persistent confusion.",
          "tip": "Stop routine teaching and management when a real emergency is identified. Follow the emergency pathway, maintain contact as appropriate and document the handover.",
          "reply": "In this fictional scenario, the clinician confirms location and contact details, arranges the urgent help and makes an accepted handover.",
          "options": [
            "Arrange emergency assessment for seizure and persistent confusion.",
            "Finish the routine discussion before acting.",
            "Wait for the next planned appointment."
          ],
          "answer": 0,
          "why": "Withdrawal may be relevant, but other causes must also be assessed. Do not try to manage a seizure with an unverified remote taper or repeat prescription.",
          "essential": [
            "Recognised the need for emergency assessment",
            "Arranged practical escalation and a medication history handover"
          ],
          "improve": [
            "Explain the reason briefly, then arrange the actual clinical action and handover."
          ],
          "next": null
        }
      ]
    },
    {
      "id": "fever",
      "title": "A parent asks for antibiotics for a fever",
      "category": "Children and urgent assessment",
      "patient": "Eli’s parent · Eli is 3 · Telephone",
      "brief": "Eli has had a fever for two days. Establish age, appearance, breathing, hydration and relevant symptoms. A telephone assessment may need prompt face-to-face review. The ordinary path supplies the findings of an appropriate examination before the management discussion.",
      "goal": "Practise clear assessment, a proportionate explanation and a workable shared plan; repeat the hardest exchange with less help.",
      "atlas": "pd-fever",
      "studio": null,
      "links": [
        {
          "label": "NICE: fever in under 5s",
          "url": "https://www.nice.org.uk/guidance/ng143"
        },
        {
          "label": "NHS: fever in children",
          "url": "https://www.nhs.uk/symptoms/fever-in-children/"
        }
      ],
      "nodes": [
        {
          "id": "hello",
          "phrase": "hello",
          "stage": "open",
          "patient": "He has a high temperature. Can he have antibiotics?",
          "task": "Establish who you are speaking with and a safe setting.",
          "model": "Hello, I’m Dr Patel. Could I check your name, your relationship to Eli and his date of birth? Is Eli with you now, and can you speak safely and privately?",
          "simple": "Could I check your details and Eli’s age? Is he with you now?",
          "starter": "Hello, I’m… Could I check… Is it…",
          "purpose": "Introduce yourself accurately, confirm identity and establish whether sensitive discussion is safe.",
          "tip": "Pause for each answer. Establish location and a callback route when the clinical situation requires it.",
          "reply": "The patient confirms their identity and privacy in this fictional consultation.",
          "options": [
            "Establish who you are speaking with and a safe setting.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Identity, privacy and the patient’s preferences shape safe communication.",
          "essential": [
            "Introduced the role and checked identity",
            "Established privacy and who is involved"
          ],
          "improve": [
            "Pause for each answer. Establish location and a callback route when the clinical situation requires it."
          ],
          "next": "agenda"
        },
        {
          "id": "agenda",
          "phrase": "agenda",
          "stage": "open",
          "patient": "The fever worries me, and he hasn’t eaten much.",
          "task": "Find the full agenda and agree a safe priority.",
          "model": "Before we decide where to start, is there anything else you were hoping we could discuss? Then we can agree what needs attention first.",
          "simple": "Is there anything else you wanted help with? Let’s agree where to start.",
          "starter": "Before we decide… is there anything else…",
          "purpose": "Find important concerns early, then agree a safe priority.",
          "tip": "An invitation is not a promise to finish every issue. Triage urgent concerns before deferring anything.",
          "reply": "The patient confirms the agenda described in the brief.",
          "options": [
            "Find the full agenda and agree a safe priority.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Check the urgency of the concerns before deciding what can wait.",
          "essential": [
            "Invited other concerns",
            "Agreed the priority without overlooking urgent symptoms"
          ],
          "improve": [
            "An invitation is not a promise to finish every issue. Triage urgent concerns before deferring anything."
          ],
          "next": "story"
        },
        {
          "id": "story",
          "phrase": "story",
          "stage": "understand",
          "patient": "It started yesterday afternoon.",
          "task": "Hear the course and current behaviour before deciding on treatment.",
          "model": "Could you tell me how he has been since it started, including how he is behaving now?",
          "simple": "How has he been, and what is he doing right now?",
          "starter": "Could you talk me through…",
          "purpose": "Let the patient describe the problem before narrowing the questions.",
          "tip": "Ask one question and allow an answer. Interrupt when an urgent finding requires immediate action.",
          "reply": "He is tired but responds normally and has been playing between naps.",
          "options": [
            "Hear the course and current behaviour before deciding on treatment.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Age, responsiveness and overall appearance matter; the temperature alone is not the whole assessment.",
          "essential": [
            "Clarified the course and current state",
            "Explored behaviour and responsiveness"
          ],
          "improve": [
            "Ask one question and allow an answer. Interrupt when an urgent finding requires immediate action."
          ],
          "next": "impact"
        },
        {
          "id": "impact",
          "phrase": "impact",
          "stage": "understand",
          "patient": "I’m frightened the fever will damage him.",
          "task": "Explore the parent’s concern and shift attention to relevant clinical signs.",
          "model": "It is worrying to see your child unwell. What have you noticed that concerns you most?",
          "simple": "What has worried you most about how he is?",
          "starter": "How is this affecting… What is worrying…",
          "purpose": "Understand function and the patient’s concern, then use the answers in your plan.",
          "tip": "These are separate questions. Pause after the first and respond before asking the second.",
          "reply": "The number on the thermometer scares me. I’m also worried about his drinking.",
          "options": [
            "Explore the parent’s concern and shift attention to relevant clinical signs.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Acknowledge the fear while assessing hydration and illness severity.",
          "essential": [
            "Acknowledged the parent’s concern",
            "Explored drinking and the actual feared consequence"
          ],
          "improve": [
            "These are separate questions. Pause after the first and respond before asking the second."
          ],
          "next": "focus"
        },
        {
          "id": "focus",
          "phrase": "focus",
          "stage": "focus",
          "patient": "What should I check while we’re talking?",
          "task": "Triage serious illness and hydration before completing the assessment.",
          "model": "Is he difficult to wake, struggling to breathe or changing colour? Is there a rash that does not fade with pressure? How much is he drinking and passing urine? I’ll also ask about pain, vomiting and other symptoms, and arrange an examination if needed.",
          "simple": "Let’s check alertness, breathing, rash, drinking and urine, one at a time.",
          "starter": "Thank you… I’d like to ask…",
          "purpose": "Choose questions that distinguish causes and change urgency or management.",
          "tip": "A signpost does not replace the actual assessment. Ask the relevant questions clearly, one at a time.",
          "reply": "No emergency features are described. Because assessment is incomplete remotely, a suitable same-day face-to-face review is arranged in this scenario.",
          "options": [
            "Triage serious illness and hydration before completing the assessment.",
            "Use the height of the temperature alone to decide whether serious illness is present.",
            "Use improvement after fever medicine as the test of whether urgent assessment is needed."
          ],
          "answer": 0,
          "why": "Ask questions individually and use the appropriate urgent pathway for red or amber features. Do not assume a reassuring voice excludes serious illness.",
          "essential": [
            "Checked serious-illness warning features",
            "Assessed hydration and arranged needed face-to-face review"
          ],
          "improve": [
            "A signpost does not replace the actual assessment. Ask the relevant questions clearly, one at a time."
          ],
          "next": "summary",
          "branch": {
            "label": "Practise a serious-illness disclosure",
            "patient": "He is now very hard to wake and has a rash that does not fade when I press it.",
            "next": "urgent"
          }
        },
        {
          "id": "summary",
          "phrase": "summary",
          "stage": "focus",
          "patient": "The clinician who examined him said there were no signs of serious illness.",
          "task": "Use actual assessment findings and check for interval change.",
          "model": "After that assessment, he is alert, breathing comfortably and drinking enough to pass urine. No concerning examination features were found in the supplied scenario. The fever has lasted two days. Have I missed any change since the examination?",
          "simple": "The assessment is reassuring so far. Has anything changed since he was seen?",
          "starter": "Let me check… Your main concern…",
          "purpose": "Check the facts and patient priority before explaining your assessment.",
          "tip": "A summary should be short and accurate. Correct it if the patient adds or changes information.",
          "reply": "No new symptoms have appeared since the examination.",
          "options": [
            "Use actual assessment findings and check for interval change.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Only use findings that have been established; a fictional supplied examination is not something inferred from the phone call.",
          "essential": [
            "Linked the summary to supplied examination findings",
            "Asked about change since assessment"
          ],
          "improve": [
            "A summary should be short and accurate. Correct it if the patient adds or changes information."
          ],
          "next": "explain"
        },
        {
          "id": "explain",
          "phrase": "explain",
          "stage": "explain",
          "patient": "Why does he not need antibiotics?",
          "task": "Explain the current decision and avoid a blanket claim about all fevers.",
          "model": "The assessment has not found a reason to think antibiotics would help at present. Many childhood fevers are caused by viruses. Antibiotics do not treat viruses and can cause side effects, but we will reassess if the picture changes.",
          "simple": "We haven’t found a reason for antibiotics now. We need to keep watching how he is and reassess if needed.",
          "starter": "From what you’ve told me… because…",
          "purpose": "Explain the reasoning at the right level of certainty.",
          "tip": "Avoid promising a diagnosis from an incomplete remote assessment. Explain what further assessment is needed.",
          "reply": "I thought every high temperature meant a bacterial infection.",
          "options": [
            "Explain the current decision and avoid a blanket claim about all fevers.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Antibiotics depend on the cause and clinical assessment, not the temperature number alone.",
          "essential": [
            "Explained why antibiotics are not currently indicated",
            "Kept reassessment possible if the clinical picture changes"
          ],
          "improve": [
            "Avoid promising a diagnosis from an incomplete remote assessment. Explain what further assessment is needed."
          ],
          "next": "uncertainty"
        },
        {
          "id": "uncertainty",
          "phrase": "uncertainty",
          "stage": "explain",
          "patient": "So can you guarantee he will be better tomorrow?",
          "task": "Acknowledge uncertainty and explain a defined reassessment trigger.",
          "model": "I can’t promise an exact recovery time. We can agree how to keep him comfortable, what to watch for and when he should be checked again. If the fever lasts five days or more, he needs further assessment, even if you have not noticed other warning signs.",
          "simple": "We can’t guarantee tomorrow. We’ll agree home care and clear reasons to seek another assessment.",
          "starter": "What we know… What we still need… The next step…",
          "purpose": "Make uncertainty understandable and attach it to a practical next step.",
          "tip": "Pause after a small amount of information. Respond to the patient’s question before adding more.",
          "reply": "It helps to know what changes matter.",
          "options": [
            "Acknowledge uncertainty and explain a defined reassessment trigger.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Persistent fever for five days or more warrants assessment including consideration of Kawasaki disease. New concerning symptoms require earlier action.",
          "essential": [
            "Avoided promising a fixed recovery time",
            "Explained persistent-fever and earlier-change review triggers"
          ],
          "improve": [
            "Pause after a small amount of information. Respond to the patient’s question before adding more."
          ],
          "next": "recommend"
        },
        {
          "id": "recommend",
          "phrase": "recommend",
          "stage": "plan",
          "patient": "What can I do to help him now?",
          "task": "Explain comfort-focused care and safe use of an appropriate product.",
          "model": "Offer fluids regularly and watch his urine and behaviour. If he is distressed, we can discuss a suitable child’s paracetamol or ibuprofen product at the correct dose for him, checking suitability and the label. The aim is comfort, not simply reducing the number.",
          "simple": "Keep offering fluids. Use a suitable fever medicine if he is distressed, following the correct instructions.",
          "starter": "I recommend… because… What are your thoughts…",
          "purpose": "Offer a clinically appropriate recommendation and invite the patient’s view.",
          "tip": "Discuss relevant alternatives, risks and the consequences of no change when appropriate. Urgency affects available choices.",
          "reply": "I’ve been giving medicine whenever the number goes up, even if he seems comfortable.",
          "options": [
            "Explain comfort-focused care and safe use of an appropriate product.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Do not give a universal dose or routine simultaneous paracetamol and ibuprofen. Check age, weight where relevant, contraindications and product concentration.",
          "essential": [
            "Explained fluids and observation",
            "Linked any antipyretic to distress and safe product-specific instructions"
          ],
          "improve": [
            "Discuss relevant alternatives, risks and the consequences of no change when appropriate. Urgency affects available choices."
          ],
          "next": "barrier"
        },
        {
          "id": "barrier",
          "phrase": "barrier",
          "stage": "plan",
          "patient": "I’m exhausted and worry I’ll miss something overnight.",
          "task": "Make the safety plan usable for this family.",
          "model": "Who could help you check him and give you a break? Let’s write down the warning signs and contact numbers, and make sure you know how to get help overnight.",
          "simple": "Let’s agree who can help and how you can get advice overnight.",
          "starter": "What might make… Let’s work through…",
          "purpose": "Find the actual obstacle and agree arrangements the patient can use.",
          "tip": "Respond to the specific answer. Keep a necessary clinical recommendation clear while addressing practical barriers.",
          "reply": "Another adult can help, and the parent has the agreed out-of-hours contact.",
          "options": [
            "Make the safety plan usable for this family.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "A long warning list is less useful than clear recognition, action and accessible help.",
          "essential": [
            "Explored available support",
            "Confirmed an accessible overnight contact route"
          ],
          "improve": [
            "Respond to the specific answer. Keep a necessary clinical recommendation clear while addressing practical barriers."
          ],
          "next": "safety"
        },
        {
          "id": "safety",
          "phrase": "safety",
          "stage": "close",
          "patient": "What should make me call for help immediately?",
          "task": "Give specific severity-based actions and check the parent understands them.",
          "model": "Call 999 if he is hard to wake, has severe breathing difficulty, has a seizure or develops a rash that does not fade under pressure. Seek urgent advice for dehydration, deterioration or if you are more worried, and arrange reassessment if fever lasts five days or more. Do not wait for a rash if he is very unwell.",
          "simple": "Serious breathing trouble, being hard to wake or a seizure needs emergency help. Seek earlier advice if he deteriorates or drinks and urinates much less.",
          "starter": "If… please… If things have not… by…",
          "purpose": "Give relevant warning signs, a contact route, urgency and a review plan.",
          "tip": "Choose advice for this patient and condition. “Come back if worse” alone leaves the action unclear.",
          "reply": "The parent can describe the emergency signs and urgent-contact plan.",
          "options": [
            "Give specific severity-based actions and check the parent understands them.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Safety netting must be tailored; very young infants have different age-related thresholds and should not be managed using this three-year-old example.",
          "essential": [
            "Distinguished emergency from urgent/review triggers",
            "Explained not to wait for every sign to appear"
          ],
          "improve": [
            "Choose advice for this patient and condition. “Come back if worse” alone leaves the action unclear."
          ],
          "next": "check"
        },
        {
          "id": "check",
          "phrase": "check",
          "stage": "close",
          "patient": "Can you go over what I should do tonight?",
          "task": "Use teach-back and confirm follow-up ownership.",
          "model": "Could you tell me how you will help him, what you will look out for and who you will contact? I want to check I have made the plan clear. We’ll confirm any planned review and you should seek help sooner if he changes.",
          "simple": "Could you talk me through tonight’s plan and when you will get help?",
          "starter": "Just so I can check… could you tell me… I will…",
          "purpose": "Check understanding, correct gaps and name who will arrange and review each action.",
          "tip": "Make teach-back about the clarity of your explanation. Resolve any misunderstanding before closing.",
          "reply": "The parent repeats the fluid, comfort, observation and contact plan; one unclear instruction is corrected.",
          "options": [
            "Use teach-back and confirm follow-up ownership.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Correct the actual misunderstanding rather than assuming that nodding or saying yes establishes understanding.",
          "essential": [
            "Checked the practical home plan",
            "Confirmed earlier-help and review arrangements"
          ],
          "improve": [
            "Make teach-back about the clarity of your explanation. Resolve any misunderstanding before closing."
          ],
          "next": null
        },
        {
          "id": "urgent",
          "phrase": "focus",
          "stage": "focus",
          "patient": "He is now very hard to wake and has a rash that does not fade when I press it.",
          "task": "Arrange emergency assessment for a child with serious warning signs.",
          "model": "This change needs emergency help now. I will arrange the emergency response through our pathway. Please confirm your exact location and callback number, and keep Eli with an adult while help is arranged. Do not wait to see whether fever medicine works.",
          "simple": "He needs emergency help now. Call 999 and let’s confirm where you are. Do not wait for fever medicine to work.",
          "starter": "This changes… I’m concerned because… I will arrange…",
          "purpose": "Arrange emergency assessment for a child with serious warning signs.",
          "tip": "Stop routine teaching and management when a real emergency is identified. Follow the emergency pathway, maintain contact as appropriate and document the handover.",
          "reply": "In this fictional scenario, the clinician confirms location and contact details, arranges the urgent help and makes an accepted handover.",
          "options": [
            "Arrange emergency assessment for a child with serious warning signs.",
            "Finish the routine discussion before acting.",
            "Wait for the next planned appointment."
          ],
          "answer": 0,
          "why": "Difficulty waking and a non-fading rash with fever are emergency warning features. A routine appointment or a response to antipyretic medicine is not an adequate safety test.",
          "essential": [
            "Recognised serious warning signs",
            "Arranged immediate emergency help and practical contact details"
          ],
          "improve": [
            "Explain the reason briefly, then arrange the actual clinical action and handover."
          ],
          "next": null
        }
      ]
    },
    {
      "id": "constipation",
      "title": "Soiling, painful stools and fear of laxatives",
      "category": "Children and treatment discussion",
      "patient": "Toby’s parent · Toby is 7 · Video",
      "brief": "Toby has painful infrequent stools, withholding and soiling. Assess red flags, bowel pattern, growth and possible faecal impaction before deciding on treatment. Do not assume soiling is deliberate or treat suspected overflow as simple diarrhoea.",
      "goal": "Practise clear assessment, a proportionate explanation and a workable shared plan; repeat the hardest exchange with less help.",
      "atlas": "pd-constipation",
      "studio": null,
      "links": [
        {
          "label": "NICE: constipation in children",
          "url": "https://www.nice.org.uk/guidance/cg99"
        },
        {
          "label": "NHS: constipation in children",
          "url": "https://www.nhs.uk/conditions/baby/health/constipation-in-children/"
        }
      ],
      "nodes": [
        {
          "id": "hello",
          "phrase": "hello",
          "stage": "open",
          "patient": "He keeps dirtying his pants. Is he doing it on purpose?",
          "task": "Establish who you are speaking with and a safe setting.",
          "model": "Hello, I’m Dr Patel. Could I confirm your name, your relationship to Toby and his details? Is he with you, and can we include him in a way that feels comfortable?",
          "simple": "Could I check your details and Toby’s? Let’s hear from him too, if he feels comfortable.",
          "starter": "Hello, I’m… Could I check… Is it…",
          "purpose": "Introduce yourself accurately, confirm identity and establish whether sensitive discussion is safe.",
          "tip": "Pause for each answer. Establish location and a callback route when the clinical situation requires it.",
          "reply": "The patient confirms their identity and privacy in this fictional consultation.",
          "options": [
            "Establish who you are speaking with and a safe setting.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Identity, privacy and the patient’s preferences shape safe communication.",
          "essential": [
            "Introduced the role and checked identity",
            "Established privacy and who is involved"
          ],
          "improve": [
            "Pause for each answer. Establish location and a callback route when the clinical situation requires it."
          ],
          "next": "agenda"
        },
        {
          "id": "agenda",
          "phrase": "agenda",
          "stage": "open",
          "patient": "I want the accidents to stop, but I’m worried about laxatives.",
          "task": "Find the full agenda and agree a safe priority.",
          "model": "Before we decide where to start, is there anything else you were hoping we could discuss? Then we can agree what needs attention first.",
          "simple": "Is there anything else you wanted help with? Let’s agree where to start.",
          "starter": "Before we decide… is there anything else…",
          "purpose": "Find important concerns early, then agree a safe priority.",
          "tip": "An invitation is not a promise to finish every issue. Triage urgent concerns before deferring anything.",
          "reply": "The patient confirms the agenda described in the brief.",
          "options": [
            "Find the full agenda and agree a safe priority.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Check the urgency of the concerns before deciding what can wait.",
          "essential": [
            "Invited other concerns",
            "Agreed the priority without overlooking urgent symptoms"
          ],
          "improve": [
            "An invitation is not a promise to finish every issue. Triage urgent concerns before deferring anything."
          ],
          "next": "story"
        },
        {
          "id": "story",
          "phrase": "story",
          "stage": "understand",
          "patient": "Sometimes he goes nearly a week without a proper poo.",
          "task": "Clarify stool pattern, pain, withholding and soiling.",
          "model": "Could you tell me about the bowel pattern, pain and accidents? I’d like to hear how it feels for Toby too.",
          "simple": "How often does he pass a stool? Is it painful, and what are the accidents like?",
          "starter": "Could you talk me through…",
          "purpose": "Let the patient describe the problem before narrowing the questions.",
          "tip": "Ask one question and allow an answer. Interrupt when an urgent finding requires immediate action.",
          "reply": "He passes large hard stools, avoids the toilet and has small soiling accidents between them.",
          "options": [
            "Clarify stool pattern, pain, withholding and soiling.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "These details can suggest constipation with overflow; they need assessment rather than blame.",
          "essential": [
            "Explored the bowel pattern and pain",
            "Asked about withholding and soiling"
          ],
          "improve": [
            "Ask one question and allow an answer. Interrupt when an urgent finding requires immediate action."
          ],
          "next": "impact"
        },
        {
          "id": "impact",
          "phrase": "impact",
          "stage": "understand",
          "patient": "He says he’s too scared to sit on the toilet.",
          "task": "Explore the pain–withholding cycle and the child’s circumstances.",
          "model": "It sounds as though passing a stool has become frightening because it hurts. What happens when he feels he needs to go, especially at school?",
          "simple": "Is he avoiding the toilet because he expects pain? How is school affected?",
          "starter": "How is this affecting… What is worrying…",
          "purpose": "Understand function and the patient’s concern, then use the answers in your plan.",
          "tip": "These are separate questions. Pause after the first and respond before asking the second.",
          "reply": "He hides and holds on. School toilets do not feel private.",
          "options": [
            "Explore the pain–withholding cycle and the child’s circumstances.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Understand why the behaviour occurs and avoid treating accidents as disobedience.",
          "essential": [
            "Acknowledged pain and fear",
            "Explored school and toileting barriers"
          ],
          "improve": [
            "These are separate questions. Pause after the first and respond before asking the second."
          ],
          "next": "focus"
        },
        {
          "id": "focus",
          "phrase": "focus",
          "stage": "focus",
          "patient": "Do we need any tests?",
          "task": "Assess warning features and impaction before diagnosing ordinary constipation.",
          "model": "First we need the history and an appropriate examination. I’ll ask about when it started, problems as a newborn, growth, vomiting, a swollen tummy, leg or back symptoms, and other warning signs. We also need to assess whether stool is impacted.",
          "simple": "Let’s check warning signs and whether stool has built up before deciding on tests or treatment.",
          "starter": "Thank you… I’d like to ask…",
          "purpose": "Choose questions that distinguish causes and change urgency or management.",
          "tip": "A signpost does not replace the actual assessment. Ask the relevant questions clearly, one at a time.",
          "reply": "No warning features are identified after the appropriate assessment in this scenario; the clinician finds evidence of faecal impaction.",
          "options": [
            "Assess warning features and impaction before diagnosing ordinary constipation.",
            "Assume overflow without checking warning features or assessing impaction.",
            "Treat all runny soiling as diarrhoea without clarifying the bowel history."
          ],
          "answer": 0,
          "why": "Red flags need an alternative or specialist pathway. Do not infer examination findings from a video history alone.",
          "essential": [
            "Assessed warning features",
            "Established the need for and result of an impaction assessment"
          ],
          "improve": [
            "A signpost does not replace the actual assessment. Ask the relevant questions clearly, one at a time."
          ],
          "next": "summary"
        },
        {
          "id": "summary",
          "phrase": "summary",
          "stage": "focus",
          "patient": "But the accidents look runny. How can he be constipated?",
          "task": "Explain overflow using the supplied assessment findings.",
          "model": "The assessment suggests a build-up of stool. Softer stool can leak around it, causing soiling. It is not something he is choosing to do. Does that fit with what you have noticed?",
          "simple": "Softer stool can leak around a hard build-up. The accidents can happen without him choosing them.",
          "starter": "Let me check… Your main concern…",
          "purpose": "Check the facts and patient priority before explaining your assessment.",
          "tip": "A summary should be short and accurate. Correct it if the patient adds or changes information.",
          "reply": "That explains why the accidents happen between the hard stools.",
          "options": [
            "Explain overflow using the supplied assessment findings.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Avoid prescribing treatment for simple diarrhoea when overflow impaction is the explanation.",
          "essential": [
            "Explained overflow clearly",
            "Removed blame from the child"
          ],
          "improve": [
            "A summary should be short and accurate. Correct it if the patient adds or changes information."
          ],
          "next": "explain"
        },
        {
          "id": "explain",
          "phrase": "explain",
          "stage": "explain",
          "patient": "I’ve been telling him off. I feel awful now.",
          "task": "Respond to emotion and reframe management constructively.",
          "model": "You were trying to understand what was happening. We can now focus on making stools soft and comfortable and helping him feel safe using the toilet. Praise for trying can be more helpful than punishment for accidents.",
          "simple": "Let’s help him pass stools comfortably and support his efforts without blame.",
          "starter": "From what you’ve told me… because…",
          "purpose": "Explain the reasoning at the right level of certainty.",
          "tip": "Avoid promising a diagnosis from an incomplete remote assessment. Explain what further assessment is needed.",
          "reply": "I’d like to know what to say to school.",
          "options": [
            "Respond to emotion and reframe management constructively.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Offer practical, non-punitive support rather than shame or unrealistic reassurance.",
          "essential": [
            "Acknowledged the parent’s reaction without blame",
            "Explained supportive behavioural goals"
          ],
          "improve": [
            "Avoid promising a diagnosis from an incomplete remote assessment. Explain what further assessment is needed."
          ],
          "next": "uncertainty"
        },
        {
          "id": "uncertainty",
          "phrase": "uncertainty",
          "stage": "explain",
          "patient": "Will a laxative make his bowel lazy?",
          "task": "Explain the purpose and explore the feared consequence.",
          "model": "The treatment is intended to clear the build-up and then keep stools soft while the bowel and toilet routine recover. We will choose a suitable medicine, explain how to use it and review the response. Do you have a particular concern about the medicine?",
          "simple": "The aim is to clear the build-up and keep stools comfortable, with a plan and review. What worries you about it?",
          "starter": "What we know… What we still need… The next step…",
          "purpose": "Make uncertainty understandable and attach it to a practical next step.",
          "tip": "Pause after a small amount of information. Respond to the patient’s question before adding more.",
          "reply": "I thought he would need it forever.",
          "options": [
            "Explain the purpose and explore the feared consequence.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Duration varies; avoid promising a fixed end date or saying treatment can stop as soon as the first stool is passed.",
          "essential": [
            "Explained clearing and maintenance as different phases",
            "Explored the concern about duration"
          ],
          "improve": [
            "Pause after a small amount of information. Respond to the patient’s question before adding more."
          ],
          "next": "recommend"
        },
        {
          "id": "recommend",
          "phrase": "recommend",
          "stage": "plan",
          "patient": "How do we start?",
          "task": "Recommend an assessment-led two-phase plan and product-specific instructions.",
          "model": "Because impaction was found, I recommend a disimpaction plan followed by maintenance treatment. Oral macrogol is commonly used; we need the correct product and regimen for his age and situation. I’ll explain what to expect and arrange an early review.",
          "simple": "We need a plan to clear the build-up, then keep stools soft. We’ll choose the right product and review early.",
          "starter": "I recommend… because… What are your thoughts…",
          "purpose": "Offer a clinically appropriate recommendation and invite the patient’s view.",
          "tip": "Discuss relevant alternatives, risks and the consequences of no change when appropriate. Urgency affects available choices.",
          "reply": "Will the accidents get worse at first?",
          "options": [
            "Recommend an assessment-led two-phase plan and product-specific instructions.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Licensing and regimens differ. During disimpaction, transient increased soiling or abdominal symptoms can occur; explain support and when to seek advice.",
          "essential": [
            "Linked treatment to established impaction",
            "Included maintenance and early review without inventing a dose"
          ],
          "improve": [
            "Discuss relevant alternatives, risks and the consequences of no change when appropriate. Urgency affects available choices."
          ],
          "next": "barrier"
        },
        {
          "id": "barrier",
          "phrase": "barrier",
          "stage": "plan",
          "patient": "I’m worried school won’t let him use the toilet when he needs to.",
          "task": "Make treatment feasible across the child’s day.",
          "model": "Let’s agree a discreet school plan: access to the toilet, privacy, spare clothes and a supportive response to accidents. At home we can build a comfortable toilet routine and reward trying, not just a successful stool.",
          "simple": "Let’s arrange private toilet access and a supportive routine at school and home.",
          "starter": "What might make… Let’s work through…",
          "purpose": "Find the actual obstacle and agree arrangements the patient can use.",
          "tip": "Respond to the specific answer. Keep a necessary clinical recommendation clear while addressing practical barriers.",
          "reply": "The parent will speak to school using a written plan agreed with the clinician.",
          "options": [
            "Make treatment feasible across the child’s day.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Diet, fluids and routine support medicine; do not rely on diet alone to treat established idiopathic constipation.",
          "essential": [
            "Addressed school access and privacy",
            "Used a non-punitive routine alongside clinical treatment"
          ],
          "improve": [
            "Respond to the specific answer. Keep a necessary clinical recommendation clear while addressing practical barriers."
          ],
          "next": "safety"
        },
        {
          "id": "safety",
          "phrase": "safety",
          "stage": "close",
          "patient": "When should we get advice rather than keep following the plan?",
          "task": "Provide a clear safety and treatment-failure plan.",
          "model": "Seek earlier assessment if he has significant worsening pain, vomiting, a swollen tummy, becomes unwell or develops another warning symptom. Contact us if the medicine cannot be taken or the plan is not working as expected. We’ll give the specific review and contact arrangements in writing.",
          "simple": "Get help sooner if he becomes unwell, vomits or has worsening pain or swelling. Contact us if the treatment plan is not working.",
          "starter": "If… please… If things have not… by…",
          "purpose": "Give relevant warning signs, a contact route, urgency and a review plan.",
          "tip": "Choose advice for this patient and condition. “Come back if worse” alone leaves the action unclear.",
          "reply": "The parent knows the earlier-help route and what to do if treatment is not tolerated.",
          "options": [
            "Provide a clear safety and treatment-failure plan.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Do not automatically attribute new severe symptoms to constipation or a laxative adverse effect.",
          "essential": [
            "Named relevant deterioration features",
            "Agreed a route for treatment failure or intolerance"
          ],
          "improve": [
            "Choose advice for this patient and condition. “Come back if worse” alone leaves the action unclear."
          ],
          "next": "check"
        },
        {
          "id": "check",
          "phrase": "check",
          "stage": "close",
          "patient": "How will we know when to reduce the medicine?",
          "task": "Check the two-phase plan and review-led adjustment.",
          "model": "We’ll review the stool pattern, comfort and accidents before changing treatment. Maintenance may need to continue after improvement and is reduced gradually when appropriate. Could you explain the two phases and the review plan in your own words?",
          "simple": "We review before reducing. Treatment often continues after improvement and is reduced gradually when appropriate. Could you talk me through the plan?",
          "starter": "Just so I can check… could you tell me… I will…",
          "purpose": "Check understanding, correct gaps and name who will arrange and review each action.",
          "tip": "Make teach-back about the clarity of your explanation. Resolve any misunderstanding before closing.",
          "reply": "The parent describes disimpaction, maintenance, the early review and how school will help.",
          "options": [
            "Check the two-phase plan and review-led adjustment.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Regular review should guide dose adjustment and gradual reduction; do not stop immediately after initial improvement.",
          "essential": [
            "Checked understanding of the two phases",
            "Explained continued review and appropriate gradual reduction"
          ],
          "improve": [
            "Make teach-back about the clarity of your explanation. Resolve any misunderstanding before closing."
          ],
          "next": null
        }
      ]
    },
    {
      "id": "memory",
      "title": "Memory changes and a fear of losing independence",
      "category": "Older adults and uncertainty",
      "patient": "Arthur Bell, 72 · Video with daughter by agreement",
      "brief": "Arthur has gradually worsening memory over eight months. Establish his own concerns and consent for family involvement, check for acute change and reversible contributors, assess function and safety, and agree the diagnostic pathway. A memory complaint does not establish dementia or lack of capacity.",
      "goal": "Practise clear assessment, a proportionate explanation and a workable shared plan; repeat the hardest exchange with less help.",
      "atlas": "op-memory",
      "studio": null,
      "links": [
        {
          "label": "NICE: dementia assessment and support",
          "url": "https://www.nice.org.uk/guidance/ng97"
        },
        {
          "label": "NHS: dementia assessment and diagnosis",
          "url": "https://www.nhs.uk/conditions/dementia/symptoms-and-diagnosis/diagnosis/"
        },
        {
          "label": "GOV.UK: severe memory problems and driving",
          "url": "https://www.gov.uk/severe-memory-problems-and-driving"
        }
      ],
      "nodes": [
        {
          "id": "hello",
          "phrase": "hello",
          "stage": "open",
          "patient": "My daughter says I’m forgetting things. I think she’s overreacting.",
          "task": "Establish who you are speaking with and a safe setting.",
          "model": "Hello Arthur, I’m Dr Patel. Could I confirm your details and who is with you? Are you comfortable speaking with your daughter present? I’d like to hear from you first.",
          "simple": "Hello Arthur. Could I check your details? Are you happy for your daughter to join us?",
          "starter": "Hello, I’m… Could I check… Is it…",
          "purpose": "Introduce yourself accurately, confirm identity and establish whether sensitive discussion is safe.",
          "tip": "Pause for each answer. Establish location and a callback route when the clinical situation requires it.",
          "reply": "The patient confirms their identity and privacy in this fictional consultation.",
          "options": [
            "Establish who you are speaking with and a safe setting.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Identity, privacy and the patient’s preferences shape safe communication.",
          "essential": [
            "Introduced the role and checked identity",
            "Established privacy and who is involved"
          ],
          "improve": [
            "Pause for each answer. Establish location and a callback route when the clinical situation requires it."
          ],
          "next": "agenda"
        },
        {
          "id": "agenda",
          "phrase": "agenda",
          "stage": "open",
          "patient": "I want to stay independent, and she wants me tested.",
          "task": "Find the full agenda and agree a safe priority.",
          "model": "Before we decide where to start, is there anything else you were hoping we could discuss? Then we can agree what needs attention first.",
          "simple": "Is there anything else you wanted help with? Let’s agree where to start.",
          "starter": "Before we decide… is there anything else…",
          "purpose": "Find important concerns early, then agree a safe priority.",
          "tip": "An invitation is not a promise to finish every issue. Triage urgent concerns before deferring anything.",
          "reply": "The patient confirms the agenda described in the brief.",
          "options": [
            "Find the full agenda and agree a safe priority.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Check the urgency of the concerns before deciding what can wait.",
          "essential": [
            "Invited other concerns",
            "Agreed the priority without overlooking urgent symptoms"
          ],
          "improve": [
            "An invitation is not a promise to finish every issue. Triage urgent concerns before deferring anything."
          ],
          "next": "story"
        },
        {
          "id": "story",
          "phrase": "story",
          "stage": "understand",
          "patient": "I lose things, but everyone does that.",
          "task": "Hear the patient first and obtain permission for collateral information.",
          "model": "Could you tell me what you have noticed yourself? With your agreement, I’d also like to hear what your daughter has seen.",
          "simple": "What changes have you noticed? Is it all right if your daughter adds her observations?",
          "starter": "Could you talk me through…",
          "purpose": "Let the patient describe the problem before narrowing the questions.",
          "tip": "Ask one question and allow an answer. Interrupt when an urgent finding requires immediate action.",
          "reply": "Arthur agrees. His daughter describes repeated questions and missed bills over eight months.",
          "options": [
            "Hear the patient first and obtain permission for collateral information.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Family observations can be valuable without displacing the patient’s voice.",
          "essential": [
            "Invited Arthur’s own account",
            "Checked consent for family involvement"
          ],
          "improve": [
            "Ask one question and allow an answer. Interrupt when an urgent finding requires immediate action."
          ],
          "next": "impact"
        },
        {
          "id": "impact",
          "phrase": "impact",
          "stage": "understand",
          "patient": "I’m worried you’ll make me leave my home.",
          "task": "Explore function and the specific fear behind resistance.",
          "model": "Staying at home and keeping your independence matter to you. What are you managing well, and what has become difficult or worrying?",
          "simple": "What are you managing well at home, and where would help be useful?",
          "starter": "How is this affecting… What is worrying…",
          "purpose": "Understand function and the patient’s concern, then use the answers in your plan.",
          "tip": "These are separate questions. Pause after the first and respond before asking the second.",
          "reply": "Arthur manages personal care but has missed medicines and left a pan heating once.",
          "options": [
            "Explore function and the specific fear behind resistance.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "A practical assessment should include actual safety issues and strengths.",
          "essential": [
            "Acknowledged the independence goal",
            "Explored daily function and concrete safety concerns"
          ],
          "improve": [
            "These are separate questions. Pause after the first and respond before asking the second."
          ],
          "next": "focus"
        },
        {
          "id": "focus",
          "phrase": "focus",
          "stage": "focus",
          "patient": "Can this just be put down to age?",
          "task": "Assess acuity, reversible contributors and immediate safety.",
          "model": "We should assess the changes properly. Has anything worsened suddenly over hours or days? I’ll also ask about mood, sleep, medicines, hearing and vision, physical illness and safety at home and while driving.",
          "simple": "Let’s check for sudden change and treatable contributors, then assess day-to-day safety.",
          "starter": "Thank you… I’d like to ask…",
          "purpose": "Choose questions that distinguish causes and change urgency or management.",
          "tip": "A signpost does not replace the actual assessment. Ask the relevant questions clearly, one at a time.",
          "reply": "There is no acute change in the ordinary path. Further assessment is arranged, including relevant examination, tests and cognitive assessment. Arthur reports recent difficulty finding a familiar driving route.",
          "options": [
            "Assess acuity, reversible contributors and immediate safety.",
            "Use one cognitive-test score as a complete diagnosis without assessing function.",
            "Explain the changes as normal ageing without further assessment."
          ],
          "answer": 0,
          "why": "Sudden confusion needs urgent assessment; gradual symptoms still require evaluation. A screening score alone cannot establish the whole diagnosis.",
          "essential": [
            "Distinguished gradual change from acute confusion",
            "Considered reversible contributors and functional safety"
          ],
          "improve": [
            "A signpost does not replace the actual assessment. Ask the relevant questions clearly, one at a time."
          ],
          "next": "summary"
        },
        {
          "id": "summary",
          "phrase": "summary",
          "stage": "focus",
          "patient": "Does this mean I definitely have dementia?",
          "task": "Summarise the impairment and explain diagnostic uncertainty.",
          "model": "You and your daughter describe a gradual change affecting some daily tasks. That needs assessment, but we cannot confirm the cause from this conversation. We will check for treatable contributors and consider specialist memory assessment. Have I missed anything important?",
          "simple": "The changes need assessment. We haven’t established the cause yet.",
          "starter": "Let me check… Your main concern…",
          "purpose": "Check the facts and patient priority before explaining your assessment.",
          "tip": "A summary should be short and accurate. Correct it if the patient adds or changes information.",
          "reply": "Arthur says the uncertainty is difficult but prefers an honest explanation.",
          "options": [
            "Summarise the impairment and explain diagnostic uncertainty.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Do not label dementia from one symptom or assume the person lacks capacity because memory is affected.",
          "essential": [
            "Summarised actual functional changes",
            "Avoided premature diagnosis or assumptions about capacity"
          ],
          "improve": [
            "A summary should be short and accurate. Correct it if the patient adds or changes information."
          ],
          "next": "explain"
        },
        {
          "id": "explain",
          "phrase": "explain",
          "stage": "explain",
          "patient": "What happens in a memory assessment?",
          "task": "Explain the assessment pathway in manageable language.",
          "model": "We look at the history, daily functioning, general health and medicines, and use appropriate memory or thinking tests. If dementia is still suspected after initial assessment and reversible causes are considered, a specialist service can help clarify the diagnosis and support needs.",
          "simple": "It includes your story, everyday tasks, health checks and thinking tests. A specialist can help if dementia remains suspected.",
          "starter": "From what you’ve told me… because…",
          "purpose": "Explain the reasoning at the right level of certainty.",
          "tip": "Avoid promising a diagnosis from an incomplete remote assessment. Explain what further assessment is needed.",
          "reply": "Arthur asks whether his daughter must attend every appointment.",
          "options": [
            "Explain the assessment pathway in manageable language.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Adapt testing and communication for language, education, sensory needs and the person’s circumstances.",
          "essential": [
            "Explained more than a single test score",
            "Described appropriate assessment and referral steps"
          ],
          "improve": [
            "Avoid promising a diagnosis from an incomplete remote assessment. Explain what further assessment is needed."
          ],
          "next": "uncertainty"
        },
        {
          "id": "uncertainty",
          "phrase": "uncertainty",
          "stage": "explain",
          "patient": "Can my daughter decide everything for me now?",
          "task": "Support decision-making and clarify preferred involvement.",
          "model": "Your views remain central. We support you to make decisions and assess your ability for a particular decision if there is a concern. Memory difficulties do not automatically mean you cannot decide. Who would you like involved in the next steps?",
          "simple": "You remain involved in decisions. Memory problems do not automatically remove that right. Who would you like to help?",
          "starter": "What we know… What we still need… The next step…",
          "purpose": "Make uncertainty understandable and attach it to a practical next step.",
          "tip": "Pause after a small amount of information. Respond to the patient’s question before adding more.",
          "reply": "Arthur wants his daughter at the first assessment but wants explanations directed to him.",
          "options": [
            "Support decision-making and clarify preferred involvement.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Capacity is decision-specific and uses the relevant legal framework; do not assume it from age or a diagnosis.",
          "essential": [
            "Kept the patient’s voice central",
            "Avoided a blanket assumption about capacity"
          ],
          "improve": [
            "Pause after a small amount of information. Respond to the patient’s question before adding more."
          ],
          "next": "recommend"
        },
        {
          "id": "recommend",
          "phrase": "recommend",
          "stage": "plan",
          "patient": "What would you recommend today?",
          "task": "Combine diagnostic steps with immediate functional and driving safety.",
          "model": "I recommend completing the initial assessment and agreeing practical support now for medicines, bills and the cooking concern. We should also discuss the driving difficulty before you drive again and arrange the appropriate advice.",
          "simple": "Let’s arrange assessment and practical support now, and address the driving safety concern before more driving.",
          "starter": "I recommend… because… What are your thoughts…",
          "purpose": "Offer a clinically appropriate recommendation and invite the patient’s view.",
          "tip": "Discuss relevant alternatives, risks and the consequences of no change when appropriate. Urgency affects available choices.",
          "reply": "Arthur is upset that driving is part of the discussion.",
          "options": [
            "Combine diagnostic steps with immediate functional and driving safety.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Do not defer concrete safety issues until a formal diagnosis is made.",
          "essential": [
            "Recommended the assessment pathway",
            "Addressed current safety needs alongside diagnosis"
          ],
          "improve": [
            "Discuss relevant alternatives, risks and the consequences of no change when appropriate. Urgency affects available choices."
          ],
          "next": "barrier"
        },
        {
          "id": "barrier",
          "phrase": "barrier",
          "stage": "plan",
          "patient": "Without the car I can’t get to the shops.",
          "task": "Explain the individual driving concern and address its practical impact.",
          "model": "I understand that driving is part of your independence. Getting lost on a familiar route raises a safety concern, so I recommend you do not drive while we assess that. Let’s arrange practical alternatives and explain the relevant licensing advice for where you live.",
          "simple": "I know the car matters. Because of the recent difficulty, please pause driving while we assess safety, and let’s arrange alternatives.",
          "starter": "What might make… Let’s work through…",
          "purpose": "Find the actual obstacle and agree arrangements the patient can use.",
          "tip": "Respond to the specific answer. Keep a necessary clinical recommendation clear while addressing practical barriers.",
          "reply": "Arthur agrees to pause driving with family help for essential journeys.",
          "options": [
            "Explain the individual driving concern and address its practical impact.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "In Great Britain severe memory problems affecting driving and diagnosed dementia require DVLA advice/notification; Northern Ireland uses DVA. Do not imply every mild memory complaint automatically ends a licence.",
          "essential": [
            "Explained the specific immediate driving concern",
            "Agreed alternatives and location-appropriate licensing advice"
          ],
          "improve": [
            "Respond to the specific answer. Keep a necessary clinical recommendation clear while addressing practical barriers."
          ],
          "next": "safety"
        },
        {
          "id": "safety",
          "phrase": "safety",
          "stage": "close",
          "patient": "What should my daughter do if I get suddenly more confused?",
          "task": "Distinguish an acute deterioration from the gradual memory pathway.",
          "model": "A sudden change over hours or days needs urgent medical assessment rather than waiting for the memory appointment. New stroke symptoms, severe illness or immediate danger need emergency help. Let’s also agree what to do if medicines, cooking or getting lost become unsafe.",
          "simple": "Sudden confusion needs urgent assessment. New serious symptoms or immediate danger need emergency help.",
          "starter": "If… please… If things have not… by…",
          "purpose": "Give relevant warning signs, a contact route, urgency and a review plan.",
          "tip": "Choose advice for this patient and condition. “Come back if worse” alone leaves the action unclear.",
          "reply": "Arthur and his daughter can describe the acute-change and home-safety contact plan.",
          "options": [
            "Distinguish an acute deterioration from the gradual memory pathway.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "New delirium or other acute illness should not be explained away as progression of dementia.",
          "essential": [
            "Specified urgent assessment for acute change",
            "Agreed a practical home-safety escalation route"
          ],
          "improve": [
            "Choose advice for this patient and condition. “Come back if worse” alone leaves the action unclear."
          ],
          "next": "check"
        },
        {
          "id": "check",
          "phrase": "check",
          "stage": "close",
          "patient": "Who will let us know about the tests and referral?",
          "task": "Confirm results/referral ownership, consent and follow-up.",
          "model": "We’ll name the clinician reviewing the tests, explain how the referral will be tracked and book a follow-up. Could you and your daughter tell me the next steps so I can check I have explained them clearly? We’ll record your preferences about involvement.",
          "simple": "We’ll agree who checks the tests and referral and when we meet again. Could you talk me through the plan?",
          "starter": "Just so I can check… could you tell me… I will…",
          "purpose": "Check understanding, correct gaps and name who will arrange and review each action.",
          "tip": "Make teach-back about the clarity of your explanation. Resolve any misunderstanding before closing.",
          "reply": "Arthur and his daughter repeat the assessment, current support, driving advice and follow-up arrangements.",
          "options": [
            "Confirm results/referral ownership, consent and follow-up.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "A referral is not a substitute for support and review while waiting.",
          "essential": [
            "Named test/referral follow-up ownership",
            "Checked understanding and recorded involvement preferences"
          ],
          "improve": [
            "Make teach-back about the clarity of your explanation. Resolve any misunderstanding before closing."
          ],
          "next": null
        }
      ]
    },
    {
      "id": "advance",
      "title": "“Does a DNACPR decision mean you are giving up?”",
      "category": "Advance care and sensitive explanation",
      "patient": "Ruth Mason, 79 · Telephone",
      "brief": "Ruth has advanced heart failure and a recent hospital discussion about CPR. She is currently clinically stable in this scenario. Explore what she understood, explain the scope of CPR decisions and agree further individualised discussion and documentation with the responsible team. Do not assume a recorded form settles all treatment decisions.",
      "goal": "Practise clear assessment, a proportionate explanation and a workable shared plan; repeat the hardest exchange with less help.",
      "atlas": "op-advance-care",
      "studio": null,
      "links": [
        {
          "label": "NHS: DNACPR decisions",
          "url": "https://www.nhs.uk/tests-and-treatments/do-not-attempt-cardiopulmonary-resuscitation-dnacpr-decisions/"
        },
        {
          "label": "GMC: CPR and decision-making",
          "url": "https://www.gmc-uk.org/professional-standards/the-professional-standards/treatment-and-care-towards-the-end-of-life/cardiopulmonary-resuscitation-cpr"
        }
      ],
      "nodes": [
        {
          "id": "hello",
          "phrase": "hello",
          "stage": "open",
          "patient": "The hospital gave me a form. Have they decided I’m not worth treating?",
          "task": "Establish who you are speaking with and a safe setting.",
          "model": "Hello, I’m Dr Patel, one of the GPs. Could I check your name and date of birth? Is it safe and private for us to speak?",
          "simple": "Hello, I’m Dr Patel. Could you confirm your details? Can you speak privately?",
          "starter": "Hello, I’m… Could I check… Is it…",
          "purpose": "Introduce yourself accurately, confirm identity and establish whether sensitive discussion is safe.",
          "tip": "Pause for each answer. Establish location and a callback route when the clinical situation requires it.",
          "reply": "The patient confirms their identity and privacy in this fictional consultation.",
          "options": [
            "Establish who you are speaking with and a safe setting.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Identity, privacy and the patient’s preferences shape safe communication.",
          "essential": [
            "Introduced the role and checked identity",
            "Established privacy and who is involved"
          ],
          "improve": [
            "Pause for each answer. Establish location and a callback route when the clinical situation requires it."
          ],
          "next": "agenda"
        },
        {
          "id": "agenda",
          "phrase": "agenda",
          "stage": "open",
          "patient": "I want to understand the form and make sure my daughter knows what I want.",
          "task": "Find the full agenda and agree a safe priority.",
          "model": "Before we decide where to start, is there anything else you were hoping we could discuss? Then we can agree what needs attention first.",
          "simple": "Is there anything else you wanted help with? Let’s agree where to start.",
          "starter": "Before we decide… is there anything else…",
          "purpose": "Find important concerns early, then agree a safe priority.",
          "tip": "An invitation is not a promise to finish every issue. Triage urgent concerns before deferring anything.",
          "reply": "The patient confirms the agenda described in the brief.",
          "options": [
            "Find the full agenda and agree a safe priority.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Check the urgency of the concerns before deciding what can wait.",
          "essential": [
            "Invited other concerns",
            "Agreed the priority without overlooking urgent symptoms"
          ],
          "improve": [
            "An invitation is not a promise to finish every issue. Triage urgent concerns before deferring anything."
          ],
          "next": "story"
        },
        {
          "id": "story",
          "phrase": "story",
          "stage": "understand",
          "patient": "They said something about not resuscitating me.",
          "task": "Explore the existing understanding before explaining or correcting it.",
          "model": "Could you tell me what was explained and what you understood from that conversation?",
          "simple": "What did they tell you, and what does the form mean to you?",
          "starter": "Could you talk me through…",
          "purpose": "Let the patient describe the problem before narrowing the questions.",
          "tip": "Ask one question and allow an answer. Interrupt when an urgent finding requires immediate action.",
          "reply": "Ruth understood it to mean that no treatment would be offered if she became unwell.",
          "options": [
            "Explore the existing understanding before explaining or correcting it.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "A sensitive explanation begins with the meaning the patient has taken from the discussion.",
          "essential": [
            "Explored what was actually explained",
            "Identified the patient’s interpretation"
          ],
          "improve": [
            "Ask one question and allow an answer. Interrupt when an urgent finding requires immediate action."
          ],
          "next": "impact"
        },
        {
          "id": "impact",
          "phrase": "impact",
          "stage": "understand",
          "patient": "It felt as if they had given up on me.",
          "task": "Acknowledge the specific fear and explore values.",
          "model": "I can understand why it felt frightening if you thought all treatment would stop. What matters most for you to understand or protect as we discuss this?",
          "simple": "That sounds frightening. What matters most to you in this discussion?",
          "starter": "How is this affecting… What is worrying…",
          "purpose": "Understand function and the patient’s concern, then use the answers in your plan.",
          "tip": "These are separate questions. Pause after the first and respond before asking the second.",
          "reply": "Ruth wants appropriate treatment and comfort, and does not want her daughter left with uncertainty.",
          "options": [
            "Acknowledge the specific fear and explore values.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Avoid immediately defending a form or assuming the patient’s preferences.",
          "essential": [
            "Acknowledged the fear of abandonment",
            "Explored the patient’s own priorities"
          ],
          "improve": [
            "These are separate questions. Pause after the first and respond before asking the second."
          ],
          "next": "focus"
        },
        {
          "id": "focus",
          "phrase": "focus",
          "stage": "focus",
          "patient": "Can we just change it today?",
          "task": "Check current illness and establish the decision context and responsibility.",
          "model": "We can review your concerns and the decision properly. First, are you more breathless or otherwise unwell now? I also need to check the current clinical information, what was discussed, your understanding and how you want others involved.",
          "simple": "Let’s check that you are well now and review the decision with the right clinical information and people.",
          "starter": "Thank you… I’d like to ask…",
          "purpose": "Choose questions that distinguish causes and change urgency or management.",
          "tip": "A signpost does not replace the actual assessment. Ask the relevant questions clearly, one at a time.",
          "reply": "Ruth is stable. The clinician obtains the relevant hospital record and confirms who holds clinical responsibility for review.",
          "options": [
            "Check current illness and establish the decision context and responsibility.",
            "Treat the existing form as a reason not to assess a new acute deterioration.",
            "Ask the daughter to decide while excluding the patient’s own understanding and preferences."
          ],
          "answer": 0,
          "why": "An acute deterioration needs clinical assessment now; an advance-care conversation must not delay it.",
          "essential": [
            "Checked current clinical needs",
            "Identified the record and clinician responsible for review"
          ],
          "improve": [
            "A signpost does not replace the actual assessment. Ask the relevant questions clearly, one at a time."
          ],
          "next": "summary"
        },
        {
          "id": "summary",
          "phrase": "summary",
          "stage": "focus",
          "patient": "So this is only about the heart stopping?",
          "task": "Summarise the concern and clarify the scope of DNACPR.",
          "model": "You want us to continue appropriate care if you are unwell and to explain what the CPR decision covers. A DNACPR decision concerns CPR if the heart or breathing stops; it does not itself mean that other appropriate treatment or care stops. Have I understood your concern?",
          "simple": "DNACPR is about CPR. It does not itself stop other appropriate treatment or care. Is that the main worry?",
          "starter": "Let me check… Your main concern…",
          "purpose": "Check the facts and patient priority before explaining your assessment.",
          "tip": "A summary should be short and accurate. Correct it if the patient adds or changes information.",
          "reply": "Ruth says that distinction was not clear before.",
          "options": [
            "Summarise the concern and clarify the scope of DNACPR.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Other treatment decisions need their own clinical assessment and discussion.",
          "essential": [
            "Clarified that DNACPR concerns CPR",
            "Avoided treating it as a blanket decision about all care"
          ],
          "improve": [
            "A summary should be short and accurate. Correct it if the patient adds or changes information."
          ],
          "next": "explain"
        },
        {
          "id": "explain",
          "phrase": "explain",
          "stage": "explain",
          "patient": "What would CPR involve for me?",
          "task": "Explain CPR plainly and offer an individualised discussion of benefit and burden.",
          "model": "CPR can include chest compressions and other emergency treatments to try to restart circulation. Its chance of helping and its burdens depend on the person’s health and circumstances. We should discuss what it would mean in your situation using the responsible team’s assessment, rather than give a general promise.",
          "simple": "CPR is emergency treatment after the heart stops. Its likely benefits and harms depend on your situation.",
          "starter": "From what you’ve told me… because…",
          "purpose": "Explain the reasoning at the right level of certainty.",
          "tip": "Avoid promising a diagnosis from an incomplete remote assessment. Explain what further assessment is needed.",
          "reply": "Ruth asks whether someone can give her an individual explanation rather than general statistics.",
          "options": [
            "Explain CPR plainly and offer an individualised discussion of benefit and burden.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Avoid arbitrary survival percentages or assuming that age alone determines the recommendation.",
          "essential": [
            "Explained CPR in everyday language",
            "Linked benefits and burdens to individual assessment"
          ],
          "improve": [
            "Avoid promising a diagnosis from an incomplete remote assessment. Explain what further assessment is needed."
          ],
          "next": "uncertainty"
        },
        {
          "id": "uncertainty",
          "phrase": "uncertainty",
          "stage": "explain",
          "patient": "Will I be forced to decide everything in this call?",
          "task": "Support informed participation and clarify involvement.",
          "model": "We can take the discussion at a pace that helps you understand, while addressing any decisions needed now. We will record your questions and arrange the appropriate review. What would you like your daughter to hear, and would you like her involved with your agreement?",
          "simple": "We can take this step by step and arrange the review. Would you like your daughter involved?",
          "starter": "What we know… What we still need… The next step…",
          "purpose": "Make uncertainty understandable and attach it to a practical next step.",
          "tip": "Pause after a small amount of information. Respond to the patient’s question before adding more.",
          "reply": "Ruth wants her daughter included in a planned discussion but wants to speak for herself.",
          "options": [
            "Support informed participation and clarify involvement.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Do not use family involvement to replace the capable patient’s own views. Urgent decisions still need appropriate timely action.",
          "essential": [
            "Supported understanding and patient participation",
            "Checked consent and preferences for family involvement"
          ],
          "improve": [
            "Pause after a small amount of information. Respond to the patient’s question before adding more."
          ],
          "next": "recommend"
        },
        {
          "id": "recommend",
          "phrase": "recommend",
          "stage": "plan",
          "patient": "What happens next?",
          "task": "Arrange a clinician-owned review and a coherent wider care plan.",
          "model": "I recommend reviewing the CPR discussion with the responsible clinician and making a broader plan for likely emergencies and what matters to you. We should be clear which decisions have been made, what remains to discuss and how the record will be shared.",
          "simple": "Let’s arrange an individual review and a clear plan for emergencies and ongoing care.",
          "starter": "I recommend… because… What are your thoughts…",
          "purpose": "Offer a clinically appropriate recommendation and invite the patient’s view.",
          "tip": "Discuss relevant alternatives, risks and the consequences of no change when appropriate. Urgency affects available choices.",
          "reply": "Ruth worries different services will read the form differently.",
          "options": [
            "Arrange a clinician-owned review and a coherent wider care plan.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Documentation should communicate the actual decisions and rationale; a form alone does not guarantee understanding or coordination.",
          "essential": [
            "Arranged an appropriate review",
            "Distinguished CPR from broader treatment and emergency planning"
          ],
          "improve": [
            "Discuss relevant alternatives, risks and the consequences of no change when appropriate. Urgency affects available choices."
          ],
          "next": "barrier"
        },
        {
          "id": "barrier",
          "phrase": "barrier",
          "stage": "plan",
          "patient": "How will the out-of-hours doctor know what was agreed?",
          "task": "Close the communication loop across services.",
          "model": "We’ll check how the agreed plan is recorded and shared through the local system, and make sure you have an accessible copy and know who to contact if it is wrong or your wishes change. I will confirm the practical arrangements rather than assume every service can see it.",
          "simple": "Let’s check the local sharing arrangements and make sure you have a copy and a contact for changes.",
          "starter": "What might make… Let’s work through…",
          "purpose": "Find the actual obstacle and agree arrangements the patient can use.",
          "tip": "Respond to the specific answer. Keep a necessary clinical recommendation clear while addressing practical barriers.",
          "reply": "The clinician confirms how the local record and patient-held information will be updated.",
          "options": [
            "Close the communication loop across services.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Sharing, documents and legal arrangements vary across UK nations and services. Use the actual local process.",
          "essential": [
            "Checked actual information-sharing arrangements",
            "Provided a route to review or correct the plan"
          ],
          "improve": [
            "Respond to the specific answer. Keep a necessary clinical recommendation clear while addressing practical barriers."
          ],
          "next": "safety"
        },
        {
          "id": "safety",
          "phrase": "safety",
          "stage": "close",
          "patient": "If I suddenly can’t breathe, should I still call for help?",
          "task": "Make ongoing access to appropriate acute care and comfort explicit.",
          "model": "Yes—seek urgent or emergency help for a serious deterioration using the plan we agree for your situation. A DNACPR decision does not mean you should be left without assessment, symptom relief or other appropriate treatment. Let’s make the contact route explicit.",
          "simple": "You should still seek help according to your emergency plan. DNACPR does not mean no care.",
          "starter": "If… please… If things have not… by…",
          "purpose": "Give relevant warning signs, a contact route, urgency and a review plan.",
          "tip": "Choose advice for this patient and condition. “Come back if worse” alone leaves the action unclear.",
          "reply": "Ruth describes when and how to seek help under the agreed plan.",
          "options": [
            "Make ongoing access to appropriate acute care and comfort explicit.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Avoid a universal instruction that conflicts with a genuinely agreed individual emergency-care plan; explain the actual plan clearly.",
          "essential": [
            "Confirmed continued appropriate care and symptom relief",
            "Agreed a specific deterioration contact route"
          ],
          "improve": [
            "Choose advice for this patient and condition. “Come back if worse” alone leaves the action unclear."
          ],
          "next": "check"
        },
        {
          "id": "check",
          "phrase": "check",
          "stage": "close",
          "patient": "Can you explain this to my daughter with me there?",
          "task": "Check understanding and confirm responsibility for the next discussion.",
          "model": "Yes, with your agreement. Let’s book the discussion and confirm who will lead it. Could you tell me what the CPR decision means and what it does not mean, so I can check I have explained it clearly? We will keep your questions and preferences central.",
          "simple": "Let’s arrange the conversation together and check what the form means and what care continues.",
          "starter": "Just so I can check… could you tell me… I will…",
          "purpose": "Check understanding, correct gaps and name who will arrange and review each action.",
          "tip": "Make teach-back about the clarity of your explanation. Resolve any misunderstanding before closing.",
          "reply": "Ruth repeats the distinction between CPR and other care; the responsible clinician and review arrangements are confirmed.",
          "options": [
            "Check understanding and confirm responsibility for the next discussion.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "A sensitive conversation needs continuity and an accessible record of what was actually agreed.",
          "essential": [
            "Checked understanding of the decision’s scope",
            "Confirmed an owned review with the patient’s chosen involvement"
          ],
          "improve": [
            "Make teach-back about the clarity of your explanation. Resolve any misunderstanding before closing."
          ],
          "next": null
        }
      ]
    },
    {
      "id": "menopause",
      "title": "Hot flushes, changing periods and uncertainty about HRT",
      "category": "Reproductive health",
      "patient": "Claire West, 49 · Telephone",
      "brief": "Claire has hot flushes, night sweats and changing periods, with effects on work and sleep. Explore the whole picture, abnormal bleeding and other causes; explain appropriate clinical identification of perimenopause and discuss individual treatment choices, contraception and review. This is not a complete HRT prescribing protocol.",
      "goal": "Practise clear assessment, a proportionate explanation and a workable shared plan; repeat the hardest exchange with less help.",
      "atlas": null,
      "studio": null,
      "links": [
        {
          "label": "NICE: menopause identification and management",
          "url": "https://www.nice.org.uk/guidance/ng23"
        },
        {
          "label": "NHS: menopause and perimenopause",
          "url": "https://www.nhs.uk/conditions/menopause-and-perimenopause/"
        },
        {
          "label": "NHS: HRT",
          "url": "https://www.nhs.uk/medicines/hormone-replacement-therapy-hrt/"
        }
      ],
      "nodes": [
        {
          "id": "hello",
          "phrase": "hello",
          "stage": "open",
          "patient": "I can’t sleep, I’m getting hot all the time and my periods have changed.",
          "task": "Establish who you are speaking with and a safe setting.",
          "model": "Hello, I’m Dr Patel, one of the GPs. Could I check your name and date of birth? Is it safe and private for us to speak?",
          "simple": "Hello, I’m Dr Patel. Could you confirm your details? Can you speak privately?",
          "starter": "Hello, I’m… Could I check… Is it…",
          "purpose": "Introduce yourself accurately, confirm identity and establish whether sensitive discussion is safe.",
          "tip": "Pause for each answer. Establish location and a callback route when the clinical situation requires it.",
          "reply": "The patient confirms their identity and privacy in this fictional consultation.",
          "options": [
            "Establish who you are speaking with and a safe setting.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Identity, privacy and the patient’s preferences shape safe communication.",
          "essential": [
            "Introduced the role and checked identity",
            "Established privacy and who is involved"
          ],
          "improve": [
            "Pause for each answer. Establish location and a callback route when the clinical situation requires it."
          ],
          "next": "agenda"
        },
        {
          "id": "agenda",
          "phrase": "agenda",
          "stage": "open",
          "patient": "I want to know if it is menopause and whether HRT is safe for me.",
          "task": "Find the full agenda and agree a safe priority.",
          "model": "Before we decide where to start, is there anything else you were hoping we could discuss? Then we can agree what needs attention first.",
          "simple": "Is there anything else you wanted help with? Let’s agree where to start.",
          "starter": "Before we decide… is there anything else…",
          "purpose": "Find important concerns early, then agree a safe priority.",
          "tip": "An invitation is not a promise to finish every issue. Triage urgent concerns before deferring anything.",
          "reply": "The patient confirms the agenda described in the brief.",
          "options": [
            "Find the full agenda and agree a safe priority.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Check the urgency of the concerns before deciding what can wait.",
          "essential": [
            "Invited other concerns",
            "Agreed the priority without overlooking urgent symptoms"
          ],
          "improve": [
            "An invitation is not a promise to finish every issue. Triage urgent concerns before deferring anything."
          ],
          "next": "story"
        },
        {
          "id": "story",
          "phrase": "story",
          "stage": "understand",
          "patient": "The night sweats are affecting my work.",
          "task": "Establish the symptom and menstrual pattern before explaining the cause.",
          "model": "Could you talk me through the symptoms and how your periods have changed?",
          "simple": "What symptoms have you noticed, and what changes have there been in your periods?",
          "starter": "Could you talk me through…",
          "purpose": "Let the patient describe the problem before narrowing the questions.",
          "tip": "Ask one question and allow an answer. Interrupt when an urgent finding requires immediate action.",
          "reply": "Claire describes hot flushes, night sweats and irregular periods over several months.",
          "options": [
            "Establish the symptom and menstrual pattern before explaining the cause.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Do not assume every new symptom or bleeding pattern is menopausal; use the full clinical context.",
          "essential": [
            "Explored symptoms and their course",
            "Clarified the menstrual and bleeding pattern"
          ],
          "improve": [
            "Ask one question and allow an answer. Interrupt when an urgent finding requires immediate action."
          ],
          "next": "impact"
        },
        {
          "id": "impact",
          "phrase": "impact",
          "stage": "understand",
          "patient": "I feel as though I’m no longer myself.",
          "task": "Explore the effect and agree the patient’s treatment priorities.",
          "model": "That sounds difficult, especially with disrupted sleep and work. Which symptoms are affecting your life most, and what would you most like help with first?",
          "simple": "What is affecting you most, and what would you like to improve first?",
          "starter": "How is this affecting… What is worrying…",
          "purpose": "Understand function and the patient’s concern, then use the answers in your plan.",
          "tip": "These are separate questions. Pause after the first and respond before asking the second.",
          "reply": "Claire’s priority is sleep and being able to concentrate in meetings.",
          "options": [
            "Explore the effect and agree the patient’s treatment priorities.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Use the patient’s own goals to discuss suitable options and review benefit.",
          "essential": [
            "Acknowledged the effect on daily life",
            "Identified a specific patient-centred goal"
          ],
          "improve": [
            "These are separate questions. Pause after the first and respond before asking the second."
          ],
          "next": "focus"
        },
        {
          "id": "focus",
          "phrase": "focus",
          "stage": "focus",
          "patient": "Can I just have a hormone blood test?",
          "task": "Assess relevant alternatives and warning features before deciding whether testing is useful.",
          "model": "I’ll first check the pattern and whether anything needs separate assessment: the bleeding, pregnancy possibility, medicines and contraception, and relevant health history. At your age, typical symptoms can often identify perimenopause clinically, without routine hormone tests.",
          "simple": "Let’s check the symptoms, bleeding and health history. Typical perimenopause at 45 or over often does not need a hormone test.",
          "starter": "Thank you… I’d like to ask…",
          "purpose": "Choose questions that distinguish causes and change urgency or management.",
          "tip": "A signpost does not replace the actual assessment. Ask the relevant questions clearly, one at a time.",
          "reply": "The clinician completes the relevant assessment. No concerning bleeding pattern or acute concern is identified in this scenario.",
          "options": [
            "Assess relevant alternatives and warning features before deciding whether testing is useful.",
            "Order a hormone panel automatically for every person over 45 with hot flushes.",
            "Attribute every new bleeding pattern to menopause without assessment."
          ],
          "answer": 0,
          "why": "NICE supports clinical identification in otherwise healthy people aged 45 or over with typical symptoms; additional symptoms can still require tests for another clinical question.",
          "essential": [
            "Assessed the bleeding and relevant alternatives",
            "Explained the role and limits of routine hormone testing"
          ],
          "improve": [
            "A signpost does not replace the actual assessment. Ask the relevant questions clearly, one at a time."
          ],
          "next": "summary"
        },
        {
          "id": "summary",
          "phrase": "summary",
          "stage": "focus",
          "patient": "So what does perimenopause mean?",
          "task": "Summarise the assessment and explain the distinction in plain language.",
          "model": "Your symptoms and changing periods fit the transition towards menopause after the assessment we have completed. Perimenopause is that transition. Menopause is identified after twelve months without a period when hormonal contraception is not obscuring the pattern. What would you like me to clarify?",
          "simple": "Perimenopause is the transition when periods can change and symptoms develop. We interpret it alongside your contraception and health.",
          "starter": "Let me check… Your main concern…",
          "purpose": "Check the facts and patient priority before explaining your assessment.",
          "tip": "A summary should be short and accurate. Correct it if the patient adds or changes information.",
          "reply": "Claire asks whether she can still become pregnant.",
          "options": [
            "Summarise the assessment and explain the distinction in plain language.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Do not treat irregular periods or HRT use as proof that contraception is unnecessary.",
          "essential": [
            "Linked the explanation to the actual assessment",
            "Explained the menstrual transition without assuming fertility has ended"
          ],
          "improve": [
            "A summary should be short and accurate. Correct it if the patient adds or changes information."
          ],
          "next": "explain"
        },
        {
          "id": "explain",
          "phrase": "explain",
          "stage": "explain",
          "patient": "Does HRT stop pregnancy as well?",
          "task": "Explain the different purposes of symptom treatment and contraception.",
          "model": "HRT treats menopausal symptoms; it is not contraception. We should agree contraception appropriate to your situation separately and explain how it fits with any treatment we choose.",
          "simple": "HRT is not contraception. We need a separate suitable contraception plan.",
          "starter": "From what you’ve told me… because…",
          "purpose": "Explain the reasoning at the right level of certainty.",
          "tip": "Avoid promising a diagnosis from an incomplete remote assessment. Explain what further assessment is needed.",
          "reply": "Claire says that was not clear from information she had read.",
          "options": [
            "Explain the different purposes of symptom treatment and contraception.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Avoid using HRT as a substitute for contraceptive counselling or giving a universal stopping date without considering age and method.",
          "essential": [
            "Stated clearly that HRT is not contraception",
            "Included an individual contraception discussion"
          ],
          "improve": [
            "Avoid promising a diagnosis from an incomplete remote assessment. Explain what further assessment is needed."
          ],
          "next": "uncertainty"
        },
        {
          "id": "uncertainty",
          "phrase": "uncertainty",
          "stage": "explain",
          "patient": "I hear different things about the risks. How do I decide?",
          "task": "Support a personalised benefits-and-harms discussion.",
          "model": "We can go through the benefits and risks that are relevant to your health and preferences. The type and route of HRT matter, as does whether you have a uterus. I can explain the options in small steps and give you an official decision aid to consider.",
          "simple": "Let’s discuss the benefits and risks for you, including the type and route, one step at a time.",
          "starter": "What we know… What we still need… The next step…",
          "purpose": "Make uncertainty understandable and attach it to a practical next step.",
          "tip": "Pause after a small amount of information. Respond to the patient’s question before adding more.",
          "reply": "Claire wants clear information about symptom benefit and her own medical history.",
          "options": [
            "Support a personalised benefits-and-harms discussion.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Do not give a blanket guarantee that HRT is safe for everyone or quote an unverified individual risk.",
          "essential": [
            "Acknowledged that risk is individual",
            "Offered clear discussion of relevant options and reliable information"
          ],
          "improve": [
            "Pause after a small amount of information. Respond to the patient’s question before adding more."
          ],
          "next": "recommend"
        },
        {
          "id": "recommend",
          "phrase": "recommend",
          "stage": "plan",
          "patient": "What would you recommend for the sleep and hot flushes?",
          "task": "Discuss appropriate choices and complete the prescribing assessment.",
          "model": "We can consider HRT if suitable and discuss other options, including menopause-specific cognitive behavioural therapy. Before prescribing, we need the full suitability check and an appropriate regimen. If you have a uterus, systemic oestrogen usually needs endometrial protection with a progestogen.",
          "simple": "Let’s discuss suitable HRT and non-hormonal options, after checking your history and the right regimen.",
          "starter": "I recommend… because… What are your thoughts…",
          "purpose": "Offer a clinically appropriate recommendation and invite the patient’s view.",
          "tip": "Discuss relevant alternatives, risks and the consequences of no change when appropriate. Urgency affects available choices.",
          "reply": "Claire would like to consider treatment after reviewing the individual benefits and risks.",
          "options": [
            "Discuss appropriate choices and complete the prescribing assessment.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Regimen, route, contraindications and monitoring must be checked using current guidance; this conversation does not establish a prescription.",
          "essential": [
            "Discussed suitable hormonal and non-hormonal options",
            "Recognised the need for regimen and suitability checks"
          ],
          "improve": [
            "Discuss relevant alternatives, risks and the consequences of no change when appropriate. Urgency affects available choices."
          ],
          "next": "barrier"
        },
        {
          "id": "barrier",
          "phrase": "barrier",
          "stage": "plan",
          "patient": "I don’t want to make a rushed decision today.",
          "task": "Respect deliberation and agree practical interim support and follow-up.",
          "model": "That’s reasonable. We can give you the information, address your main questions and agree a follow-up to make the decision. Is there an immediate problem with sleep or work that we should support while you consider the options?",
          "simple": "Take time to consider it. Let’s arrange follow-up and support the problems affecting you now.",
          "starter": "What might make… Let’s work through…",
          "purpose": "Find the actual obstacle and agree arrangements the patient can use.",
          "tip": "Respond to the specific answer. Keep a necessary clinical recommendation clear while addressing practical barriers.",
          "reply": "Claire wants a planned discussion rather than being told to return whenever she decides.",
          "options": [
            "Respect deliberation and agree practical interim support and follow-up.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Shared decision-making includes time to consider appropriate options without leaving the person unsupported.",
          "essential": [
            "Respected the patient’s pace",
            "Agreed a definite next discussion and interim needs"
          ],
          "improve": [
            "Respond to the specific answer. Keep a necessary clinical recommendation clear while addressing practical barriers."
          ],
          "next": "safety"
        },
        {
          "id": "safety",
          "phrase": "safety",
          "stage": "close",
          "patient": "What changes should I contact you about sooner?",
          "task": "Give a clear earlier-help plan and avoid blanket reassurance about bleeding.",
          "model": "Contact us promptly about new, unexpected, heavy or persistent bleeding or other concerning symptoms. If we start HRT, we’ll explain what bleeding can occur with that regimen and exactly when it needs assessment using current guidance. Severe symptoms or acute illness need urgent help.",
          "simple": "Let us know about concerning bleeding or new symptoms. Any HRT plan will include specific earlier-help advice.",
          "starter": "If… please… If things have not… by…",
          "purpose": "Give relevant warning signs, a contact route, urgency and a review plan.",
          "tip": "Choose advice for this patient and condition. “Come back if worse” alone leaves the action unclear.",
          "reply": "Claire understands not to assume every new bleeding change is simply menopause or a harmless HRT effect.",
          "options": [
            "Give a clear earlier-help plan and avoid blanket reassurance about bleeding.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Bleeding advice depends on the pattern, treatment and risk; check the current menopause and suspected-cancer recommendations.",
          "essential": [
            "Explained the need to assess concerning bleeding",
            "Kept any treatment safety advice regimen-specific and current"
          ],
          "improve": [
            "Choose advice for this patient and condition. “Come back if worse” alone leaves the action unclear."
          ],
          "next": "check"
        },
        {
          "id": "check",
          "phrase": "check",
          "stage": "close",
          "patient": "When would you review me if I start treatment?",
          "task": "Confirm understanding and a clear review plan.",
          "model": "We usually review around three months after starting treatment, then at least annually, with earlier review for problems or changes. We’ll check the symptoms that matter to you, any side effects and the ongoing plan. Could you tell me the next steps in your own words?",
          "simple": "We’ll review at about three months after starting, then at least yearly, and sooner if needed. Could you talk me through the plan?",
          "starter": "Just so I can check… could you tell me… I will…",
          "purpose": "Check understanding, correct gaps and name who will arrange and review each action.",
          "tip": "Make teach-back about the clarity of your explanation. Resolve any misunderstanding before closing.",
          "reply": "Claire repeats the treatment-decision appointment, contraception discussion and review arrangements.",
          "options": [
            "Confirm understanding and a clear review plan.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Review actual benefit, harms, suitability and preferences rather than automatically continuing a prescription.",
          "essential": [
            "Confirmed a planned review and earlier-help route",
            "Checked understanding of treatment and contraception next steps"
          ],
          "improve": [
            "Make teach-back about the clarity of your explanation. Resolve any misunderstanding before closing."
          ],
          "next": null
        }
      ]
    },
    {
      "id": "interpreter",
      "title": "Explaining a result with a professional interpreter",
      "category": "Communication and inclusive care",
      "patient": "Ana Costa, 54 · Telephone with interpreter",
      "brief": "Ana prefers Portuguese for a detailed medical discussion. A screening HbA1c is 52 mmol/mol and earlier messages were not understood. Establish language and privacy preferences, use appropriate professional interpretation, assess symptoms and agree confirmation with an accessible contact plan.",
      "goal": "Practise clear assessment, a proportionate explanation and a workable shared plan; repeat the hardest exchange with less help.",
      "atlas": "em-type2-diabetes",
      "studio": "c15",
      "links": [
        {
          "label": "GMC: communication and individual needs",
          "url": "https://www.gmc-uk.org/professional-standards/the-professional-standards/good-medical-practice/domain-2-patients-partnership-and-communication"
        },
        {
          "label": "NICE: possible diabetes and confirmation",
          "url": "https://www.nice.org.uk/guidance/ph38"
        },
        {
          "label": "NHS: diabetic ketoacidosis",
          "url": "https://www.nhs.uk/conditions/diabetic-ketoacidosis/"
        }
      ],
      "nodes": [
        {
          "id": "hello",
          "phrase": "hello",
          "stage": "open",
          "patient": "My daughter can tell you what is wrong. I didn’t understand the text.",
          "task": "Establish who you are speaking with and a safe setting.",
          "model": "Hello Ana, I’m Dr Patel. Could I confirm your details and which language you prefer for this discussion? We can arrange a professional interpreter. Is it safe to talk privately, and would you like your daughter involved?",
          "simple": "Could I check your details and preferred language? Let’s arrange an interpreter and check who you want involved.",
          "starter": "Hello, I’m… Could I check… Is it…",
          "purpose": "Introduce yourself accurately, confirm identity and establish whether sensitive discussion is safe.",
          "tip": "Pause for each answer. Establish location and a callback route when the clinical situation requires it.",
          "reply": "The appropriate professional interpreter joins. Ana confirms privacy and agrees how her daughter may be involved.",
          "options": [
            "Establish who you are speaking with and a safe setting.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Identity, privacy and the patient’s preferences shape safe communication.",
          "essential": [
            "Introduced the role and checked identity",
            "Established privacy and who is involved"
          ],
          "improve": [
            "Pause for each answer. Establish location and a callback route when the clinical situation requires it."
          ],
          "next": "agenda"
        },
        {
          "id": "agenda",
          "phrase": "agenda",
          "stage": "open",
          "patient": "I need the result explained, but medical English is difficult for me.",
          "task": "Find the full agenda and agree a safe priority.",
          "model": "Before we decide where to start, is there anything else you were hoping we could discuss? Then we can agree what needs attention first.",
          "simple": "Is there anything else you wanted help with? Let’s agree where to start.",
          "starter": "Before we decide… is there anything else…",
          "purpose": "Find important concerns early, then agree a safe priority.",
          "tip": "An invitation is not a promise to finish every issue. Triage urgent concerns before deferring anything.",
          "reply": "The patient confirms the agenda described in the brief.",
          "options": [
            "Find the full agenda and agree a safe priority.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Check the urgency of the concerns before deciding what can wait.",
          "essential": [
            "Invited other concerns",
            "Agreed the priority without overlooking urgent symptoms"
          ],
          "improve": [
            "An invitation is not a promise to finish every issue. Triage urgent concerns before deferring anything."
          ],
          "next": "story"
        },
        {
          "id": "story",
          "phrase": "story",
          "stage": "understand",
          "patient": "I thought the message was just another reminder.",
          "task": "Explore the patient’s understanding directly using accessible communication.",
          "model": "Through the interpreter, could you tell me what you understood from the message and whether you have noticed any changes in your health?",
          "simple": "What did the message mean to you? Have you felt any different?",
          "starter": "Could you talk me through…",
          "purpose": "Let the patient describe the problem before narrowing the questions.",
          "tip": "Ask one question and allow an answer. Interrupt when an urgent finding requires immediate action.",
          "reply": "Ana says she feels well and did not realise another test might be needed.",
          "options": [
            "Explore the patient’s understanding directly using accessible communication.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "A missed response can reflect communication failure rather than an informed refusal.",
          "essential": [
            "Asked Ana directly about her understanding",
            "Checked symptoms rather than relying only on a relative’s summary"
          ],
          "improve": [
            "Ask one question and allow an answer. Interrupt when an urgent finding requires immediate action."
          ],
          "next": "impact"
        },
        {
          "id": "impact",
          "phrase": "impact",
          "stage": "understand",
          "patient": "I felt embarrassed to say I could not understand.",
          "task": "Identify individual communication preferences without assumptions.",
          "model": "Thank you for telling me. It is our job to explain this clearly. What language and format work best for medical information, and who would you like involved?",
          "simple": "We should make the explanation clear for you. What language and format would help?",
          "starter": "How is this affecting… What is worrying…",
          "purpose": "Understand function and the patient’s concern, then use the answers in your plan.",
          "tip": "These are separate questions. Pause after the first and respond before asking the second.",
          "reply": "Ana prefers Portuguese, short spoken explanations and written instructions she can understand; she wants her daughter involved with her agreement.",
          "options": [
            "Identify individual communication preferences without assumptions.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Language needs do not establish literacy, capacity, culture or treatment preference. Ask the person.",
          "essential": [
            "Acknowledged the communication difficulty without blame",
            "Asked about preferred language, format and involvement"
          ],
          "improve": [
            "These are separate questions. Pause after the first and respond before asking the second."
          ],
          "next": "focus"
        },
        {
          "id": "focus",
          "phrase": "focus",
          "stage": "focus",
          "patient": "Can my daughter just answer the questions?",
          "task": "Use the patient’s own account and assess clinical urgency accurately.",
          "model": "Your daughter can support you if you wish, and I would also like to hear your own answers through the professional interpreter. Let’s check symptoms such as thirst, frequent urination, weight loss or feeling unwell, one question at a time.",
          "simple": "Your daughter can help with your permission. I’ll ask you directly through the interpreter, one question at a time.",
          "starter": "Thank you… I’d like to ask…",
          "purpose": "Choose questions that distinguish causes and change urgency or management.",
          "tip": "A signpost does not replace the actual assessment. Ask the relevant questions clearly, one at a time.",
          "reply": "No acute symptoms are identified. The clinician checks the full context and whether HbA1c is appropriate for confirming this screening result.",
          "options": [
            "Use the patient’s own account and assess clinical urgency accurately.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Do not infer that another person can make decisions for a patient because an interpreter is needed.",
          "essential": [
            "Used professional interpretation and direct patient questions",
            "Assessed symptoms and the result context"
          ],
          "improve": [
            "A signpost does not replace the actual assessment. Ask the relevant questions clearly, one at a time."
          ],
          "next": "summary"
        },
        {
          "id": "summary",
          "phrase": "summary",
          "stage": "focus",
          "patient": "I still don’t know what the number means.",
          "task": "Explain one small chunk and check understanding before continuing.",
          "model": "The result is higher than expected. Because you have no symptoms, we need another blood test to confirm whether you have diabetes. I’ll pause there so we can check that part before adding more information.",
          "simple": "The result is high. We need another test to confirm it because you have no symptoms.",
          "starter": "Let me check… Your main concern…",
          "purpose": "Check the facts and patient priority before explaining your assessment.",
          "tip": "A summary should be short and accurate. Correct it if the patient adds or changes information.",
          "reply": "Through the interpreter, Ana asks whether she has already been diagnosed.",
          "options": [
            "Explain one small chunk and check understanding before continuing.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Do not confuse an abnormal screening result with a confirmed diagnosis in this scenario.",
          "essential": [
            "Explained the result in a short clear chunk",
            "Distinguished confirmation from an established diagnosis"
          ],
          "improve": [
            "A summary should be short and accurate. Correct it if the patient adds or changes information."
          ],
          "next": "explain"
        },
        {
          "id": "explain",
          "phrase": "explain",
          "stage": "explain",
          "patient": "So you don’t know for certain yet?",
          "task": "Explain uncertainty and invite a specific question without blaming the patient.",
          "model": "That’s right. We need to confirm the result, and then explain what it means for you. You have not done anything wrong by needing an explanation in another language. What would you like me to go over?",
          "simple": "We need to confirm it first. What would you like me to explain again?",
          "starter": "From what you’ve told me… because…",
          "purpose": "Explain the reasoning at the right level of certainty.",
          "tip": "Avoid promising a diagnosis from an incomplete remote assessment. Explain what further assessment is needed.",
          "reply": "Ana wants to know when the test will happen and who will call her.",
          "options": [
            "Explain uncertainty and invite a specific question without blaming the patient.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Keep the explanation directed to the patient rather than talking about her to the interpreter.",
          "essential": [
            "Explained uncertainty and the next step",
            "Invited Ana’s own questions"
          ],
          "improve": [
            "Avoid promising a diagnosis from an incomplete remote assessment. Explain what further assessment is needed."
          ],
          "next": "uncertainty"
        },
        {
          "id": "uncertainty",
          "phrase": "uncertainty",
          "stage": "explain",
          "patient": "Will the next phone call be in English again?",
          "task": "Agree accessible and confidential future communication.",
          "model": "Let’s record the language and communication support you need, and agree how we will arrange it for the next discussion. We’ll also check a safe number, whether messages can be left and what written information you can use.",
          "simple": "Let’s arrange language support for the next contact and agree a safe number and clear written information.",
          "starter": "What we know… What we still need… The next step…",
          "purpose": "Make uncertainty understandable and attach it to a practical next step.",
          "tip": "Pause after a small amount of information. Respond to the patient’s question before adding more.",
          "reply": "Ana agrees the safe contact arrangements and asks not to use her daughter’s phone without permission.",
          "options": [
            "Agree accessible and confidential future communication.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "A preferred contact method and interpretation arrangement must be confirmed in the actual service.",
          "essential": [
            "Recorded communication needs and consent",
            "Agreed a safe contact and message plan"
          ],
          "improve": [
            "Pause after a small amount of information. Respond to the patient’s question before adding more."
          ],
          "next": "recommend"
        },
        {
          "id": "recommend",
          "phrase": "recommend",
          "stage": "plan",
          "patient": "What exactly needs booking now?",
          "task": "Make the clinical and communication plan feasible together.",
          "model": "I recommend the confirmation blood test through the appropriate local pathway, with a named clinician reviewing it and a planned interpreted discussion of the result. Let’s check the appointment time and travel arrangements before we finish.",
          "simple": "Let’s book the test and an interpreted result discussion, and name who will review it.",
          "starter": "I recommend… because… What are your thoughts…",
          "purpose": "Offer a clinically appropriate recommendation and invite the patient’s view.",
          "tip": "Discuss relevant alternatives, risks and the consequences of no change when appropriate. Urgency affects available choices.",
          "reply": "Ana needs an appointment she can reach by bus after her morning caring duties.",
          "options": [
            "Make the clinical and communication plan feasible together.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "A test request, an interpreter request and a follow-up conversation are separate actions that need coordination.",
          "essential": [
            "Arranged confirmation and result ownership",
            "Included interpretation and accessible appointment arrangements"
          ],
          "improve": [
            "Discuss relevant alternatives, risks and the consequences of no change when appropriate. Urgency affects available choices."
          ],
          "next": "barrier"
        },
        {
          "id": "barrier",
          "phrase": "barrier",
          "stage": "plan",
          "patient": "I missed the earlier appointment because I could not get there.",
          "task": "Address the access barrier and close the practical loop.",
          "model": "Thank you for explaining. What times and transport are possible for you? We’ll check an available appointment and make sure the instructions explain where to go and who to contact if it falls through.",
          "simple": "What time and transport would work? Let’s confirm a realistic appointment and clear instructions.",
          "starter": "What might make… Let’s work through…",
          "purpose": "Find the actual obstacle and agree arrangements the patient can use.",
          "tip": "Respond to the specific answer. Keep a necessary clinical recommendation clear while addressing practical barriers.",
          "reply": "An appropriate appointment and interpreted follow-up are confirmed in this scenario.",
          "options": [
            "Address the access barrier and close the practical loop.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Avoid labelling the patient as not interested without establishing what happened.",
          "essential": [
            "Explored the actual reason for missed attendance",
            "Confirmed accessible instructions and a backup contact"
          ],
          "improve": [
            "Respond to the specific answer. Keep a necessary clinical recommendation clear while addressing practical barriers."
          ],
          "next": "safety"
        },
        {
          "id": "safety",
          "phrase": "safety",
          "stage": "close",
          "patient": "If I feel unwell, can I wait for the interpreter appointment?",
          "task": "Give clinically appropriate safety advice in an accessible form.",
          "model": "Do not wait if you become unwell. New marked thirst, frequent urination or weight loss needs prompt advice. If you have vomiting or abdominal pain with deep breathing, sleepiness or confusion, call 999 or go to A&E immediately; do not drive yourself. We will explain the urgent and emergency routes through the interpreter and check you can use them.",
          "simple": "Don’t wait for the appointment if you become unwell. We’ll explain the urgent and emergency routes clearly through the interpreter.",
          "starter": "If… please… If things have not… by…",
          "purpose": "Give relevant warning signs, a contact route, urgency and a review plan.",
          "tip": "Choose advice for this patient and condition. “Come back if worse” alone leaves the action unclear.",
          "reply": "Ana can describe the agreed urgent route and the symptoms that mean she should not wait.",
          "options": [
            "Give clinically appropriate safety advice in an accessible form.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "An interpreter booking must not delay time-critical assessment. Use actual local language-support and emergency arrangements.",
          "essential": [
            "Explained not to delay urgent assessment",
            "Checked accessible understanding of warning signs and contact routes"
          ],
          "improve": [
            "Choose advice for this patient and condition. “Come back if worse” alone leaves the action unclear."
          ],
          "next": "check"
        },
        {
          "id": "check",
          "phrase": "check",
          "stage": "close",
          "patient": "How can you check I have understood without making me feel tested?",
          "task": "Use respectful teach-back and confirm ownership of the next steps.",
          "model": "I want to check that I have explained it clearly. Could you tell me, in your own words through the interpreter, what will happen next and when you will get help sooner? If anything is unclear, we’ll go over it again.",
          "simple": "Could you tell me the plan in your own words? This checks my explanation, not your English.",
          "starter": "Just so I can check… could you tell me… I will…",
          "purpose": "Check understanding, correct gaps and name who will arrange and review each action.",
          "tip": "Make teach-back about the clarity of your explanation. Resolve any misunderstanding before closing.",
          "reply": "Ana explains the test, interpreted result discussion and earlier-help plan; the clinician corrects one point and provides accessible written instructions.",
          "options": [
            "Use respectful teach-back and confirm ownership of the next steps.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "A yes/no question or a relative’s reassurance may not establish the patient’s own understanding.",
          "essential": [
            "Framed teach-back as a check on the explanation",
            "Confirmed the patient’s own understanding and accessible instructions"
          ],
          "improve": [
            "Make teach-back about the clarity of your explanation. Resolve any misunderstanding before closing."
          ],
          "next": null
        }
      ],
      "atlasLabel": "After confirmation: type 2 management ↗"
    },
    {
      "id": "handover",
      "title": "A pharmacist queries conflicting anticoagulant instructions",
      "category": "Professional conversation",
      "patient": "Community pharmacist · Telephone",
      "brief": "A pharmacist calls about conflicting apixaban instructions on a discharge record and repeat prescription. Verify the professional caller and patient, establish actual use and clinical urgency, resolve the discrepancy with an appropriate prescribing assessment, and make an accepted handover. A medication error is confirmed later in the supplied scenario.",
      "goal": "Practise clear assessment, a proportionate explanation and a workable shared plan; repeat the hardest exchange with less help.",
      "atlas": null,
      "studio": "c10",
      "links": [
        {
          "label": "GMC: candour and openness when things go wrong",
          "url": "https://www.gmc-uk.org/professional-standards/the-professional-standards/candour---openness-and-honesty-when-things-go-wrong"
        },
        {
          "label": "NHS: anticoagulant adverse effects",
          "url": "https://www.nhs.uk/medicines/anticoagulants/side-effects/"
        },
        {
          "label": "BNF: prescribing reference",
          "url": "https://bnf.nice.org.uk/"
        }
      ],
      "nodes": [
        {
          "id": "hello",
          "phrase": "hello",
          "stage": "open",
          "patient": "I’m the pharmacist. I’m concerned these anticoagulant instructions do not match.",
          "task": "Verify the professional caller, patient and secure communication route.",
          "model": "Hello, I’m Dr Patel. Could I confirm your name, role, pharmacy and callback number? Let’s verify the patient using the appropriate identifiers and a secure clinical communication route.",
          "simple": "Could I check your role and callback details, then verify which patient and prescription we are discussing?",
          "starter": "Hello, I’m… Could I check… Is it…",
          "purpose": "Establish who you are speaking with and a safe setting.",
          "tip": "Address the colleague clearly, share relevant information through the appropriate clinical route and agree who will do what and when.",
          "reply": "The caller and patient are verified using the appropriate local clinical process.",
          "options": [
            "Verify the professional caller, patient and secure communication route.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Identity, privacy and the patient’s preferences shape safe communication.",
          "essential": [
            "Verified the professional caller and contact route",
            "Confirmed the patient and appropriate information-sharing context"
          ],
          "improve": [
            "Pause for each answer. Establish location and a callback route when the clinical situation requires it."
          ],
          "next": "agenda",
          "title": "Verify caller and patient"
        },
        {
          "id": "agenda",
          "phrase": "agenda",
          "stage": "open",
          "patient": "The patient is here, and we need to clarify the prescription before making a safe supply decision.",
          "task": "Find the full agenda and agree a safe priority.",
          "model": "Let’s agree the immediate priorities: the patient’s current safety, the exact prescribing discrepancy and who will confirm the plan. Is there any other urgent information I need before we start?",
          "simple": "Let’s check safety, clarify the discrepancy and agree who will resolve it. Is there other urgent information?",
          "starter": "Before we decide… is there anything else…",
          "purpose": "Find the full agenda and agree a safe priority.",
          "tip": "Address the colleague clearly, share relevant information through the appropriate clinical route and agree who will do what and when.",
          "reply": "The pharmacist confirms the patient is available for appropriate assessment and that the prescribing discrepancy needs a clinician-owned decision.",
          "options": [
            "Find the full agenda and agree a safe priority.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Check the urgency of the concerns before deciding what can wait.",
          "essential": [
            "Invited other concerns",
            "Agreed the priority without overlooking urgent symptoms"
          ],
          "improve": [
            "An invitation is not a promise to finish every issue. Triage urgent concerns before deferring anything."
          ],
          "next": "story",
          "title": "Agree the immediate task"
        },
        {
          "id": "story",
          "phrase": "story",
          "stage": "understand",
          "patient": "The discharge letter and repeat prescription give different instructions.",
          "task": "Establish the discrepancy and actual exposure from reliable information.",
          "model": "Could you talk me through the exact discrepancy and which records you have checked? Please include the medicine, strengths, instructions and dates, and what the patient says they have actually taken.",
          "simple": "What differs between the records, and what has the patient actually taken?",
          "starter": "Could you talk me through…",
          "purpose": "Establish the discrepancy and actual exposure from reliable information.",
          "tip": "Address the colleague clearly, share relevant information through the appropriate clinical route and agree who will do what and when.",
          "reply": "The pharmacist provides the conflicting documents and actual-use history through the appropriate secure clinical route.",
          "options": [
            "Establish the discrepancy and actual exposure from reliable information.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Do not resolve a prescribing query from memory or an incomplete verbal summary alone.",
          "essential": [
            "Clarified the exact records and discrepancy",
            "Established what the patient has actually taken"
          ],
          "improve": [
            "Ask one question and allow an answer. Interrupt when an urgent finding requires immediate action."
          ],
          "next": "impact",
          "title": "Clarify the prescribing discrepancy"
        },
        {
          "id": "impact",
          "phrase": "impact",
          "stage": "understand",
          "patient": "The patient is anxious and worried we are blaming each other.",
          "task": "Acknowledge the colleague’s concern and the patient’s immediate needs.",
          "model": "Thank you for raising this. The priority is the patient’s safety and a clear explanation. What is the patient most concerned about, and what do you need from me to make the next step safe?",
          "simple": "Thank you for flagging it. Let’s focus on safety, the patient’s concern and what you need to act safely.",
          "starter": "How is this affecting… What is worrying…",
          "purpose": "Acknowledge the colleague’s concern and the patient’s immediate needs.",
          "tip": "Address the colleague clearly, share relevant information through the appropriate clinical route and agree who will do what and when.",
          "reply": "The patient wants to know whether harm has occurred and who will tell them what to take next.",
          "options": [
            "Acknowledge the colleague’s concern and the patient’s immediate needs.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "A professional conversation should coordinate care without blame or defensiveness.",
          "essential": [
            "Responded respectfully to the colleague",
            "Identified the patient’s concern and the required decision"
          ],
          "improve": [
            "These are separate questions. Pause after the first and respond before asking the second."
          ],
          "next": "focus",
          "title": "Hear the concern and clinical need"
        },
        {
          "id": "focus",
          "phrase": "focus",
          "stage": "focus",
          "patient": "There is some bruising. Can we just use the discharge dose?",
          "task": "Assess clinical urgency and verify the prescribing context.",
          "model": "First, can we establish whether there is significant bleeding or another acute concern and arrange clinical assessment if needed? I also need to verify the indication, current prescription, relevant patient factors and the intended specialist plan before choosing the regimen.",
          "simple": "Let’s check current symptoms and verify the clinical prescription context before deciding which instructions are correct.",
          "starter": "Thank you… I’d like to ask…",
          "purpose": "Assess clinical urgency and verify the prescribing context.",
          "tip": "Address the colleague clearly, share relevant information through the appropriate clinical route and agree who will do what and when.",
          "reply": "No emergency features are identified after appropriate assessment. The clinician checks the records and relevant prescribing factors and contacts the responsible team where clarification is needed.",
          "options": [
            "Assess clinical urgency and verify the prescribing context.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Neither the newer-looking document nor the existing repeat record is automatically correct. The decision needs an appropriate clinical review.",
          "essential": [
            "Checked bleeding/acute concerns and actual exposure",
            "Verified the indication, records and relevant prescribing factors"
          ],
          "improve": [
            "A signpost does not replace the actual assessment. Ask the relevant questions clearly, one at a time."
          ],
          "next": "summary",
          "title": "Assess urgency and verify context"
        },
        {
          "id": "summary",
          "phrase": "summary",
          "stage": "focus",
          "patient": "Who is going to take responsibility for sorting this out?",
          "task": "Summarise the uncertainty and name ownership of resolution.",
          "model": "We have conflicting instructions and a patient who needs a verified plan. I will coordinate the clinical review and contact the responsible team as needed. Let’s agree what you will do while I confirm the decision and when I will call you back.",
          "simple": "I’ll coordinate the clinical review. Let’s agree the interim actions and a definite callback time.",
          "starter": "Let me check… Your main concern…",
          "purpose": "Summarise the uncertainty and name ownership of resolution.",
          "tip": "Address the colleague clearly, share relevant information through the appropriate clinical route and agree who will do what and when.",
          "reply": "The pharmacist agrees the safe interim process and confirms the callback route.",
          "options": [
            "Summarise the uncertainty and name ownership of resolution.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "An unresolved query needs a safe interim process, not an indefinite delay or a blind continuation.",
          "essential": [
            "Summarised the unresolved decision",
            "Named the clinician coordinating it and a definite communication plan"
          ],
          "improve": [
            "A summary should be short and accurate. Correct it if the patient adds or changes information."
          ],
          "next": "explain",
          "title": "Name ownership of resolution"
        },
        {
          "id": "explain",
          "phrase": "explain",
          "stage": "explain",
          "patient": "What will you tell the patient?",
          "task": "Plan an honest explanation without speculation.",
          "model": "I will explain that the instructions conflict, what we are checking and what they should do under the verified interim plan. I will be clear about what is known and what is not yet established, and how we will check whether any harm has occurred.",
          "simple": "I’ll explain the discrepancy honestly, the immediate plan and what we are checking.",
          "starter": "From what you’ve told me… because…",
          "purpose": "Plan an honest explanation without speculation.",
          "tip": "Address the colleague clearly, share relevant information through the appropriate clinical route and agree who will do what and when.",
          "reply": "The pharmacist asks for the final instructions to be communicated consistently by both services.",
          "options": [
            "Plan an honest explanation without speculation.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Explain known facts and uncertainty. Do not reassure that no harm occurred before the relevant assessment.",
          "essential": [
            "Planned a factual explanation to the patient",
            "Included assessment of possible harm and uncertainty"
          ],
          "improve": [
            "Avoid promising a diagnosis from an incomplete remote assessment. Explain what further assessment is needed."
          ],
          "next": "uncertainty",
          "title": "Plan the patient explanation"
        },
        {
          "id": "uncertainty",
          "phrase": "uncertainty",
          "stage": "explain",
          "patient": "The review confirms the repeat record was entered incorrectly.",
          "task": "Respond openly to the confirmed error and arrange correction and review.",
          "model": "We should tell the patient what has been confirmed, apologise and explain the steps to put it right and reduce the chance of recurrence. I will follow the appropriate candour and incident process and make sure the clinical follow-up is owned.",
          "simple": "We need to explain the confirmed error, apologise, put it right and arrange follow-up and review.",
          "starter": "What we know… What we still need… The next step…",
          "purpose": "Respond openly to the confirmed error and arrange correction and review.",
          "tip": "Address the colleague clearly, share relevant information through the appropriate clinical route and agree who will do what and when.",
          "reply": "The patient receives an explanation and apology, with their questions and current clinical needs addressed.",
          "options": [
            "Respond openly to the confirmed error and arrange correction and review.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "The professional duty of candour requires openness when care has gone wrong and caused or may cause harm or distress; follow the applicable organisational and statutory processes where relevant.",
          "essential": [
            "Included a clear explanation and apology",
            "Included corrective action and clinician-owned follow-up"
          ],
          "improve": [
            "Pause after a small amount of information. Respond to the patient’s question before adding more."
          ],
          "next": "recommend",
          "title": "Respond to a confirmed error"
        },
        {
          "id": "recommend",
          "phrase": "recommend",
          "stage": "plan",
          "patient": "Can you confirm the final plan so we can act?",
          "task": "Communicate a verified prescribing decision and update the records.",
          "model": "After the prescribing assessment, I will issue or arrange the corrected, authorised instructions and ensure the relevant record is updated. Let’s confirm the medicine, exact regimen, start point and monitoring from that verified plan rather than repeat an unverified dose in this discussion.",
          "simple": "I’ll confirm the authorised regimen and update the record. Let’s check the exact instructions and monitoring together.",
          "starter": "I recommend… because… What are your thoughts…",
          "purpose": "Communicate a verified prescribing decision and update the records.",
          "tip": "Address the colleague clearly, share relevant information through the appropriate clinical route and agree who will do what and when.",
          "reply": "The pharmacist reads back the actual authorised instructions; the case does not provide a universal anticoagulant dose.",
          "options": [
            "Communicate a verified prescribing decision and update the records.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Apixaban suitability and dosing depend on clinical factors and indication; do not use this communication example as a dosing reference.",
          "essential": [
            "Used an authorised clinically checked regimen",
            "Included record correction and monitoring arrangements"
          ],
          "improve": [
            "Discuss relevant alternatives, risks and the consequences of no change when appropriate. Urgency affects available choices."
          ],
          "next": "barrier",
          "title": "Communicate the verified decision"
        },
        {
          "id": "barrier",
          "phrase": "barrier",
          "stage": "plan",
          "patient": "What if the patient is still unsure when they get home?",
          "task": "Make the corrected plan usable and reconcile conflicting information.",
          "model": "Let’s provide the same clear written instructions, check the patient’s understanding and name a contact for questions. We should remove or reconcile conflicting instructions through the proper record process so they are not faced with two different plans.",
          "simple": "Give one consistent written plan, check understanding and agree a contact for uncertainty.",
          "starter": "What might make… Let’s work through…",
          "purpose": "Make the corrected plan usable and reconcile conflicting information.",
          "tip": "Address the colleague clearly, share relevant information through the appropriate clinical route and agree who will do what and when.",
          "reply": "The patient explains the verified plan in their own words and knows who to contact.",
          "options": [
            "Make the corrected plan usable and reconcile conflicting information.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Updating one record without addressing other conflicting instructions can leave the original safety problem in place.",
          "essential": [
            "Arranged consistent accessible instructions",
            "Included teach-back and a named question route"
          ],
          "improve": [
            "Respond to the specific answer. Keep a necessary clinical recommendation clear while addressing practical barriers."
          ],
          "next": "safety",
          "title": "Make the corrected plan usable"
        },
        {
          "id": "safety",
          "phrase": "safety",
          "stage": "close",
          "patient": "What symptoms should trigger urgent help?",
          "task": "Agree an appropriate safety net without an unsupported medicine-change instruction.",
          "model": "We’ll give medicine-specific advice from the verified plan. Significant or recurrent bleeding needs immediate medical attention; severe bleeding, collapse, new neurological symptoms or severe illness needs emergency assessment. The patient should not simply stop or alter anticoagulation indefinitely without clinical advice.",
          "simple": "We’ll explain the urgent bleeding warnings and exact contact routes, and how to get advice about the medicine.",
          "starter": "If… please… If things have not… by…",
          "purpose": "Agree an appropriate safety net without an unsupported medicine-change instruction.",
          "tip": "Address the colleague clearly, share relevant information through the appropriate clinical route and agree who will do what and when.",
          "reply": "The pharmacist confirms that warning advice and urgent routes are included and understood.",
          "options": [
            "Agree an appropriate safety net without an unsupported medicine-change instruction.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Balance bleeding risk with the reason for anticoagulation. Urgent clinical decisions must follow actual assessment.",
          "essential": [
            "Included clear bleeding/serious-illness escalation",
            "Avoided a blanket unsupervised long-term stop instruction"
          ],
          "improve": [
            "Choose advice for this patient and condition. “Come back if worse” alone leaves the action unclear."
          ],
          "next": "check",
          "title": "Agree medicine safety advice"
        },
        {
          "id": "check",
          "phrase": "check",
          "stage": "close",
          "patient": "Let me read the plan back to make sure we agree.",
          "task": "Close the professional loop with read-back and explicit ownership.",
          "model": "Thank you. Please read back the verified prescription, what has been corrected, what the patient has been told and who will review them by when. I’ll confirm acceptance of the handover and document the discussion and follow-up responsibility.",
          "simple": "Let’s read back the plan, confirm who does each action and document the accepted handover.",
          "starter": "Just so I can check… could you tell me… I will…",
          "purpose": "Close the professional loop with read-back and explicit ownership.",
          "tip": "Address the colleague clearly, share relevant information through the appropriate clinical route and agree who will do what and when.",
          "reply": "The pharmacist and clinician identify and correct one discrepancy in the read-back, then confirm the handover and follow-up.",
          "options": [
            "Close the professional loop with read-back and explicit ownership.",
            "Move straight to treatment before resolving the uncertainty described here.",
            "Continue the original plan without responding to the new information."
          ],
          "answer": 0,
          "why": "Sending a message or leaving a task is not the same as an accepted clinical handover.",
          "essential": [
            "Checked the actual read-back and corrected gaps",
            "Confirmed accepted handover and named follow-up responsibility"
          ],
          "improve": [
            "Make teach-back about the clarity of your explanation. Resolve any misunderstanding before closing."
          ],
          "next": null,
          "title": "Close an accepted handover"
        }
      ],
      "speaker": "Pharmacist"
    },
    {
      "id": "bowel-bleeding",
      "title": "A low FIT, continuing bleeding and a clear next step",
      "category": "Persistent symptoms · Results and referral",
      "patient": "Alex Morgan, 56 · Telephone follow-up",
      "brief": "A stable patient has ongoing rectal bleeding and a changed bowel habit despite a symptomatic FIT below the referral threshold. A recent in-person assessment found no clear explanation. Recheck the current picture, explain the limits of the test, and agree further assessment. Supplied findings are fictional; perform the full assessment in practice.",
      "goal": "Explain why a reassuring-looking test does not close a continuing clinical concern, then make referral and follow-up ownership explicit.",
      "atlas": "gi-rectal-bleeding",
      "studio": null,
      "links": [
        {
          "label": "NICE NG12: symptomatic FIT and persistent concern",
          "url": "https://www.nice.org.uk/guidance/ng12"
        },
        {
          "label": "NICE HTG690: FIT in primary care",
          "url": "https://www.nice.org.uk/guidance/htg690"
        },
        {
          "label": "NHS: bleeding from the bottom",
          "url": "https://www.nhs.uk/symptoms/bleeding-from-the-bottom-rectal-bleeding/"
        }
      ],
      "nodes": [
        {
          "id": "hello",
          "phrase": "hello",
          "stage": "open",
          "patient": "Hello. I was told my stool test was normal.",
          "task": "Confirm identity and privacy, then acknowledge the result question.",
          "model": "Hello, I’m Dr Patel, one of the GPs. Could I confirm your name and date of birth? Is it private and convenient to talk about your symptoms and the result?",
          "simple": "Hello, I’m Dr Patel. Could I check your details? Can you talk privately about the result?",
          "starter": "Hello, I’m… Could I confirm… Is it private…",
          "purpose": "Introduce yourself accurately, confirm identity and establish whether sensitive discussion is safe.",
          "tip": "Pause for the identity and privacy answers. Use your actual role and check location/contact details when needed.",
          "reply": "Alex confirms identity, privacy, their location and a callback number for this telephone review.",
          "options": [
            "Confirm identity and privacy, then acknowledge the result question.",
            "Assume the person answering the phone is the patient and announce the result.",
            "Say the test is normal before reviewing the symptoms."
          ],
          "answer": 0,
          "why": "Identity, privacy and the reason for the call come before discussing a sensitive result.",
          "essential": [
            "Confirmed identity and an appropriate setting",
            "Acknowledged that the call will review symptoms as well as the test"
          ],
          "improve": [
            "Pause for the identity and privacy answers. Use your actual role and check location/contact details when needed."
          ],
          "next": "agenda"
        },
        {
          "id": "agenda",
          "phrase": "agenda",
          "stage": "open",
          "patient": "If the test is normal, I mainly want to know whether I can forget about the bleeding.",
          "task": "Establish what the patient wants answered and check for other concerns.",
          "model": "Let’s go through what the result means and what is happening with the bleeding now. Before we start, is there anything else you wanted us to cover?",
          "simple": "We’ll discuss the result and the bleeding. Is there anything else you need help with?",
          "starter": "Let’s go through… Before we start…",
          "purpose": "Find important concerns early, then agree a safe priority.",
          "tip": "An early agenda is flexible. A new severe symptom would change the priority immediately.",
          "reply": "The bleeding and bowel change are the only concerns today; Alex wants a clear explanation of the next step.",
          "options": [
            "Establish what the patient wants answered and check for other concerns.",
            "Agree that no further action is needed because the result is below threshold.",
            "Book another test without asking what the patient needs to understand."
          ],
          "answer": 0,
          "why": "Find the question behind the call while keeping continuing symptoms in the agenda.",
          "essential": [
            "Included continuing symptoms in the agenda",
            "Invited any other concern before agreeing the priority"
          ],
          "improve": [
            "An early agenda is flexible. A new severe symptom would change the priority immediately."
          ],
          "next": "story"
        },
        {
          "id": "story",
          "phrase": "story",
          "stage": "understand",
          "patient": "There is still blood when I open my bowels. My bowels have been different for about eight weeks.",
          "task": "Clarify the ongoing pattern, duration and change since the last assessment.",
          "model": "Could you talk me through the bleeding and what has changed in your bowel habit? What, if anything, is different since you were examined?",
          "simple": "What bleeding are you seeing? How have your bowels changed since the examination?",
          "starter": "Could you talk me through… What is different since…",
          "purpose": "Let the patient describe the problem before narrowing the questions.",
          "tip": "Ask one question at a time. Clarify amount, colour, frequency and associated symptoms rather than relying on the word “bleeding”.",
          "reply": "Alex describes intermittent small amounts of blood and a persistent change in stool frequency. The pattern has not resolved since the recent in-person assessment.",
          "options": [
            "Clarify the ongoing pattern, duration and change since the last assessment.",
            "Attribute bleeding to haemorrhoids without reviewing the actual findings.",
            "Treat the negative screening test from last year as the answer to these new symptoms."
          ],
          "answer": 0,
          "why": "Persistent unexplained bleeding and bowel change need symptom-led assessment even after a low FIT.",
          "essential": [
            "Clarified what is continuing and for how long",
            "Checked change since the previous assessment"
          ],
          "improve": [
            "Ask one question at a time. Clarify amount, colour, frequency and associated symptoms rather than relying on the word “bleeding”."
          ],
          "next": "impact"
        },
        {
          "id": "impact",
          "phrase": "impact",
          "stage": "understand",
          "patient": "I’m frightened it could be cancer, but I don’t want to waste anyone’s time.",
          "task": "Explore the fear and the effect on daily life without false reassurance.",
          "model": "You’re not wasting our time. Continuing symptoms deserve review. What is worrying you most about the possibility of further tests?",
          "simple": "It is right to discuss this. What worries you most about the tests or what they might find?",
          "starter": "You’re not… What worries you most about…",
          "purpose": "Understand function and the patient’s concern, then use the answers in your plan.",
          "tip": "Offer reassurance about being taken seriously, while keeping diagnostic uncertainty honest.",
          "reply": "Alex fears a serious diagnosis and worries that taking time off for an investigation will put their job at risk.",
          "options": [
            "Explore the fear and the effect on daily life without false reassurance.",
            "Promise that cancer is impossible because FIT is low.",
            "Only describe investigation procedures and ignore the patient’s fear."
          ],
          "answer": 0,
          "why": "Understanding the feared consequence helps you explain the recommendation and address a real access barrier.",
          "essential": [
            "Validated the reason for seeking help",
            "Explored the specific concern rather than guessing it"
          ],
          "improve": [
            "Offer reassurance about being taken seriously, while keeping diagnostic uncertainty honest."
          ],
          "next": "focus"
        },
        {
          "id": "focus",
          "phrase": "focus",
          "stage": "focus",
          "patient": "The amount of blood is small, but it keeps happening.",
          "task": "Check current severity, warning features, previous findings and the relevant clinical context.",
          "model": "Before we decide the next step, I need to check whether anything needs urgent help. Is there heavy or continuous bleeding? Have you felt faint or collapsed? I’ll also check pain, weight change and the findings and medicines recorded at your recent assessment.",
          "simple": "Is there heavy bleeding, faintness or collapse? I also need to review the other symptoms, medicines and recent examination.",
          "starter": "Before we decide… Is there… Have you… I’ll also check…",
          "purpose": "Choose questions that distinguish causes and change urgency or management.",
          "tip": "These are selected questions, not a complete bleeding assessment. Ask separately and arrange examination again if the current findings require it.",
          "reply": "For the ordinary path, Alex is stable with no heavy bleeding, collapse or severe pain. The clinician reviews relevant history and medicines and the recent examination: no clear anorectal cause or mass was found. Continuing bleeding and changed bowel habit remain unexplained.",
          "options": [
            "Check current severity, warning features, previous findings and the relevant clinical context.",
            "Use the FIT alone to decide urgency without asking about current bleeding or illness.",
            "Assume anticoagulants or a past history of piles explain every episode."
          ],
          "answer": 0,
          "why": "Acute instability changes urgency. A stable assessment still needs the wider history, examination and differential.",
          "essential": [
            "Checked for acute deterioration and severe bleeding",
            "Reviewed relevant examination, symptoms and medicines instead of relying on FIT alone"
          ],
          "improve": [
            "These are selected questions, not a complete bleeding assessment. Ask separately and arrange examination again if the current findings require it."
          ],
          "next": "summary",
          "branch": {
            "label": "Practise a different patient answer: heavy bleeding now",
            "patient": "Actually the bleeding is now continuous, the toilet water is red, and I feel as though I may faint.",
            "next": "urgent"
          }
        },
        {
          "id": "summary",
          "phrase": "summary",
          "stage": "focus",
          "patient": "I’ve had two examinations and the test. Why are we still concerned?",
          "task": "Summarise the unresolved clinical picture and confirm accuracy.",
          "model": "You still have bleeding and a change in bowel habit, and the assessment so far has not explained them. The stool result is helpful, but it does not answer every question. Have I understood the pattern correctly?",
          "simple": "The bleeding and bowel change are continuing without a clear cause. Is that right?",
          "starter": "You still have… So far… Have I understood…",
          "purpose": "Check the facts and patient priority before explaining your assessment.",
          "tip": "Keep the summary short. Do not invent a diagnosis that the examination or test has not established.",
          "reply": "Yes. Alex confirms the symptoms are continuing and wants to know what the low result does establish.",
          "options": [
            "Summarise the unresolved clinical picture and confirm accuracy.",
            "Say that having had an examination means nothing serious can be present.",
            "Repeat the whole history without identifying what is still unresolved."
          ],
          "answer": 0,
          "why": "A useful summary identifies the reason further action remains necessary.",
          "essential": [
            "Named the continuing unexplained features",
            "Checked the summary with the patient"
          ],
          "improve": [
            "Keep the summary short. Do not invent a diagnosis that the examination or test has not established."
          ],
          "next": "explain"
        },
        {
          "id": "explain",
          "phrase": "explain",
          "stage": "explain",
          "patient": "What does a low FIT actually mean?",
          "task": "Explain the purpose and limits of symptomatic FIT in plain language.",
          "model": "FIT measures a small amount of blood in the stool sample. Yours is below the level that usually triggers the urgent referral pathway from the test alone. It does not rule out every important cause, so we must also consider your continuing symptoms.",
          "simple": "The sample result is low. That helps, but it does not rule out every cause of your continuing bleeding.",
          "starter": "FIT measures… Yours is below… It does not…",
          "purpose": "Explain the reasoning at the right level of certainty.",
          "tip": "Avoid calling the whole assessment “normal”. Explain the result without introducing a false guarantee.",
          "reply": "I thought “negative” meant there was definitely nothing wrong.",
          "options": [
            "Explain the purpose and limits of symptomatic FIT in plain language.",
            "Say a low result excludes bowel cancer in every patient.",
            "Say that FIT itself diagnoses the cause of the bleeding."
          ],
          "answer": 0,
          "why": "NG12 uses at least 10 micrograms Hb/g for referral from FIT, while low results require safety netting and action on continuing clinical concern.",
          "essential": [
            "Explained what the test measures",
            "Explained its limits in the context of continuing symptoms"
          ],
          "improve": [
            "Avoid calling the whole assessment “normal”. Explain the result without introducing a false guarantee."
          ],
          "next": "uncertainty"
        },
        {
          "id": "uncertainty",
          "phrase": "uncertainty",
          "stage": "explain",
          "patient": "So are you saying you think I have cancer?",
          "task": "Distinguish clinical concern from a diagnosis and explain how uncertainty will be resolved.",
          "model": "We have not diagnosed cancer. There are several possible causes. Because the symptoms remain unexplained, further assessment is the safest way to find out what is happening rather than assume the low result settles it.",
          "simple": "We do not have a cancer diagnosis. We need further assessment to find the cause of the continuing symptoms.",
          "starter": "We have not… Because… The next assessment will…",
          "purpose": "Make uncertainty understandable and attach it to a practical next step.",
          "tip": "Give a small amount of information, pause and let the patient respond before moving to the arrangements.",
          "reply": "That makes sense. What would you recommend now?",
          "options": [
            "Distinguish clinical concern from a diagnosis and explain how uncertainty will be resolved.",
            "Announce a cancer diagnosis from the history and FIT alone.",
            "Promise a harmless cause before the further assessment."
          ],
          "answer": 0,
          "why": "Explain why investigation is recommended without treating suspicion as confirmation.",
          "essential": [
            "Clearly separated concern from a confirmed diagnosis",
            "Linked uncertainty to a concrete next step"
          ],
          "improve": [
            "Give a small amount of information, pause and let the patient respond before moving to the arrangements."
          ],
          "next": "recommend"
        },
        {
          "id": "recommend",
          "phrase": "recommend",
          "stage": "plan",
          "patient": "Do we just repeat the stool test and wait?",
          "task": "Recommend appropriate further assessment without letting a low FIT delay action on strong concern.",
          "model": "I recommend further assessment through the appropriate bowel referral pathway because the bleeding and bowel change are still unexplained. I will check the current local arrangements and make the referral. How does that sound to you?",
          "simple": "I recommend further assessment because the symptoms are continuing. I will arrange the appropriate referral.",
          "starter": "I recommend… because… I will… How does that sound…",
          "purpose": "Offer a clinically appropriate recommendation and invite the patient’s view.",
          "tip": "Only promise a specific procedure or appointment time once confirmed. Explain the referral purpose and urgency that actually apply.",
          "reply": "Alex agrees with further assessment but worries about taking time away from work.",
          "options": [
            "Recommend appropriate further assessment without letting a low FIT delay action on strong concern.",
            "Repeat FIT indefinitely instead of acting on persistent clinical concern.",
            "Close the episode and tell the patient to request another appointment only if the FIT later becomes high."
          ],
          "answer": 0,
          "why": "Current NG12 says referral should not be delayed when strong concern persists despite a low or unreturned FIT. Select urgency and route from the actual findings and local pathway.",
          "essential": [
            "Recommended an actual next assessment based on the clinical concern",
            "Explained the reason and invited the patient’s response"
          ],
          "improve": [
            "Only promise a specific procedure or appointment time once confirmed. Explain the referral purpose and urgency that actually apply."
          ],
          "next": "barrier"
        },
        {
          "id": "barrier",
          "phrase": "barrier",
          "stage": "plan",
          "patient": "My manager is difficult about time off. I might not be able to go.",
          "task": "Explore the access barrier and make the referral usable while retaining clinical ownership.",
          "model": "Which part of attending would be hardest? Let’s discuss the practical support and appointment arrangements available. I still recommend the assessment; if the offered appointment is not manageable, please contact us so we can help rather than leave the symptoms unchecked.",
          "simple": "What would make attending difficult? Let’s find practical help so the assessment can happen.",
          "starter": "Which part… Let’s discuss… If the appointment…",
          "purpose": "Find the actual obstacle and agree arrangements the patient can use.",
          "tip": "Use actual local availability. An administrative check date is separate from the required clinical urgency.",
          "reply": "Alex can attend with notice. The clinician explains the actual referral process and available support. In this fictional scenario, the practice agrees to check referral receipt and contact Alex within two working days; this is a local arrangement, not a national target.",
          "options": [
            "Explore the access barrier and make the referral usable while retaining clinical ownership.",
            "Remove the referral because work makes attendance inconvenient.",
            "Promise a weekend appointment without checking whether one exists."
          ],
          "answer": 0,
          "why": "Address the specific obstacle without quietly weakening a clinically necessary recommendation.",
          "essential": [
            "Explored the real practical obstacle",
            "Agreed feasible arrangements and named referral follow-up ownership"
          ],
          "improve": [
            "Use actual local availability. An administrative check date is separate from the required clinical urgency."
          ],
          "next": "safety"
        },
        {
          "id": "safety",
          "phrase": "safety",
          "stage": "close",
          "patient": "What should I do if it gets worse before I am seen?",
          "task": "Give specific earlier-help advice and a clear emergency route.",
          "model": "If you have heavy bleeding, feel faint or collapse, or develop severe pain or serious illness, get urgent help straight away; collapse or severe ongoing bleeding needs 999. Contact the practice promptly if symptoms change or continue to worsen. Do not wait for the referral appointment in those situations.",
          "simple": "Heavy ongoing bleeding or collapse needs emergency help. Contact us promptly for a concerning change; don’t wait for the appointment.",
          "starter": "If… get… Do not wait for…",
          "purpose": "Give relevant warning signs, a contact route, urgency and a review plan.",
          "tip": "Check the patient knows how to access help. Tailor the advice to the whole assessment and local services.",
          "reply": "Alex knows to seek help sooner for deterioration rather than wait for an investigation.",
          "options": [
            "Give specific earlier-help advice and a clear emergency route.",
            "Give only “come back if worse” without a route or urgency.",
            "Tell the patient to wait for the referral regardless of deterioration."
          ],
          "answer": 0,
          "why": "A pending referral is not a plan for managing acute bleeding or illness.",
          "essential": [
            "Named relevant deterioration signs",
            "Matched emergency and earlier-review routes to the actual severity"
          ],
          "improve": [
            "Check the patient knows how to access help. Tailor the advice to the whole assessment and local services."
          ],
          "next": "check"
        },
        {
          "id": "check",
          "phrase": "check",
          "stage": "close",
          "patient": "Who checks that the referral goes through?",
          "task": "Confirm ownership, the agreed contact plan and understanding.",
          "model": "I will send the referral, and the practice will check it has been received and contact you as agreed. If you have not heard by our agreed date, please contact us as a backup; we remain responsible for following it up. Could you talk me through the plan so I can check I have explained it clearly?",
          "simple": "The practice will track the referral and contact you. If you have not heard by the agreed date, call us. Could you tell me the plan back?",
          "starter": "I will… The practice will… If you have not heard… Could you…",
          "purpose": "Check understanding, correct gaps and name who will arrange and review each action.",
          "tip": "Make teach-back a check on your explanation, not a test of the patient. Correct misunderstandings before closing.",
          "reply": "I understand why more assessment is needed. The practice will track the referral and contact me, and I will seek help sooner if the bleeding becomes heavy or I feel seriously unwell.",
          "options": [
            "Confirm ownership, the agreed contact plan and understanding.",
            "Hand all responsibility to the patient to chase an untracked referral.",
            "Ask “OK?” and end without checking understanding or a missed-contact plan."
          ],
          "answer": 0,
          "why": "A patient backup complements clinician ownership; it does not transfer responsibility for the referral.",
          "essential": [
            "Confirmed who sends, tracks and communicates the referral",
            "Used teach-back and a missed-contact contingency"
          ],
          "improve": [
            "Make teach-back a check on your explanation, not a test of the patient. Correct misunderstandings before closing."
          ],
          "next": null
        },
        {
          "id": "urgent",
          "phrase": "focus",
          "stage": "focus",
          "patient": "There is a lot of blood now and I feel faint. I’m at home on my own.",
          "task": "Arrange emergency assessment now and confirm practical contact details.",
          "model": "This amount of bleeding with faintness needs emergency help now. I will arrange an ambulance. Please confirm your exact address and callback number. Do not drive yourself; sit or lie down somewhere safe while help is arranged.",
          "simple": "Heavy bleeding and faintness need an ambulance now. Let’s confirm where you are and arrange help.",
          "starter": "This needs… I will… Please confirm…",
          "purpose": "Choose questions that distinguish causes and change urgency or management.",
          "tip": "Maintain contact and support as appropriate while emergency help is arranged. Do not leave the person with only a routine referral.",
          "reply": "The emergency team accepts the handover in this fictional scenario. The clinician follows the local emergency process and documents the transfer.",
          "options": [
            "Arrange emergency assessment now and confirm practical contact details.",
            "Finish a routine FIT explanation before arranging help.",
            "Ask the patient to drive to a routine appointment tomorrow."
          ],
          "answer": 0,
          "why": "Severe ongoing bleeding with possible circulatory compromise takes priority over routine referral or test discussion.",
          "essential": [
            "Recognised the emergency and arranged immediate help",
            "Confirmed location, callback and safe transfer without self-driving"
          ],
          "improve": [
            "Maintain contact and support as appropriate while emergency help is arranged. Do not leave the person with only a routine referral."
          ],
          "next": null,
          "title": "Heavy bleeding: stop routine discussion"
        }
      ]
    },
    {
      "id": "dyspepsia",
      "title": "Dyspepsia: explain a test, medicine pause and review",
      "category": "Symptoms · Testing and shared decisions",
      "patient": "Jamie Ellis, 36 · Telephone after assessment",
      "brief": "A stable adult has recurrent dyspepsia without alarm features after an appropriate assessment. They take an over-the-counter PPI and ask for antibiotics or an endoscopy. Explain proportionate options, safe H pylori test preparation and review. An alternative patient answer explores choosing an empirical trial instead of testing now.",
      "goal": "Connect assessment, a clear recommendation, test preparation, patient preference and definite follow-up.",
      "atlas": "gi-dyspepsia",
      "studio": null,
      "links": [
        {
          "label": "NICE CG184: dyspepsia and H pylori",
          "url": "https://www.nice.org.uk/guidance/cg184"
        },
        {
          "label": "NICE NG12: concerning upper-GI symptoms",
          "url": "https://www.nice.org.uk/guidance/ng12"
        },
        {
          "label": "NHS: indigestion",
          "url": "https://www.nhs.uk/conditions/indigestion/"
        }
      ],
      "nodes": [
        {
          "id": "hello",
          "phrase": "hello",
          "stage": "open",
          "patient": "Hello. I want to sort out this indigestion.",
          "task": "Introduce yourself and confirm identity and privacy before the discussion.",
          "model": "Hello, I’m Dr Patel, one of the GPs. Could I check your name and date of birth? Is it private and convenient for you to talk now?",
          "simple": "Hello, I’m Dr Patel. Could I confirm your details? Can you talk privately?",
          "starter": "Hello, I’m… Could I check… Is it…",
          "purpose": "Introduce yourself accurately, confirm identity and establish whether sensitive discussion is safe.",
          "tip": "Pause for each answer and establish the contact/location details needed for the situation.",
          "reply": "Jamie confirms identity and a private setting for the discussion.",
          "options": [
            "Introduce yourself and confirm identity and privacy before the discussion.",
            "Discuss a test result without checking who is on the phone.",
            "Assume a telephone call is private because the patient answered."
          ],
          "answer": 0,
          "why": "A safe start establishes who is present and whether sensitive details can be discussed.",
          "essential": [
            "Confirmed identity",
            "Checked privacy and readiness to talk"
          ],
          "improve": [
            "Pause for each answer and establish the contact/location details needed for the situation."
          ],
          "next": "agenda"
        },
        {
          "id": "agenda",
          "phrase": "agenda",
          "stage": "open",
          "patient": "Can I have antibiotics, or should I have a camera test?",
          "task": "Clarify the two requests and invite any other concern before agreeing a priority.",
          "model": "We can discuss whether either is likely to help and what needs checking first. Is there anything else you wanted help with today?",
          "simple": "Let’s discuss the tests and treatment. Is there anything else you need help with?",
          "starter": "We can discuss… Is there anything else…",
          "purpose": "Find important concerns early, then agree a safe priority.",
          "tip": "Ask what the patient expects the test or medicine to do before assuming the reason for the request.",
          "reply": "Jamie wants symptom relief and an explanation of why the current plan is reasonable. There is no other concern today.",
          "options": [
            "Clarify the two requests and invite any other concern before agreeing a priority.",
            "Promise antibiotics before establishing an indication.",
            "Book an endoscopy solely because the patient asks for it."
          ],
          "answer": 0,
          "why": "An early request identifies the agenda, but the recommendation still depends on assessment.",
          "essential": [
            "Acknowledged both requests",
            "Agreed the priority without promising a test or treatment"
          ],
          "improve": [
            "Ask what the patient expects the test or medicine to do before assuming the reason for the request."
          ],
          "next": "story"
        },
        {
          "id": "story",
          "phrase": "story",
          "stage": "understand",
          "patient": "I get burning and discomfort after meals. I buy acid tablets and it comes back when I stop.",
          "task": "Clarify the symptom pattern, previous treatment and what has changed.",
          "model": "Could you talk me through the discomfort and when it happens? Then I’d like to check the name of the acid medicine, how you take it and what difference it makes.",
          "simple": "When does the discomfort happen? What medicine have you tried and how has it helped?",
          "starter": "Could you talk me through… Then I’d like to check…",
          "purpose": "Let the patient describe the problem before narrowing the questions.",
          "tip": "Ask about one part at a time. Confirm the product rather than assume all “stomach tablets” are the same.",
          "reply": "Jamie describes recurrent upper abdominal burning and reflux symptoms. The actual product is an over-the-counter PPI used intermittently. The clinician clarifies dose, duration, response and previous tests.",
          "options": [
            "Clarify the symptom pattern, previous treatment and what has changed.",
            "Assume every chest or upper abdominal discomfort is acid reflux.",
            "Escalate the PPI without checking the actual medicine or use."
          ],
          "answer": 0,
          "why": "Symptom pattern and actual medicine use guide the differential and a useful next step.",
          "essential": [
            "Clarified the symptoms and course",
            "Checked the actual treatment, use and response"
          ],
          "improve": [
            "Ask about one part at a time. Confirm the product rather than assume all “stomach tablets” are the same."
          ],
          "next": "impact"
        },
        {
          "id": "impact",
          "phrase": "impact",
          "stage": "understand",
          "patient": "My dad had an ulcer. I keep thinking I might have one as well.",
          "task": "Explore the meaning of the family experience and the impact of symptoms.",
          "model": "Seeing your dad go through that has made this worrying. What is your main concern about your symptoms? How are they affecting eating or sleep?",
          "simple": "What worries you most? How is this affecting your day-to-day life?",
          "starter": "That has made… What is your main concern…",
          "purpose": "Understand function and the patient’s concern, then use the answers in your plan.",
          "tip": "Pause after the concern question and respond before asking about impact.",
          "reply": "Jamie fears an ulcer or serious disease and wants to stop symptoms disturbing sleep.",
          "options": [
            "Explore the meaning of the family experience and the impact of symptoms.",
            "Guarantee there is no ulcer before the assessment and testing.",
            "Give dietary advice without acknowledging the worry."
          ],
          "answer": 0,
          "why": "The explanation should answer the patient’s actual concern and the plan should have a meaningful symptom goal.",
          "essential": [
            "Explored the specific fear",
            "Clarified an effect on daily life to use in the plan"
          ],
          "improve": [
            "Pause after the concern question and respond before asking about impact."
          ],
          "next": "focus"
        },
        {
          "id": "focus",
          "phrase": "focus",
          "stage": "focus",
          "patient": "It has not suddenly changed, but I’m not sure what symptoms matter.",
          "task": "Check alarm features, serious alternative causes and medicines before choosing a routine plan.",
          "model": "I need to check for symptoms that would change the urgency. Have you had difficulty swallowing, vomiting blood, black stools, or unintentional weight loss? I’ll also ask about vomiting, severe or chest-related pain and review your medicines and previous stomach problems.",
          "simple": "Have you had swallowing difficulty, bleeding, weight loss or severe pain? We also need to check your medicines and previous stomach problems.",
          "starter": "I need to check… Have you had… I’ll also review…",
          "purpose": "Choose questions that distinguish causes and change urgency or management.",
          "tip": "The displayed questions are selected examples. Ask them separately and complete the appropriate assessment and examination; possible cardiac pain needs its own pathway.",
          "reply": "The full fictional assessment finds no alarm feature or acute illness and no indication for an urgent pathway. Medicines, prior antibiotics, allergy and previous H pylori/ulcer history are reviewed; there is no gastroprotection reason requiring continued PPI in this ordinary scenario.",
          "options": [
            "Check alarm features, serious alternative causes and medicines before choosing a routine plan.",
            "Start a routine treatment trial despite dysphagia or suspected GI bleeding.",
            "Tell every patient to stop acid protection without checking its indication."
          ],
          "answer": 0,
          "why": "Uncomplicated dyspepsia can use an initial test/treatment strategy; acute or cancer-pathway findings require a different plan.",
          "essential": [
            "Checked findings that change urgency or referral",
            "Reviewed medicine/protection needs and relevant history"
          ],
          "improve": [
            "The displayed questions are selected examples. Ask them separately and complete the appropriate assessment and examination; possible cardiac pain needs its own pathway."
          ],
          "next": "summary"
        },
        {
          "id": "summary",
          "phrase": "summary",
          "stage": "focus",
          "patient": "So what have we found so far?",
          "task": "Summarise why a routine initial strategy is appropriate in this specific scenario.",
          "model": "You have recurrent indigestion and reflux symptoms, with some benefit from the PPI. The assessment today has not found warning features. Your main goals are symptom relief and knowing we have a sensible plan to check the cause. Is that right?",
          "simple": "The symptoms recur, and today’s assessment has not found warning signs. You want relief and a clear plan. Have I got that right?",
          "starter": "You have… Today’s assessment… Your main goals…",
          "purpose": "Check the facts and patient priority before explaining your assessment.",
          "tip": "Keep the summary short and correct it if the patient adds a warning symptom.",
          "reply": "Yes. Jamie wants to know what the infection test can tell them.",
          "options": [
            "Summarise why a routine initial strategy is appropriate in this specific scenario.",
            "Say there can never be a serious cause because the patient is 36.",
            "Claim a definite ulcer diagnosis from symptoms alone."
          ],
          "answer": 0,
          "why": "A summary links the findings and the patient’s concern while keeping the limits of the assessment visible.",
          "essential": [
            "Summarised actual findings and the main goal",
            "Avoided a definite diagnosis or lifetime reassurance"
          ],
          "improve": [
            "Keep the summary short and correct it if the patient adds a warning symptom."
          ],
          "next": "explain"
        },
        {
          "id": "explain",
          "phrase": "explain",
          "stage": "explain",
          "patient": "What is H pylori? Is it cancer?",
          "task": "Explain the test purpose in ordinary language.",
          "model": "H pylori is a bacterium that can contribute to some stomach problems, including ulcers. A breath or stool test can check for it. The test is not a cancer test, and a positive result does not mean you have cancer.",
          "simple": "It is a bacterium linked to some stomach problems. The test looks for it; it does not diagnose cancer.",
          "starter": "H pylori is… The test can… It does not mean…",
          "purpose": "Explain the reasoning at the right level of certainty.",
          "tip": "Give this explanation in short chunks. Ask what the patient understood before adding more detail.",
          "reply": "That helps. Why can’t I just take antibiotics now?",
          "options": [
            "Explain the test purpose in ordinary language.",
            "Describe H pylori as the cause of every indigestion symptom.",
            "Call a positive infection test a cancer diagnosis."
          ],
          "answer": 0,
          "why": "Explain what the test can and cannot establish before discussing treatment.",
          "essential": [
            "Explained the bacterium and the purpose of testing",
            "Distinguished infection testing from a cancer diagnosis"
          ],
          "improve": [
            "Give this explanation in short chunks. Ask what the patient understood before adding more detail."
          ],
          "next": "uncertainty"
        },
        {
          "id": "uncertainty",
          "phrase": "uncertainty",
          "stage": "explain",
          "patient": "Wouldn’t antibiotics now be safer than waiting?",
          "task": "Explain why antibiotics need an appropriate indication and regimen without dismissing the request.",
          "model": "Antibiotics can help when there is a suitable reason to treat H pylori, but they can also cause side effects. We should choose the test and treatment plan from your assessment, and use the right regimen if treatment is indicated. Would it help to go through the options?",
          "simple": "Antibiotics are useful for the right reason. Let’s agree the test or treatment plan first, rather than give a course that may not help.",
          "starter": "Antibiotics can help when… We should… Would it help…",
          "purpose": "Make uncertainty understandable and attach it to a practical next step.",
          "tip": "Explain your recommendation before asking for a preference. No universal eradication regimen is supplied in this exercise.",
          "reply": "Yes. Jamie wants to know whether testing or a planned symptom-treatment trial makes more sense.",
          "options": [
            "Explain why antibiotics need an appropriate indication and regimen without dismissing the request.",
            "Prescribe an arbitrary antibiotic course without considering allergy, exposure or indication.",
            "Refuse the request without explaining the reason or the next step."
          ],
          "answer": 0,
          "why": "CG184 supports test-and-treat and an appropriate empirical PPI strategy; regimen choice requires relevant prescribing checks.",
          "essential": [
            "Explained the reason for avoiding unsupported antibiotics",
            "Offered a constructive assessment-led next step"
          ],
          "improve": [
            "Explain your recommendation before asking for a preference. No universal eradication regimen is supplied in this exercise."
          ],
          "next": "recommend"
        },
        {
          "id": "recommend",
          "phrase": "recommend",
          "stage": "plan",
          "patient": "What do you recommend for me?",
          "task": "Discuss proportionate options and agree the initial sequence with the patient.",
          "model": "Based on the assessment, we can discuss testing for H pylori and an appropriate planned course of acid treatment. I suggest arranging the test first if we can prepare for it safely, then reviewing the result and your symptoms. An empirical PPI trial is another appropriate option in this uncomplicated situation. What are your thoughts?",
          "simple": "We can test for H pylori or agree a planned acid-treatment trial. I suggest testing first if preparation is safe. What would work for you?",
          "starter": "Based on… I suggest… Another option is… What are your thoughts…",
          "purpose": "Offer a clinically appropriate recommendation and invite the patient’s view.",
          "tip": "Do not use an empirical trial to delay indicated investigation or referral. The ordinary scenario has no alarm features.",
          "reply": "Jamie prefers a test first, provided symptoms can be managed during preparation.",
          "options": [
            "Discuss proportionate options and agree the initial sequence with the patient.",
            "Say everyone with dyspepsia needs immediate endoscopy.",
            "Present a test as compulsory when an appropriate alternative exists."
          ],
          "answer": 0,
          "why": "Choose a proportionate strategy from CG184, previous treatment and clinical context; patient preference informs the feasible sequence.",
          "essential": [
            "Made a clear assessment-led recommendation with an appropriate alternative",
            "Invited and used the patient’s preference"
          ],
          "improve": [
            "Do not use an empirical trial to delay indicated investigation or referral. The ordinary scenario has no alarm features."
          ],
          "next": "barrier",
          "branch": {
            "label": "Practise a different patient answer: I do not want a test now",
            "patient": "I understand the options, but I don’t want a breath or stool test at the moment. Could we try a planned course of medicine instead?",
            "next": "trial-choice"
          }
        },
        {
          "id": "barrier",
          "phrase": "barrier",
          "stage": "plan",
          "patient": "I’m worried the burning will be unbearable if I stop the PPI for the test.",
          "task": "Make the medicine preparation safe and manageable before booking the sample.",
          "model": "The PPI can affect the accuracy of a breath or stool test, so the usual preparation includes a two-week gap without it when that is safe. We’ve checked why you take it; let’s also check the actual test instructions, recent antibiotics and suitable symptom support. If the pause is not manageable, contact us so we can review the plan.",
          "simple": "The PPI usually needs a two-week pause for this test, if safe. Let’s check the instructions and agree symptom support and a contact plan.",
          "starter": "The PPI can… The preparation includes… Let’s check…",
          "purpose": "Find the actual obstacle and agree arrangements the patient can use.",
          "tip": "Offer only symptom-support options appropriate for the actual test and the patient. Do not invent a laboratory turnaround time.",
          "reply": "The clinician checks the laboratory preparation, confirms a safe stop/start and symptom-support plan, books the test and records who reviews it. A result-review contact date is agreed using the local turnaround time.",
          "options": [
            "Make the medicine preparation safe and manageable before booking the sample.",
            "Tell the patient to stop any clinically needed gastroprotection without checking risks.",
            "Take the sample during PPI use without considering the effect on accuracy."
          ],
          "answer": 0,
          "why": "CG184 recommends a two-week PPI washout before breath/stool testing; preparation also needs the actual test requirements and clinical safety checks.",
          "essential": [
            "Explained the reason and usual two-week PPI preparation",
            "Checked safety, actual instructions, practical support and results ownership"
          ],
          "improve": [
            "Offer only symptom-support options appropriate for the actual test and the patient. Do not invent a laboratory turnaround time."
          ],
          "next": "safety"
        },
        {
          "id": "safety",
          "phrase": "safety",
          "stage": "close",
          "patient": "If I get different symptoms while waiting, should I just take more tablets?",
          "task": "Explain what changes the plan and give a practical urgent-help route.",
          "model": "Do not just increase the tablets if new warning symptoms appear. Vomiting blood, collapse or serious acute illness needs urgent or emergency help. New difficulty swallowing, unintentional weight loss or persistent vomiting needs prompt assessment. Contact us if symptoms are not controlled or preparation is difficult rather than struggling through the plan alone.",
          "simple": "Bleeding or serious illness needs urgent help. New swallowing difficulty, weight loss or persistent vomiting needs prompt assessment. Contact us for a preparation problem.",
          "starter": "Do not just… If… please…",
          "purpose": "Give relevant warning signs, a contact route, urgency and a review plan.",
          "tip": "Match 999, urgent assessment and routine contact to the actual symptom severity. Safety advice does not replace arranging indicated care.",
          "reply": "Jamie understands to seek earlier assessment for warning symptoms and contact the practice if test preparation cannot be managed.",
          "options": [
            "Explain what changes the plan and give a practical urgent-help route.",
            "Tell the patient to finish the routine trial before reporting bleeding or dysphagia.",
            "Give only “call if worse” without explaining what matters."
          ],
          "answer": 0,
          "why": "New warning features can move the patient from routine dyspepsia care to an acute or suspected-cancer pathway.",
          "essential": [
            "Named important symptoms that change urgency",
            "Provided an earlier-help route for deterioration or preparation problems"
          ],
          "improve": [
            "Match 999, urgent assessment and routine contact to the actual symptom severity. Safety advice does not replace arranging indicated care."
          ],
          "next": "check"
        },
        {
          "id": "check",
          "phrase": "check",
          "stage": "close",
          "patient": "What happens after I send the sample?",
          "task": "Check understanding and close the result and symptom-review loop.",
          "model": "The practice will review the result and contact you by the date we agreed. We will discuss whether treatment is needed and review the symptoms even if the result is negative. If you have not heard, contact us as a backup; we still need to check the result. Could you talk me through the test preparation and what happens next?",
          "simple": "We will review and contact you, then decide the next step. If you have not heard by the agreed date, call us. Could you tell me the plan back?",
          "starter": "The practice will… If you have not heard… Could you…",
          "purpose": "Check understanding, correct gaps and name who will arrange and review each action.",
          "tip": "Make the date and contact method real. Clarify uncertainty before closing rather than asking only “does that make sense?”.",
          "reply": "Jamie explains the preparation, sample date, review contact and warning symptoms in their own words; the clinician corrects any gaps.",
          "options": [
            "Check understanding and close the result and symptom-review loop.",
            "Assume a negative H pylori result means persistent symptoms never need review.",
            "Leave the patient to interpret an online result without a follow-up arrangement."
          ],
          "answer": 0,
          "why": "Results ownership and symptom review remain necessary whatever the infection-test result.",
          "essential": [
            "Confirmed review ownership and the missed-contact contingency",
            "Checked preparation and next steps using teach-back"
          ],
          "improve": [
            "Make the date and contact method real. Clarify uncertainty before closing rather than asking only “does that make sense?”."
          ],
          "next": null
        },
        {
          "id": "trial-choice",
          "phrase": "barrier",
          "stage": "plan",
          "patient": "I don’t want testing now. I would prefer a planned medicine trial.",
          "task": "Explore the preference, explain an appropriate alternative and make a shared plan.",
          "model": "Could you tell me what puts you off testing? In this uncomplicated situation, an appropriate full-dose PPI trial for four weeks is an option. We would check the actual medicine and dose, review the response, and reconsider testing or further assessment if symptoms persist or change. How does that fit with what you were hoping for?",
          "simple": "What puts you off testing? We can consider an appropriate four-week PPI trial with a definite review, then reconsider the next step.",
          "starter": "Could you tell me… An option is… We would review…",
          "purpose": "Find the actual obstacle and agree arrangements the patient can use.",
          "tip": "Do not imply all PPIs or doses are interchangeable. This alternative applies to the assessed uncomplicated scenario.",
          "reply": "Jamie has understood the alternatives and prefers the empirical trial. The clinician checks suitability and the actual prescription and arranges a four-week review; no test is booked in this path.",
          "options": [
            "Explore the preference, explain an appropriate alternative and make a shared plan.",
            "Describe a reasonable choice as non-compliance and stop helping.",
            "Promise indefinite repeat PPI prescriptions without reassessment."
          ],
          "answer": 0,
          "why": "CG184 includes an empirical full-dose four-week PPI strategy for uncomplicated dyspepsia. A considered preference should lead to an appropriate plan rather than coercion.",
          "essential": [
            "Explored the reason and confirmed an informed preference",
            "Agreed a suitable trial and definite review with the actual prescribing checks"
          ],
          "improve": [
            "Do not imply all PPIs or doses are interchangeable. This alternative applies to the assessed uncomplicated scenario."
          ],
          "next": "trial-close",
          "title": "Alternative: choosing an empirical trial",
          "alternative": true
        },
        {
          "id": "trial-close",
          "phrase": "check",
          "stage": "close",
          "patient": "So I’ll try the planned course and we will review it, rather than do the test now?",
          "task": "Confirm the alternative plan, earlier-help advice and ownership using teach-back.",
          "model": "Yes. We will review the response after the planned four-week course and decide what is needed next. Do not wait for that review if you develop bleeding, swallowing difficulty, concerning weight loss or serious illness; seek the appropriate urgent help. Could you tell me how you will take the actual prescription and when you would contact us sooner?",
          "simple": "We will review the planned four-week trial. Seek help sooner for warning symptoms. Could you talk me through the medicine and review plan?",
          "starter": "We will review… Do not wait if… Could you tell me…",
          "purpose": "Check understanding, correct gaps and name who will arrange and review each action.",
          "tip": "Match urgent and emergency help to severity. A change suggesting an acute or cancer pathway changes the plan immediately.",
          "reply": "Jamie explains the actual prescription, four-week review and earlier-help triggers. The clinician confirms the review booking and contact route.",
          "options": [
            "Confirm the alternative plan, earlier-help advice and ownership using teach-back.",
            "Claim that agreeing a treatment trial rules out an important cause forever.",
            "Close without checking medicine use, warning symptoms or a review date."
          ],
          "answer": 0,
          "why": "An empirical trial needs assessment of response, a clear review and a contingency; it is not an indefinite diagnosis or automatic repeat prescription.",
          "essential": [
            "Confirmed the actual treatment and review ownership",
            "Named warning symptoms and checked understanding of earlier help"
          ],
          "improve": [
            "Match urgent and emergency help to severity. A change suggesting an acute or cancer pathway changes the plan immediately."
          ],
          "next": null,
          "title": "Alternative: review and close the treatment trial",
          "alternative": true
        }
      ]
    }
  ],
  "exam": {
    "reading": 180,
    "consultation": 720,
    "url": "https://www.rcgp.org.uk/mrcgp-exams/simulated-consultation-assessment/introduction"
  },
  "atlasCases": [
    {
      "id": "atlas:mh-depression",
      "title": "Depression: first presentation",
      "areaId": "mental-health",
      "areaTitle": "Mental health"
    },
    {
      "id": "atlas:mh-minority-stress",
      "title": "Depression with rejection and minority stress",
      "areaId": "mental-health",
      "areaTitle": "Mental health"
    },
    {
      "id": "atlas:mh-sleep",
      "title": "Low mood and a sleeping-tablet request",
      "areaId": "mental-health",
      "areaTitle": "Mental health"
    },
    {
      "id": "atlas:mh-palliative",
      "title": "Depression and distress in advanced illness",
      "areaId": "mental-health",
      "areaTitle": "Mental health"
    },
    {
      "id": "atlas:mh-adjustment",
      "title": "Low mood after relationship breakdown",
      "areaId": "mental-health",
      "areaTitle": "Mental health"
    },
    {
      "id": "atlas:mh-antenatal",
      "title": "Depression during pregnancy",
      "areaId": "mental-health",
      "areaTitle": "Mental health"
    },
    {
      "id": "atlas:mh-postnatal",
      "title": "Postnatal depression and isolation",
      "areaId": "mental-health",
      "areaTitle": "Mental health"
    },
    {
      "id": "atlas:mh-postpartum-psychosis",
      "title": "Postpartum psychosis: recognising an emergency",
      "areaId": "mental-health",
      "areaTitle": "Mental health"
    },
    {
      "id": "atlas:mh-gad",
      "title": "Generalised anxiety: persistent worry",
      "areaId": "mental-health",
      "areaTitle": "Mental health"
    },
    {
      "id": "atlas:mh-panic",
      "title": "Panic attacks with physical symptoms",
      "areaId": "mental-health",
      "areaTitle": "Mental health"
    },
    {
      "id": "atlas:mh-young-person",
      "title": "Young person with anxiety, low mood and school avoidance",
      "areaId": "mental-health",
      "areaTitle": "Mental health"
    },
    {
      "id": "atlas:mh-psychosis",
      "title": "First-episode psychosis and a request for sleep medication",
      "areaId": "mental-health",
      "areaTitle": "Mental health"
    },
    {
      "id": "atlas:mh-relapse",
      "title": "Schizophrenia: stopping medication because of adverse effects",
      "areaId": "mental-health",
      "areaTitle": "Mental health"
    },
    {
      "id": "atlas:mh-mania",
      "title": "Possible mania behind reduced sleep",
      "areaId": "mental-health",
      "areaTitle": "Mental health"
    },
    {
      "id": "atlas:mh-ptsd",
      "title": "PTSD after trauma",
      "areaId": "mental-health",
      "areaTitle": "Mental health"
    },
    {
      "id": "atlas:mh-bullying",
      "title": "Bullying, disability and deteriorating mental health",
      "areaId": "mental-health",
      "areaTitle": "Mental health"
    },
    {
      "id": "atlas:mh-dependence",
      "title": "Long-term benzodiazepine use and an early refill",
      "areaId": "mental-health",
      "areaTitle": "Mental health"
    },
    {
      "id": "atlas:mh-opioid",
      "title": "Codeine use, persistent pain and dependence",
      "areaId": "mental-health",
      "areaTitle": "Mental health"
    },
    {
      "id": "atlas:mh-gambling",
      "title": "Gambling-related harms and hidden suicidal risk",
      "areaId": "mental-health",
      "areaTitle": "Mental health"
    },
    {
      "id": "atlas:mh-eating",
      "title": "Adolescent eating disorder and physical risk",
      "areaId": "mental-health",
      "areaTitle": "Mental health"
    },
    {
      "id": "atlas:mh-alcohol",
      "title": "Alcohol dependence, withdrawal and change",
      "areaId": "mental-health",
      "areaTitle": "Mental health"
    },
    {
      "id": "atlas:pd-fever",
      "title": "Fever in a young child: assess before reassuring",
      "areaId": "paediatrics",
      "areaTitle": "Paediatrics"
    },
    {
      "id": "atlas:pd-gastroenteritis",
      "title": "Diarrhoea and vomiting: dehydration and home care",
      "areaId": "paediatrics",
      "areaTitle": "Paediatrics"
    },
    {
      "id": "atlas:pd-constipation",
      "title": "Constipation, overflow soiling and family strain",
      "areaId": "paediatrics",
      "areaTitle": "Paediatrics"
    },
    {
      "id": "atlas:pd-newborn-weight",
      "title": "Newborn weight loss and feeding concerns",
      "areaId": "paediatrics",
      "areaTitle": "Paediatrics"
    },
    {
      "id": "atlas:pd-reflux",
      "title": "Infant reflux: reassurance, feeding and red flags",
      "areaId": "paediatrics",
      "areaTitle": "Paediatrics"
    },
    {
      "id": "atlas:pd-colic",
      "title": "Crying infant and an exhausted parent",
      "areaId": "paediatrics",
      "areaTitle": "Paediatrics"
    },
    {
      "id": "atlas:pd-autism",
      "title": "Developmental differences and possible autism",
      "areaId": "paediatrics",
      "areaTitle": "Paediatrics"
    },
    {
      "id": "atlas:pd-adhd",
      "title": "Attention and activity differences: possible ADHD",
      "areaId": "paediatrics",
      "areaTitle": "Paediatrics"
    },
    {
      "id": "atlas:pd-preschool-wheeze",
      "title": "Preschool wheeze and suspected asthma",
      "areaId": "paediatrics",
      "areaTitle": "Paediatrics"
    },
    {
      "id": "atlas:pd-uti",
      "title": "Childhood UTI and recurrent infection",
      "areaId": "paediatrics",
      "areaTitle": "Paediatrics"
    },
    {
      "id": "atlas:pd-bedwetting",
      "title": "Bedwetting, embarrassment and a school trip",
      "areaId": "paediatrics",
      "areaTitle": "Paediatrics"
    },
    {
      "id": "atlas:pd-eczema",
      "title": "Childhood eczema and fear of topical steroids",
      "areaId": "paediatrics",
      "areaTitle": "Paediatrics"
    },
    {
      "id": "atlas:pd-not-brought",
      "title": "Child not brought: access barriers and safeguarding",
      "areaId": "paediatrics",
      "areaTitle": "Paediatrics"
    },
    {
      "id": "atlas:pd-neonatal-eye",
      "title": "A red sticky eye in a newborn",
      "areaId": "paediatrics",
      "areaTitle": "Paediatrics"
    },
    {
      "id": "atlas:pd-head-lice",
      "title": "Head lice, recurrent treatment and school anxiety",
      "areaId": "paediatrics",
      "areaTitle": "Paediatrics"
    },
    {
      "id": "atlas:op-delirium",
      "title": "Sudden confusion: delirium until assessed",
      "areaId": "older-palliative",
      "areaTitle": "Older-person & palliative care"
    },
    {
      "id": "atlas:op-memory",
      "title": "Progressive memory difficulties and possible dementia",
      "areaId": "older-palliative",
      "areaTitle": "Older-person & palliative care"
    },
    {
      "id": "atlas:op-dementia-distress",
      "title": "Distress and aggression in dementia",
      "areaId": "older-palliative",
      "areaTitle": "Older-person & palliative care"
    },
    {
      "id": "atlas:op-falls",
      "title": "Falls, dizziness and a recent medicine change",
      "areaId": "older-palliative",
      "areaTitle": "Older-person & palliative care"
    },
    {
      "id": "atlas:op-opioid-constipation",
      "title": "Opioid-related constipation in a frail adult",
      "areaId": "older-palliative",
      "areaTitle": "Older-person & palliative care"
    },
    {
      "id": "atlas:op-palliative-pain",
      "title": "Palliative pain and an opioid patch problem",
      "areaId": "older-palliative",
      "areaTitle": "Older-person & palliative care"
    },
    {
      "id": "atlas:op-palliative-nausea",
      "title": "Nausea and vomiting after an opioid change",
      "areaId": "older-palliative",
      "areaTitle": "Older-person & palliative care"
    },
    {
      "id": "atlas:op-breathlessness",
      "title": "Breathlessness in advanced illness: physical causes and anxiety",
      "areaId": "older-palliative",
      "areaTitle": "Older-person & palliative care"
    },
    {
      "id": "atlas:op-mnd",
      "title": "MND, swallowing difficulties and carer exhaustion",
      "areaId": "older-palliative",
      "areaTitle": "Older-person & palliative care"
    },
    {
      "id": "atlas:op-advance-care",
      "title": "Advance care, CPR and treatment preferences",
      "areaId": "older-palliative",
      "areaTitle": "Older-person & palliative care"
    },
    {
      "id": "atlas:cv-hypertension",
      "title": "Raised blood pressure: confirmation, risk and a shared plan",
      "areaId": "cardiovascular",
      "areaTitle": "Cardiovascular"
    },
    {
      "id": "atlas:cv-atrial-fibrillation",
      "title": "New atrial fibrillation: symptoms, stroke prevention and bleeding concerns",
      "areaId": "cardiovascular",
      "areaTitle": "Cardiovascular"
    },
    {
      "id": "atlas:cv-chest-pain",
      "title": "Chest pain by telephone: recognise possible ACS and arrange help",
      "areaId": "cardiovascular",
      "areaTitle": "Cardiovascular"
    },
    {
      "id": "atlas:rs-adult-asthma",
      "title": "Adult asthma: increasing reliever use and night symptoms",
      "areaId": "respiratory",
      "areaTitle": "Respiratory"
    },
    {
      "id": "atlas:rs-copd",
      "title": "COPD: breathlessness, inhaler review and a request for oxygen",
      "areaId": "respiratory",
      "areaTitle": "Respiratory"
    },
    {
      "id": "atlas:em-type2-diabetes",
      "title": "New type 2 diabetes: explain the diagnosis and current treatment choices",
      "areaId": "endocrine-metabolic",
      "areaTitle": "Endocrine & metabolic"
    },
    {
      "id": "atlas:em-hypothyroidism",
      "title": "Underactive thyroid: treatment, taking the tablet and follow-up",
      "areaId": "endocrine-metabolic",
      "areaTitle": "Endocrine & metabolic"
    },
    {
      "id": "atlas:em-new-type1",
      "title": "Thirst, weight loss and vomiting: possible type 1 diabetes or DKA",
      "areaId": "endocrine-metabolic",
      "areaTitle": "Endocrine & metabolic"
    },
    {
      "id": "atlas:gi-ibs",
      "title": "IBS-pattern symptoms: a positive explanation and an individual plan",
      "areaId": "gastrointestinal",
      "areaTitle": "Gastrointestinal"
    },
    {
      "id": "atlas:gi-rectal-bleeding",
      "title": "Rectal bleeding and bowel change: explain FIT and close the referral loop",
      "areaId": "gastrointestinal",
      "areaTitle": "Gastrointestinal"
    },
    {
      "id": "atlas:gi-dyspepsia",
      "title": "Dyspepsia: explain testing, a treatment trial and changed symptoms",
      "areaId": "gastrointestinal",
      "areaTitle": "Gastrointestinal"
    }
  ]
};
