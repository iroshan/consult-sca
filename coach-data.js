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
      "atlas": null,
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
      ]
    },
    {
      "id": "asthma",
      "title": "The reliever inhaler is needed more often",
      "category": "Chronic disease",
      "patient": "Omar Khan, 29 · Video",
      "brief": "Omar has confirmed asthma and requests another blue reliever inhaler. Increased use and night symptoms require assessment of current severity and control. This lesson teaches the discussion and review process, not a complete prescribing regimen.",
      "goal": "Practise the structure, explain the next step and respond to this patient’s particular concern.",
      "atlas": null,
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
    }
  ],
  "exam": {
    "reading": 180,
    "consultation": 720,
    "url": "https://www.rcgp.org.uk/mrcgp-exams/simulated-consultation-assessment/introduction"
  }
};
