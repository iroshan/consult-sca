'use strict';
window.SCA_COACH = {
  "checked": "2026-11-11",
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
    }
  ],
  "exam": {
    "reading": 180,
    "consultation": 720,
    "url": "https://www.rcgp.org.uk/mrcgp-exams/simulated-consultation-assessment/introduction"
  }
};
