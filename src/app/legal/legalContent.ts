export type LegalSection = {
  heading: string;
  paragraphs: string[];
};

export function isLegalSubItem(paragraph: string) {
  return /^(?:[ivx]{1,5}\.|[a-h]\.)\s/.test(paragraph);
}

export function buildLegalPlainText(
  title: string,
  effectiveDate: string,
  introHeading: string,
  intro: string[],
  sections: LegalSection[],
) {
  const lines: string[] = [title.toUpperCase(), `Effective date: ${effectiveDate}`, "", introHeading.toUpperCase(), ""];
  intro.forEach((p) => lines.push(p, ""));
  sections.forEach((section) => {
    lines.push(section.heading.toUpperCase(), "");
    section.paragraphs.forEach((p) => lines.push(p, ""));
  });
  return lines.join("\n");
}

/* ── Terms of Use ── */

export const TERMS_EFFECTIVE_DATE = "January 9, 2024";

export const TERMS_INTRO: string[] = [
  `These Terms of Use (“Terms of Use” or “Terms”) apply to your access to and use of our websites and services that link to these Terms (“Services”), including the Online Education Platform (“Platform”). Please read these Terms carefully before using our Services. NOTE THAT THESE TERMS CONTAIN A MANDATORY ARBITRATION PROVISION THAT REQUIRES THE USE OF ARBITRATION ON AN INDIVIDUAL BASIS AND LIMITS THE FORUM AND/OR REMEDIES AVAILABLE TO YOU IN THE EVENT OF CERTAIN DISPUTES. YOU CAN OPT-OUT OF THE ARBITRATION AGREEMENT BY CONTACTING HELLO@PARENTGUIDANCE.ORG AS THE CASE MAY BE WITHIN 30 DAYS OF ACCEPTING THESE TERMS.`,
  `By clicking “I accept” or by accessing or using the Services provided by Cook Center for Human Connection, d/b/a Parent Guidance (hereinafter, “Parent Guidance”) (referred to as “the Company”, “We”, “Us”), you agree to be bound by these Terms and all of the terms incorporated herein by reference. If you do not agree to these Terms, including the mandatory arbitration and class action waiver, you may not access or use the Services.`,
  `Parent Guidance reserves the right to revise these Terms from time to time in its sole discretion. If Parent Guidance makes changes to these Terms, Parent Guidance will provide notice of such changes, such as by sending an email notification, providing notice through the Services or updating the "Effective Date" date at the beginning of these Terms. By continuing to access or use the Services, you confirm your acceptance of the revised Terms and all of the terms incorporated herein by reference. Parent Guidance encourages you to review the Terms frequently to ensure that you understand the terms and conditions that apply when you access or use the Services. If you do not agree to the revised Terms, you may not access or use the Services.`,
];

export const TERMS_SECTIONS: LegalSection[] = [
  {
    heading: "1. What are the Services?",
    paragraphs: [
      'a. The Services are intended to provide a convenient platform for (i) patients to use to track health data in real time and communicate that information to their healthcare provider(s), and (ii) providers to use to proactively track and analyze their patients\' health condition(s) through pertinent health data, treatment and medication adherence, and outcomes. You ("You") are either a "Provider User" or a "Patient User."',
      "b. You may access and use the Services only in accordance with these Terms, and You agree to comply with all applicable laws, rules, and regulations, including any other policies incorporated into these Terms, such as our Privacy Policy (www.parentguidance.org/privacy-policy).",
      "c. For Patient Users:",
      "i. Parent Guidance doesn't guide medical decision-making. THE PLATFORM CANNOT, AND IS NOT DESIGNED, INTENDED, OR APPROPRIATE TO REPLACE OR SUBSTANTIVELY IMPACT YOUR PROVIDER-PATIENT RELATIONSHIP WITH OTHER USERS OR TO ADDRESS SERIOUS, EMERGENT, OR LIFE-THREATENING MEDICAL CONDITIONS AND SHOULD NOT BE USED IN THOSE CIRCUMSTANCES.",
      'ii. If at any time You are concerned about the care or treatment You receive from healthcare professionals affiliated with the Services ("Providers"), please contact your healthcare provider. If You believe or suspect or someone else advises You that You have a serious or life-threatening condition, call 9-1-1 in areas where that service is available, or go to the nearest emergency room.',
      "iii. A PROVIDER'S USE OF OUR SERVICES TO DELIVER CARE TO YOU IS NOT AN ENDORSEMENT OR RECOMMENDATION OF SUCH PROVIDER BY PARENT GUIDANCE. PARENT GUIDANCE DOES NOT PROVIDE MEDICAL ADVICE, AND IS NOT RESPONSIBLE FOR OR IN CONTROL OF THE MEDICAL ADVICE PROVIDED TO YOU BY PROVIDERS, EVEN IF SUCH ADVICE IS PROVIDED THROUGH THE SERVICES.",
      "iv. Parent Guidance does not confirm the credentials of any Provider using the Services. We do not validate that any such persons are in good standing with their respective licensure board(s) or that they are using the Services in accordance with laws applicable to their scope of practice. It is Your responsibility to separately confirm that a Provider is in good standing with his or her respective licensing board(s) and to exercise whatever other due diligence You feel appropriate in selecting and maintaining Your choice of healthcare professionals.",
      "v. Any healthcare advice provided by a Provider through the Services is based on the information You provide. If You do not provide complete and accurate information, the healthcare advice You receive may not be accurate or appropriate. Questions and information collected from You through the Services are designed for informational and/or research purposes and to identify potential patterns in symptomologies and treatments.",
      "vi. General information available through the Services about medical conditions, symptomatology, available drugs, treatment options, or other general information such as educational articles and videos, if provided by Parent Guidance, is provided for general educational purposes only. Never disregard, avoid, or delay in obtaining medical advice from a physician or other qualified healthcare professional because of something contained in the Services.",
      "d. Provider Users: THE PLATFORM CANNOT AND IS NOT DESIGNED, INTENDED, OR APPROPRIATE TO REPLACE OR SUBSTANTIVELY IMPACT YOUR PROVIDER-PATIENT RELATIONSHIP WITH PATIENT USERS OR TO ADDRESS SERIOUS, EMERGENT, OR LIFE-THREATENING MEDICAL CONDITIONS AND SHOULD NOT BE USED IN THOSE CIRCUMSTANCES.",
    ],
  },
  {
    heading: "2. Who is eligible to use the Services?",
    paragraphs: [
      'a. You must register to create an account ("User Account") and become a "Registered User" to use the Services. To register, You must create, or work with your provider, or work with a Parent Guidance representative to create a username and provide Your name, Your email address, and other information specified in the registration form ("Registration Data"). You may change or correct information in Your account by contacting Parent Guidance at hello@parentguidance.org. You agree not to register for a User Account on behalf of an individual other than Yourself unless You are legally authorized to bind such person to these Terms. By registering another person, You hereby represent that You are legally authorized to do so.',
      "b. By registering for an account and using the Services, You represent and warrant to Parent Guidance:",
      "i. That You are at least 18 years old and are otherwise legally qualified to enter into and form contracts under applicable law. If the Patient is between the ages of 13 and 18, a parent or legal guardian must affirm agreement to use of the Services by the underage Patient. A specific step in the registration process will collect this information, and Parent Guidance will rely upon the information collected as being truthful and accurate.",
      "ii. Your Registration Data is true, accurate, current, and complete.",
      "iii. You will update Your Registration Data as needed to maintain its accuracy.",
      "iv. You are authorized to create a User Account (either for Yourself or another person).",
      "v. You acknowledge and agree to the terms of the Privacy Policy (www.parentguidance.org/privacy-policy).",
      "vi. You are legally authorized to view information accessible through the Services.",
      "vii. If You are a Provider User, You are licensed to provide healthcare services through the Services.",
      "viii. If You are a Patient User, You are physically located in the State you choose/have chosen as your current location. You acknowledge that your ability to access and use the Services is conditioned upon the truthfulness of this certification and that the Providers you access are relying upon this certification in order to interact with you. In the event that your certification is inaccurate, you agree to indemnify Us and the Providers you interact with from any resulting damages, costs or claims as set forth in the Indemnification Section below.",
      "c. THIS AGREEMENT IS VOID WHERE PROHIBITED BY LAW. DO NOT USE THE SERVICES WHERE PROHIBITED BY LAW. YOU UNDERSTAND THAT YOUR USE OF THE SERVICES MAY INVOLVE OR REQUIRE THE TRANSMISSION OF SIGNIFICANT AMOUNTS OF DATA. YOU ARE RESPONSIBLE FOR ALL DATA CHARGES THAT MAY BE CHARGED BY YOUR WIRELESS CARRIER OR INTERNET SERVICE PROVIDER OR THAT MAY OTHERWISE ARISE FROM YOUR USE OF THE SERVICES.",
      "d. Provider Users: THE SERVICES ARE NOT INTENDED FOR EMERGENCY SITUATIONS. IN THE CASE OF AN EMERGENCY WITH ONE OF YOUR PATIENTS, YOU SHOULD CALL 911 OR DIRECT YOUR PATIENT TO CALL 911.",
    ],
  },
  {
    heading: "3. Who owns the Services?",
    paragraphs: [
      "a. Parent Guidance owns the Services, including all content and functionality You access through the Online Education Platform. Subject to Your compliance with these Terms, Parent Guidance grants You a non-exclusive, non-sublicensable, revocable, non-transferable license to use the Services by accessing the Online Education Platform via user's computer and mobile device.",
      "b. You may not use Parent Guidance's name, trademarks, service marks, or logos, or those of third parties appearing on or affiliated with the Services in any advertising or publicity or to otherwise indicate Parent Guidance's or such third party's sponsorship or affiliation with any product or service without express written permission from Parent Guidance or such third party.",
      'c. You own Your Personal Data (as defined in the Privacy Policy) (www.parentguidance.org/privacy-policy) and any other content You submit on or through the Services (collectively, "Content"). If You are entering someone else\'s information into the Online Education Platform, You represent and warrant that You have permission to do so. As a condition of providing You the Services, You grant to Parent Guidance a perpetual, non-exclusive, fully paid and royalty-free, transferable, sublicensable, worldwide license to use Your Content for the purpose of providing the Services, subject to the restrictions in the Privacy Policy. You also agree to allow Us to de-identify and anonymize Your Content, in accordance with Our Privacy Policy, and to use or disclose such de-identified information for any legal purpose.',
    ],
  },
  {
    heading: "4. What are you prohibited from doing?",
    paragraphs: [
      "a. You may use the Services only for lawful purposes and in accordance with these Terms. In addition, Parent Guidance imposes certain restrictions on Your use of the Services, which are highlighted below.",
      "b. While using the Services, You shall not:",
      "i. Provide false, misleading or inaccurate information to Us or any other user, including as to the age or legal status of the Patient.",
      "ii. Use the Services for any commercial purpose or the benefit of any third party or in any manner not permitted by these Terms.",
      "iii. Impersonate or attempt to impersonate Us, one of Our employees, another user, or any other person or entity (including, without limitation, by using e-mail addresses or screen names associated with any of the foregoing).",
      "iv. Use the Services in any manner that could disable, overburden, damage, or impair the Services or interfere with any other party's use of the Services, including their ability to use the Services.",
      "v. Access content or data not intended for You, or log onto a server or account that You are not authorized to access.",
      "vi. Violate any applicable federal, state, local or international law or regulation (including, without limitation, any laws regarding the export of data or software to and from the US or other countries).",
      "vii. Attempt to probe, scan, or test the vulnerability of the Online Education Platform or any associated system or network, or breach security or authentication measures without proper authorization.",
      'viii. Interfere or attempt to interfere with the use or functionality of the Online Education Platform by any other user, host or network, including, without limitation by means of submitting a virus, trojan horse, worm, logic bomb or other material which is malicious or technologically harmful, overloading, "flooding," "spamming," "mail bombing," or "crashing."',
      "ix. Forge any TCP/IP packet header or any part of the header information in any e-mail or in any uploading or posting to, or transmission, display, performance or distribution by means of, the Online Education Platform.",
      'x. Post or transmit any unsolicited advertising, promotional materials, "junk mail", "spam," "chain letters," "pyramid schemes," or any other form of solicitation.',
      "xi. Post, upload, publish, submit or transmit any content that: (A) infringes, misappropriates or violates a third party's patent, copyright, trademark, trade secret, moral rights or other intellectual property rights, or rights of publicity or privacy; (B) violates, or encourages any conduct that would violate, any applicable law or regulation or would give rise to civil liability; (C) is fraudulent, false, misleading or deceptive; (D) is defamatory, obscene, pornographic, vulgar or offensive; (E) promotes discrimination, bigotry, racism, hatred, harassment or harm against any individual or group; (F) is violent or threatening or promotes violence or actions that are threatening to any person or entity; or (G) promotes illegal or harmful activities or substances.",
      "xii. Avoid, bypass, remove, deactivate, impair, descramble or otherwise circumvent any technological measure implemented by Us, You, or any other third-party (including another user) to protect the Online Education Platform.",
      "xiii. Attempt to modify, reverse-engineer, decompile, disassemble or otherwise reduce or attempt to reduce to a human-perceivable form any of the source code used by Us in providing the Services. Any violation of this section may subject You to civil and/or criminal liability.",
      "xiv. Engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Services, or which, as determined by Us, may harm Us or users of the Services or expose them to liability, or otherwise interfere with or attempt to interfere with the proper working of the Online Education Platform.",
      "xv. Encourage or enable any other individual to do any of the above.",
      "c. Parent Guidance is not obligated to monitor Your use of the Services, but Parent Guidance may do so to ensure Your compliance with these Terms, and to respond to law enforcement or other government agencies if and when We are required to. Parent Guidance reserves the right to suspend or terminate Your use of the Services without notice to You if You partake in any of the prohibited uses described above.",
    ],
  },
  {
    heading: "5. How should you protect your login information?",
    paragraphs: [
      'a. The Online Education Platform is designed to require users to create a username and password to access and use the Services. Your username and password are, collectively, Your "User Credentials." You are solely responsible for (i) maintaining the strict confidentiality of Your User Credentials, (ii) not allowing another person to use Your User Credentials to access the Services, (iii) any and all damages or losses that may be incurred or suffered as a result of any activities that occur under Your User Credentials, regardless of whether You were aware of those activities. You agree to immediately notify Us in writing by email of any unauthorized use of Your User Credentials or any other compromise of the security of Your User Account.',
      "b. PARENT GUIDANCE WILL NOT BE LIABLE FOR ANY LOSS THAT YOU INCUR AS A RESULT OF SOMEONE ELSE USING YOUR PASSWORD, EITHER WITH OR WITHOUT YOUR KNOWLEDGE. PARENT GUIDANCE IS NOT AND SHALL NOT BE LIABLE FOR ANY HARM ARISING FROM OR RELATING TO THE THEFT OF YOUR USER CREDENTIALS AND/OR ANY RESULTING ACCESS TO YOUR PERSONAL DATA, YOUR DISCLOSURE OF YOUR USER CREDENTIALS, OR THE USE OF YOUR USER CREDENTIALS BY ANOTHER PERSON OR ENTITY REGARDLESS OF WHETHER YOU WERE AWARE OF SUCH USE.",
      'c. You may be held liable for any losses incurred by Parent Guidance and/or its affiliates, officers, directors, and representatives ("Company Representatives") due to someone else\'s use of Your account or password, regardless of whether You were aware of such use.',
    ],
  },
  {
    heading: "6. How do we protect your privacy?",
    paragraphs: [
      'a. We respect Your Privacy and take Our commitment to protect Your Privacy seriously. This commitment is reflected in the way We protect the information You provide to Us. Please see Our Privacy Policy for an explanation of the information that We collect from You and how We use Your information. By clicking "I Agree", accessing or using the Services, or by downloading, viewing, or uploading any of Our content through the Services, You acknowledge and agree to the provisions of the Privacy Policy (www.parentguidance.org/privacy-policy) and affirm that the Privacy Policy is a part of these Terms.',
      "b. Provider Users: By using the Services and accepting these Terms, You acknowledge that We may share Your Personal Data with third parties, as described in the Privacy Policy, and will seek Your consent or other authorization before doing so where required by law.",
      "c. Patient Users:",
      "i. By using the Services and accepting these Terms, You acknowledge that We may share Your Personal Data with other users, including your Provider, as described in the Privacy Policy, and will seek Your consent or other authorization before doing so where required by law. You expressly acknowledge and agree that We are neither responsible for nor liable to You or any third party for the treatment of Your Personal Data by any such individual or entity, including any collection, use, disclosure, storage, loss, theft, or misuse of Your Personal Data, whether or not such treatment violates applicable law or the third party's privacy practices.",
      "ii. Please be aware that Our Privacy Policy (www.parentguidance.org/privacy-policy) does not address how healthcare providers with whom You share information collected, generated, or stored via the Services may further use and disclose Your health information. Your healthcare provider's Notice of Privacy Practices should be publicly available and is usually located on their website. Our Privacy Policy does not apply to the collection, use, disclosure, or treatment of Your Personal Data directly by any provider, clinician, researcher, caregiver, or other healthcare professional and/or entity other than through the Services. You expressly acknowledge and agree that We are neither responsible for nor liable to You or any third party for the treatment of Your Personal Data by any such individual or entity, including any collection, use, disclosure, storage, loss, theft, or misuse of Your Personal Data, whether or not such treatment violates applicable law or the healthcare provider's Notice of Privacy Practices.",
      "iii. Because Parent Guidance cares about the safety and privacy of children online, we comply with the Children's Online Privacy Protection Act of 1998 (COPPA). COPPA and its accompanying FTC regulation establish United States federal law that protects the privacy of children using the Internet. We do not knowingly contact or collect personal information from children under 13. Our site is not intended to solicit information of any kind from children under 13. It is possible that by fraud or deception we may receive information pertaining to children under 13. If we are notified of this, as soon as we verify the information, we will immediately obtain parental consent or otherwise delete the information from our servers. If you want to notify us of our receipt of information by children under 13, please contact us.",
      "d. Computer Equipment and Internet Access",
      'i. You are responsible for obtaining, installing, maintaining and operating all software, hardware, or other equipment (collectively, "Systems") necessary for You to access and use the Services. This includes, without limitation, obtaining internet services, using up to date web-browsers and the best commercially available encryption, antivirus, anti-spyware, and internet security software. You are responsible for the data security of the Systems used to access the Services and for the transmission and receipt of information using such Systems. We are not responsible for any errors or problems that arise from the malfunction or failure of the Internet or Your Systems.',
      "ii. THERE ARE ALWAYS CERTAIN SECURITY AND ACCESS AVAILABILITY RISKS ASSOCIATED WITH USING OPEN NETWORKS SUCH AS THE INTERNET, AND YOU EXPRESSLY ASSUME SUCH RISKS.",
      "e. Calls, Texts, and Electronic Communication",
      "i. By creating an Account, you also consent to receive electronic communications from Parent Guidance, as the case may be (e.g., via email or by posting notices to the Services). These communications may include notices about your Account (e.g., payment authorizations, password changes and other transactional information) and are part of your relationship with us. You agree that any notices, agreements, disclosures or other communications that we send to you electronically will satisfy any legal communication requirements, including, but not limited to, that such communications be in writing. You should maintain copies of electronic communications from us by printing a paper copy or saving an electronic copy. We may also send you promotional communications via email, including, but not limited to, newsletters, special offers, surveys and other news and information we think will be of interest to you. You may opt out of receiving these promotional emails at any time by following the unsubscribe instructions provided therein.",
      "ii. By providing your mobile phone number to us through the Services, you consent to receive calls or text messages at any such phone number sent by or on behalf of Parent Guidance, including autodialed calls and/or text messages, for marketing, promotional, operational or informational purposes. You may opt out of marketing and promotional calls or messages by following the applicable unsubscribe instructions provided to you. Following such opt-out, you may continue to receive calls or messages for a short period of time while Parent Guidance processes your request. It is your responsibility to keep your account information, including your phone number, updated. Standard message and data rates applied by your mobile phone carrier may apply to the text messages we send you. Please contact your mobile phone carrier for details.",
      "f. Third-Party Websites",
      'i. In the course of using the Services, You may be introduced to areas or features of the Services that allow You to access websites that do not belong to and are not controlled by Us (collectively, "Third-Party Sites"). If You choose to access one of these Third-Party Sites, You will leave the Online Education Platform and be redirected to an environment owned and controlled by an external third party. You acknowledge and agree that the Third-Party Sites may have different privacy policies, terms of use, user guides and/or business practices (collectively, "Third-Party Rules") than Us, and that Your use of such Third-Party Sites is governed exclusively by the respective Third-Party Rules. We provide links to Third-Party Sites to You as a convenience, and We do not verify, make any representations, or take responsibility for such Third-Party Sites, including, without limitation, the truthfulness, accuracy, quality, or completeness of the content, application, links displayed, and/or any other activities conducted on or through such Third-Party Sites.',
      'ii. YOU AGREE THAT WE WILL NOT, UNDER ANY CIRCUMSTANCES, BE RESPONSIBLE OR LIABLE, DIRECTLY OR INDIRECTLY, FOR ANY GOODS, SERVICES, BUSINESS PRACTICES, INFORMATION, RESOURCES, APPLICATIONS, AND OTHER CONTENT ("THIRD PARTY MATTERS") AVAILABLE ON OR THROUGH ANY THIRD-PARTY SITES OR THIRD-PARTY DEALINGS OR COMMUNICATIONS, OR FOR ANY HARM RELATED THERETO, OR FOR ANY DAMAGES OR LOSS CAUSED OR ALLEGED TO BE CAUSED BY OR IN CONNECTION WITH YOUR USE OR RELIANCE ON THE THIRD PARTY MATTERS. Any reference in the Services to any product, service, publication, institution, organization of any third-party entity, or individual does not constitute or imply Our endorsement or recommendation.',
      "g. Third-Party Services",
      'i. Certain features, aspects, products and services offered through the Services are provided, in whole or in part, by third parties ("Third-Party Services" as provided by "Third-Party Service Providers"). For example, if your provider opts to use our optional billing assistance feature, we use Third-Party Services to provide the provider with monthly submission of billing for reimbursement Parent Guidance services.',
      "ii. If use of Third-Party Services may be subject to additional terms and conditions, You will receive a notification and have the opportunity to accept such terms and conditions. IF YOU DO NOT UNDERSTAND OR DO NOT AGREE TO BE BOUND BY THOSE ADDITIONAL TERMS AND CONDITIONS, DO NOT USE THE RELATED THIRD-PARTY SERVICES.",
      "iii. In the event of any inconsistency between terms of use relating to Third-Party Services and these Terms, those additional terms and conditions will control with respect to such Third-Party Services. Third-Party Service Providers may collect and use certain information about You, as specified in the Third-Party Service Providers' privacy policies. Prior to providing information to any Third-Party Service Provider, You should review their privacy policy. IF YOU DO NOT UNDERSTAND OR DO NOT AGREE TO THE TERMS OF A THIRD-PARTY SERVICE PROVIDER'S PRIVACY POLICY OR TERMS OF USE, YOU SHOULD NOT USE THE RELATED THIRD-PARTY SERVICES. WE WILL NOT, UNDER ANY CIRCUMSTANCES, BE RESPONSIBLE OR LIABLE FOR ANY OF YOUR INFORMATION COLLECTED OR USED BY THIRD-PARTY SERVICE PROVIDERS.",
    ],
  },
  {
    heading: "7. Your representations and warranties",
    paragraphs: [
      "You represent and warrant that Your use of the Services will be in accordance with these Terms and all applicable laws, regulations, rules, and any Parent Guidance policies and procedures We provide to You in writing. SPECIFICALLY, YOU REPRESENT AND WARRANT THAT YOU ARE LEGALLY AUTHORIZED TO SHARE PERSONAL DATA (BELONGING TO YOURSELF OR OTHERS ON WHOSE BEHALF YOU ARE SUBMITTING SUCH PERSONAL DATA) WITH US.",
    ],
  },
  {
    heading: "8. Warranty disclaimers and limitation of liability",
    paragraphs: [
      "a. No warranties",
      'i. THE SERVICES ARE PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. PARENT GUIDANCE EXPLICITLY DISCLAIMS ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, QUIET ENJOYMENT OR NON-INFRINGEMENT, AND ANY WARRANTIES ARISING OUT OF COURSE OF DEALING OR USAGE OF TRADE. PARENT GUIDANCE MAKES NO WARRANTY THAT THE SERVICES OR MATERIALS WILL MEET YOUR REQUIREMENTS OR BE AVAILABLE ON AN UNINTERRUPTED, SECURE, OR ERROR-FREE BASIS. PARENT GUIDANCE MAKES NO WARRANTY REGARDING THE QUALITY OF ANY PRODUCTS, APPLICATIONS, OR MATERIALS ACCESSED OR PURCHASED THROUGH THE SERVICES OR THE ACCURACY, TIMELINESS, TRUTHFULNESS, COMPLETENESS OR RELIABILITY OF THE SERVICES. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED FROM PARENT GUIDANCE OR THROUGH THE APPLICATION OR MATERIALS, WILL CREATE ANY WARRANTY NOT EXPRESSLY MADE HEREIN.',
      "ii. YOU ARE SOLELY RESPONSIBLE FOR ALL OF YOUR COMMUNICATIONS AND INTERACTIONS WITHIN THE PLATFORM AND WITH OTHER PERSONS WITH WHOM YOU COMMUNICATE OR INTERACT AS A RESULT OF YOUR USE OF THE SERVICES, INCLUDING, WITHOUT LIMITATION, IF YOU ARE A PATIENT USER, PROVIDERS, CAREGIVERS, AND OTHER AUTHORIZED THIRD PARTIES, OR IF YOU ARE A PROVIDER USER, PATIENTS AND OTHER AUTHORIZED THIRD PARTIES.",
      "iii. PARENT GUIDANCE CANNOT ALWAYS FORESEE OR ANTICIPATE TECHNICAL OR OTHER DIFFICULTIES THAT MAY RESULT IN FAILURE TO OBTAIN DATA OR LOSS OF DATA, PERSONALIZATION SETTINGS, OR OTHER SERVICE INTERRUPTIONS. PARENT GUIDANCE THEREFORE WILL NOT ASSUME RESPONSIBILITY FOR THE TIMELINESS, ACCURACY, DELETION, NON-DELIVERY OR FAILURE TO STORE ANY USER DATA, COMMUNICATIONS, OR PERSONALIZATION SETTINGS. IT IS YOUR RESPONSIBILITY TO BACKUP ANY INFORMATION YOU ENTER INTO THE PLATFORM.",
      "b. Your responsibility for loss or damage",
      "YOU AGREE THAT YOUR USE OF THE SERVICES IS AT YOUR SOLE RISK. YOU WILL NOT HOLD PARENT GUIDANCE, OR ITS THIRD-PARTY SERVICE PROVIDERS, LICENSORS OR SUPPLIERS, AS APPLICABLE, RESPONSIBLE FOR ANY LOSS OR DAMAGE THAT RESULTS FROM YOUR ACCESS TO OR USE OF THE SERVICES, INCLUDING WITHOUT LIMITATION ANY LOSS OR DAMAGE TO ANY OF YOUR COMPUTERS, MOBILE DEVICES, OR DATA.",
      "c. Limitation of liability",
      "i. YOU ACKNOWLEDGE AND AGREE THAT, TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE ENTIRE RISK ARISING OUT OF YOUR ACCESS TO AND USE OF THE SERVICES REMAINS WITH YOU. NEITHER PARENT GUIDANCE, NOR ANY OTHER COMPANY REPRESENTATIVE INVOLVED IN CREATING, PRODUCING, MAINTAINING, OR DELIVERING THE SERVICES WILL BE LIABLE FOR ANY INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES, INCLUDING LOST PROFITS, LOSS OF DATA, LOSS OF GOODWILL, SERVICE INTERRUPTION, COMPUTER DAMAGE OR SYSTEM FAILURE, OR THE COST OF SUBSTITUTE PRODUCTS OR APPLICATIONS, OR FOR ANY DAMAGES FOR PERSONAL OR BODILY INJURY OR EMOTIONAL DISTRESS ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR FROM THE USE OF OR INABILITY TO USE THE SERVICES, OR FROM ANY COMMUNICATIONS, INTERACTIONS, OR MEETINGS WITH OTHER USERS OF THE SERVICES OR OTHER PERSONS WITH WHOM YOU COMMUNICATE OR INTERACT AS A RESULT OF YOUR USE OF THE SERVICES, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE AND MEDICAL MALPRACTICE), PRODUCT LIABILITY, OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT PARENT GUIDANCE HAS BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE, EVEN IF A LIMITED REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED IN MEETING ITS ESSENTIAL PURPOSE.",
      "ii. IF YOU ARE DISSATISFIED WITH THE SERVICES OR THESE TERMS, YOUR ONLY REMEDY IS TO DISCONTINUE USING THE SERVICES. YOU ACKNOWLEDGE AND AGREE THAT YOU HAVE RECEIVED SUFFICIENT CONSIDERATION FOR THIS LIMITATION OF REMEDIES.",
      "iii. YOU ACKNOWLEDGE THAT IF YOU USE THE SERVICES DURING OR IN RELATION TO AN EMERGENT, SERIOUS, OR LIFE-THREATENING CONDITION, SUCH USE IS AT YOUR SOLE RISK. PARENT GUIDANCE IS NOT LIABLE TO YOU OR ANY PERSON FOR ANY DECISION MADE OR ACTION TAKEN IN RELIANCE UPON INFORMATION OR GUIDANCE AVAILABLE THROUGH THE SERVICES. IF YOU ARE A PROVIDER USER, PARENT GUIDANCE IS NOT LIABLE TO ANY USER OR PERSON FOR ANY HARM CAUSED BY YOUR NEGLIGENCE OR MISCONDUCT, WHETHER OR NOT RELYING UPON INFORMATION COLLECTED, GENERATED, OR STORED VIA THE SERVICES.",
      "iv. BECAUSE SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, SOME OF THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU. IN SUCH STATES, PARENT GUIDANCE'S LIABILITY IS LIMITED AND WARRANTIES ARE EXCLUDED TO THE GREATEST EXTENT PERMITTED BY LAW, BUT SHALL, IN NO EVENT, EXCEED THE LESSER OF $5,000.00 or TWELVE (12) MONTHS OF FEES PAID TO PARENT GUIDANCE. ANY CLAIM ARISING FROM THE USAGE OF THE SERVICES MUST BE BROUGHT WITHIN ONE (1) YEAR OF THE OCCURRENCE OF THE EVENT FROM WHICH THE CLAIM AROSE.",
    ],
  },
  {
    heading: "9. Indemnification",
    paragraphs: [
      'YOU AGREE TO INDEMNIFY, DEFEND AND HOLD HARMLESS PARENT GUIDANCE IN PROPER CIRCUMSTANCES, AND THEIR RESPECTIVE COMPANY REPRESENTATIVES FROM ANY LIABILITY, LOSS, CLAIM, SUIT, DAMAGE, AND EXPENSE (INCLUDING REASONABLE ATTORNEYS\' FEES AND EXPENSES AND COURT COSTS) ARISING OUT OF OR IN ANY WAY CONNECTED WITH YOUR ACCESS TO OR USE OF THE SERVICES, YOUR VIOLATION OF THIS AGREEMENT, OR ANY NEGLIGENT OR WRONGFUL CONDUCT BY YOU OR RELATED TO YOUR ACCOUNT BY YOU OR ANY OTHER PERSON ACCESSING THE SERVICES THROUGH YOUR ACCOUNT, REGARDLESS OF WHETHER YOU WERE AWARE OF SUCH USE. IF YOU ARE A CALIFORNIA RESIDENT, YOU WAIVE CALIFORNIA CIVIL CODE SECTION 1542, WHICH STATES: "A GENERAL RELEASE DOES NOT EXTEND TO CLAIMS THAT THE CREDITOR OR RELEASING PARTY DOES NOT KNOW OR SUSPECT TO EXIST IN HIS OR HER FAVOR AT THE TIME OF EXECUTING THE RELEASE AND THAT, IF KNOWN BY HIM OR HER, WOULD HAVE MATERIALLY AFFECTED HIS OR HER SETTLEMENT WITH THE DEBTOR OR RELEASED PARTY."',
    ],
  },
  {
    heading: "10. Feedback and who owns it",
    paragraphs: [
      'Parent Guidance welcomes and encourages You to provide feedback, comments, and suggestions for improvements to the Services ("Feedback"). You may submit Feedback by emailing Us at hello@parentguidance.org. You acknowledge and agree that if You submit any Feedback to Us, You hereby grant to Us a non-exclusive, worldwide, perpetual, irrevocable, fully-paid, royalty-free, sub-licensable, and transferable license under any and all intellectual property rights that You own or control to use, copy, modify, create derivative works based upon, and otherwise exploit the Feedback for any purpose.',
    ],
  },
  {
    heading: "11. Termination of your account",
    paragraphs: [
      "a. If You breach any of these Terms, We may suspend or disable Your account or terminate Your access to the Services without prior notice to You. There may be other instances where We may need to terminate Your access to the Services that are not related to any of Your actions or inactions. We reserve the right to terminate Your access to and use of the Services at any time, with or without cause.",
      "b. If You wish to terminate Your account, please contact Parent Guidance at hello@parentguidance.org, immediately discontinue Your use of the Services, and delete all files associated with the Services from Your computer or mobile device.",
    ],
  },
  {
    heading: "12. Dispute resolution",
    paragraphs: [
      "PLEASE READ THIS SECTION CAREFULLY AS IT AFFECTS YOUR RIGHTS.",
      "a. Most user concerns can be resolved quickly and to Your satisfaction by emailing support at hello@parentguidance.org. In the unlikely event that Our support team is unable to resolve a complaint You may have (or if We have not been able to resolve a dispute with You after attempting to do so informally), including but not limited to any alleged breach of these Terms, You and agree to resolve the dispute through binding arbitration in Salt Lake County, Utah before a single arbitrator, in accordance with the rules and procedures of JAMS and the laws of Utah without reference to its conflict of law provisions. Arbitration, which is often less expensive, faster, and less formal than a lawsuit in court, uses a neutral arbitrator instead of a judge or jury. Arbitrators can award the same damages and relief that a court can award, and may, but do not have to, award legal fees, arbitrator's fees and costs and other costs incurred by the party that does not win the dispute.",
      'b. Any arbitration under these Terms will take place on an individual basis; class arbitrations and class actions are not permitted. Any arbitration will be strictly confidential and neither party will disclose to any person (other than necessary to carry out the arbitration) the existence of the dispute or any aspect of the dispute. This agreement to arbitrate will not preclude You or Parent Guidance from seeking provisional remedies in aid of arbitration, including without limitation orders to stay a court action, compel arbitration or confirm an arbitral award, from a court of competent jurisdiction. Furthermore, this agreement to arbitrate will not preclude You or Parent Guidance from applying to a court of competent jurisdiction for a temporary restraining order, preliminary injunction, or other interim relief, as necessary. THE PROPER VENUE FOR ANY ACTION PERMITTED UNDER THIS SUBSECTION REGARDING "EQUITABLE RELIEF" WILL BE THE FEDERAL AND STATE COURTS LOCATED IN SALT LAKE COUNTY, UTAH; THE PARTIES HEREBY IRREVOCABLY WAIVE ANY OBJECTION TO THE VENUE AND PERSONAL JURISDICTION OF SUCH COURTS, OR DEFENSES TO JURISDICTION BASED ON ARGUMENTS OF INCONVENIENT FORUM.',
      "d. Exceptions to Agreement to Arbitrate: Parent Guidance may bring a lawsuit solely for injunctive relief to stop unauthorized use or abuse of the Online Education Platform or infringement of intellectual property rights (for example, trademark, trade secret, copyright, or patent rights) without first engaging in the informal dispute-resolution process described above.",
      "e. YOU MAY ONLY RESOLVE DISPUTES WITH PARENT GUIDANCE ON AN INDIVIDUAL BASIS, AND MAY NOT BRING A CLAIM AS A PLAINTIFF OR A CLASS MEMBER IN A CLASS, CONSOLIDATED, OR REPRESENTATIVE ACTION. CLASS ARBITRATIONS, CLASS ACTIONS, PRIVATE ATTORNEY GENERAL ACTIONS, AND CONSOLIDATION WITH OTHER ARBITRATIONS ARE NOT ALLOWED UNDER THESE TERMS OF USE.",
      'f. Notwithstanding the above, You can decline or "opt out" of the alternative dispute resolution process described above by contacting hello@parentguidance.org within 30 days of first accepting these Terms and stating that You (first and last name) decline this dispute resolution process.',
      "g. YOU UNDERSTAND AND AGREE THAT, BY NOT OPTING-OUT OF THE ALTERNATIVE DISPUTE RESOLUTION PROCESS DESCRIBED, YOU WAIVE ANY RIGHT TO JURY TRIAL TO WHICH YOU MAY OTHERWISE BE ENTITLED IN CONNECTION WITH ANY ACTION OR LITIGATION IN ANY WAY ARISING OUT OF OR RELATED TO THESE TERMS OF USE.",
      "h. If You opt-out of the dispute resolution process described in this section, or if any matter is otherwise determined not to be subject to such dispute resolution process, You hereby submit to the exclusive jurisdiction of any state or federal court sitting in Salt Lake County, Utah in any legal proceeding arising out of or relating to these Terms. You agree that any and all claims and matters arising out of these Terms, unless subject to the dispute resolution process described above, may be heard and determined in any such court, and You hereby waive any right to object to such filing on grounds of improper venue, forum non-conveniens, or other venue-related grounds, unless such objection asserts that the claim or matter in dispute is subject to determination through the dispute resolution process described above.",
    ],
  },
  {
    heading: "13. General contract terms",
    paragraphs: [
      "These Terms, the Privacy Policy, any other agreements executed between You and Parent Guidance and any other terms incorporated herein by reference, constitute the entire and exclusive understanding and agreement between Parent Guidance and You regarding the use of the Services, and these Terms supersede and replace any and all prior oral or written understandings or agreements between Parent Guidance and You regarding use of the Services. Regardless of whether the laws of Utah or a particular jurisdiction may allow an individual between the ages of 13 and 18 to make a legally binding agreement, Parent Guidance will not enter into such an agreement without the express permission of the Patient's parent or legal guardian, and only in the event that the information referred to hereinabove regarding the Patient's age and status has been truthfully provided.",
    ],
  },
  {
    heading: "14. Governing law",
    paragraphs: [
      "These Terms shall be governed by the laws of Utah without reference to its conflict of laws provisions.",
    ],
  },
  {
    heading: "15. Assignment",
    paragraphs: [
      "You may not assign or transfer these Terms, by operation of law or otherwise, without Parent Guidance's prior written consent. Any attempt by You to assign or transfer these Terms, without such consent, will be null and of no effect. Parent Guidance may assign or transfer these Terms, at its sole discretion, without restriction. Subject to the foregoing, these Terms will bind and inure to the benefit of the parties, their successors, and permitted assigns.",
    ],
  },
  {
    heading: "16. Notices",
    paragraphs: [
      "a. Any notices or other communications permitted or required hereunder, including those regarding modifications to these Terms, will be in writing and given: (i) by Parent Guidance via email (in each case to the address that You provide); and/or (ii) by posting to the Online Education Platform. For notices made by email, the notice will be effective as of the date the notice is first transmitted. You agree that any notice received from Parent Guidance electronically satisfies any legal requirement that such notice be in writing. YOU ALONE ARE RESPONSIBLE FOR ENSURING THAT YOUR EMAIL ADDRESS ON FILE WITH PARENT GUIDANCE IS ACCURATE AND CURRENT, AND NOTICE TO YOU SHALL BE DEEMED EFFECTIVE UPON THE SENDING BY PARENT GUIDANCE OF AN EMAIL TO THE ADDRESS WE HAVE ON FILE.",
      "b. You shall give any notice to Parent Guidance by email to hello@parentguidance.org. Notice to Parent Guidance shall be effective upon receipt of notice by Parent Guidance.",
    ],
  },
  {
    heading: "17. No inadvertent waiver",
    paragraphs: [
      "The failure of Parent Guidance to enforce any right or provision of these Terms will not constitute a waiver of future enforcement of that right or provision. The waiver of any such right or provision will be effective only if in writing and signed by a duly authorized representative of Parent Guidance. Except as expressly set forth in these Terms, the exercise by either party of any of its remedies under these Terms will be without prejudice to its other remedies under these Terms or otherwise. If, for any reason, a court of competent jurisdiction finds any provision of these Terms invalid or unenforceable, that provision will be enforced to the maximum extent permissible and the other provisions of these Terms will remain in full force and effect.",
    ],
  },
  {
    heading: "18. Severability",
    paragraphs: [
      "If any provision of these Terms is determined to be invalid, illegal or unenforceable, the remaining provisions of these Terms remain in full force, provided that the essential terms and conditions remain valid, binding and enforceable and the economic and legal substance of the transactions contemplated by these Terms are materially preserved.",
    ],
  },
  {
    heading: "19. Intellectual property rights",
    paragraphs: [
      '"Intellectual Property Rights" means all intellectual property rights or similar proprietary rights, including (i) patent rights and utility models, (ii) copyrights and database rights, (iii) trademarks, trade names, domain names and trade dress and the goodwill associated therewith, (iv) trade secrets, (v) mask works, and (vi) industrial design rights; in each case, including any registrations of, applications to register, and renewals and extensions of, any of the foregoing in any jurisdiction in the world.',
      "b. As between You and Parent Guidance, all right, title and interest, including all Intellectual Property Rights, in the Services, any related materials, logos, products, and documentation, and any other property or materials furnished or made available hereunder, and all modifications and enhancements thereof, belong to and are retained solely by Parent Guidance or its licensors, vendors and affiliates, as applicable. All rights not expressly granted are reserved by Parent Guidance. Any use of the Services not expressly permitted by these Terms is a breach of these Terms and may violate copyright, trademark and other laws.",
    ],
  },
  {
    heading: "20. Contacting Parent Guidance",
    paragraphs: [
      "a. Please feel free to contact Parent Guidance if You have any questions about the Terms of Use and/or any other documents referenced herein. You may contact Us at hello@parentguidance.org.",
      "b. The data security officer, Eric Red, can be reached at hello@parentguidance.org.",
    ],
  },
];

/* ── Privacy Policy ── */

export const PRIVACY_EFFECTIVE_DATE = "January 9, 2024";

export const PRIVACY_INTRO: string[] = [
  `This Privacy Policy (“Policy”) governs the use of client Personal Data. Please read this Policy carefully regarding the Company's practices and procedures as to such Personal Data.`,
  `Cook Center for Human Connection, d/b/a Parent Guidance (hereinafter, “Parent Guidance”) (referred to as “the Company”, “We”, “Us”) values client privacy. The Company is likewise committed to keeping client personal data confidential. Such data is used solely for purposes of providing clients services through access to Parent Guidance's web portals (collectively referred to as the “Online Education Platform”). The data allows Parent Guidance to provide content and functionality (the “Services”) to qualified medical providers (“Provider Users”) and patients (“Patient Users”). All persons utilizing the Services are classified as either Provider Users or Patient Users. Users are sometimes referred to by “You” or “Your” in this Policy.`,
  `This Policy applies to Personal Data that the Company collects from users of the Online Education Platform and the Services. “Personal Data” consists of all information which, independently or in connection with other information, could be used to identify a user. This Policy seeks to provide transparency about how Personal Data is used. For that reason, this Policy gives users detailed explanations about the Company's collection, use, maintenance, and disclosure of Personal Data. This includes how Personal Data is collected, used and protected, and user's rights regarding Personal Data.`,
];

export const PRIVACY_SECTIONS: LegalSection[] = [
  {
    heading: "1. Specific items for Patient Users",
    paragraphs: [
      'a. Some Personal Data collected may be "HEALTH DATA" (data regarding Your physical or mental health), "PROTECTED HEALTH INFORMATION" or "PHI" (data regarding Your past, present, or future physical or mental health or condition(s); Your medical treatment; Your past, present, or future payment for medical treatment), and/or MEDICAL RECORDS as defined by federal and/or state law. For this reason, this Policy is intended to comply with the federal Health Insurance Portability And Accountability Act of 1996 ("HIPAA“) and affected state law(s) regarding the use and disclosure of PHI and related subject matter. If there are additional concerns about this, please contact the Company\'s privacy officer, Eric Red, at hello@parentguidance.org.',
      "b. Because Parent Guidance cares about the safety and privacy of children online, we comply with the Children's Online Privacy Protection Act of 1998 (COPPA). COPPA and its accompanying FTC regulation establish United States federal law that protects the privacy of children using the Internet. We do not knowingly contact or collect personal information from children under 13. Our site is not intended to solicit information of any kind from children under 13. It is possible that by fraud or deception we may receive information pertaining to children under 13. If we are notified of this, as soon as we verify the information, we will immediately obtain parental consent or otherwise delete the information from our servers. If you want to notify us of our receipt of information by children under 13, please contact us.",
      "To further protect Users between the ages of 13 and 18, a parent or legal guardian must affirm agreement to use of the Services by the underage Patient. A specific step in the registration process as referred to in the accompanying Terms of Use will collect this information, and Parent Guidance will rely upon the information collected as being truthful and accurate.",
      "c. BY SUBMITTING YOUR PERSONAL DATA THROUGH THE PLATFORM, YOU ARE ACKNOWLEDGING THAT YOU HAVE READ AND AGREE TO THE TERMS OF THIS POLICY. IF YOU DO NOT AGREE, PLEASE DO NOT SUBMIT ANY PERSONAL DATA TO US AND IMMEDIATELY CEASE USE OF THE SERVICES.",
      "d. This Policy is updated periodically and the version displayed on the Portal will always be the most current version. We will post a notice on the Portal that the Policy has been updated, and/or email You a link to the updated version using an email address You have provided to Us. It is Your responsibility to familiarize yourself with amendments. Changes to this Policy will be effective immediately upon providing notice, and apply to all personal data We maintain, use, and disclose. If you continue to use the Services following such notice, You are agreeing to those changes.",
      'e. If at any point You no longer agree to the use and disclosure of Personal Data, as described in this Policy, You can delete Your account by requesting deletion. To do so, email hello@parentguidance.org with the subject line "REQUEST FOR PERSONAL DATA DELETION" and request that Your account be deleted.',
    ],
  },
  {
    heading: "2. Who is responsible for your data?",
    paragraphs: [
      "The Company controls Your Personal Data and may process the data consistent with this Policy. In any instance in which the Company processes Personal Data on behalf of a third party that is not an agent or affiliate of Company, that is controlled by the third party's privacy policy, and this Policy will not apply. Questions about this should be directed to hello@parentguidance.org.",
      "The Online Education Platform may contain links to websites or services owned or operated by third parties (each, a \"Third-Party Service\"). Any information that You provide in connection with a Third-Party Service is provided directly to the owner or operator of the Third-Party Service, subject to the owner's or operator's privacy policy. The Company is not responsible for the content, privacy or security practices and policies of any Third-Party Service. To protect Your information, We recommend that You carefully review the privacy policies of all Third-party Services that You access.",
    ],
  },
  {
    heading: "3. What Personal Data do we collect?",
    paragraphs: [
      'a. Demographic Data. We may collect demographic information, such as Your name, birth year, gender, height, weight, phone number, and email address, and if you are a Provider User, Your National Provider Identifier ("NPI"). Primarily, the collection of Your Personal Data assists Us in creating Your User Account, which You can use to securely to receive the Services.',
      "b. Payment Data. If You make payments via the Online Education Platform, We may require that You provide Your financial and billing information, such as billing name and address, credit card number or bank account information.",
      "c. Data Required for Support. If You contact Us for support or to submit a complaint, We may collect technical or other information from You through log files and other technologies, some of which may qualify as Personal Data (for example, Your internet IP address). This information will be used for the purposes of troubleshooting, customer support, software updates, and improvement of the Online Education Platform and related Services in accordance with this Policy.",
      "d. Device and ISP Data. We use information-gathering tools, such as log files, cookies, Web beacons, and similar technologies to automatically collect information, which may contain Personal Data, from Your computer or mobile device as You use the Online Education Platform or interact with emails We have sent You. The information We collect may include Your IP address (or proxy server), device and application identification numbers, location, browser type, Internet service provider and/or mobile carrier, the pages and files You viewed, Your searches, Your operating system and system configuration information, and date/time stamps associated with Your usage. This information is used to analyze overall trends, to help Us provide and improve Our Services and to guarantee their security and continued proper functioning.",
      "e. Health Data (for Patient Users). In addition to demographic information, We may collect information regarding Your health conditions, including medical history, symptoms, and communications between You and the healthcare provider providing healthcare services to You via the Online Education Platform. We collect this information to provide You with the Services and to provide Your healthcare provider providing healthcare services through the Online Education Platform with the information required to provide medical treatment.",
    ],
  },
  {
    heading: "4. How will we use your Personal Data?",
    paragraphs: [
      "We use Your Personal Data based on legitimate business interests, the fulfillment of Our Services to You, compliance with Our legal obligations, and/or Your consent. We only use or disclose Your Personal Data when it is legally mandated or where it is necessary to fulfill those purposes described herein. Where required by law, We will ask for Your prior consent before doing so.",
      "a. The legitimate business purposes for which the Personal Data is used are:",
      "i. To fulfill Our obligations to You under Our Terms of Use [www.parentguidance.org/terms-of-use].",
      "ii. To communicate with You about and manage Your User Account.",
      "iii. To store and track Your data within Our system.",
      "iv. To respond to lawful requests from public/governmental authorities, and/or to comply with applicable state/federal law, including cooperation with judicial proceedings or court orders.",
      "v. To protect Your/Our/third-party's rights, privacy, safety, or property, by providing proper notices, pursuing available legal remedies, or acting to limit Our damages.",
      "vi. To handle technical support and other requests from You.",
      "vii. To ensure compliance with Our Terms of Use or the terms of any other applicable services agreement We have with You.",
      "viii. To manage and improve Our operations and the Online Education Platform, including the development of additional functionality.",
      "ix. To manage payment processing.",
      "x. To evaluate the quality of service You receive, identify usage trends, and thereby improve Your user experience.",
      "xi. To keep Our Online Education Platform safe and secure.",
      "xii. To send You information about changes to Our terms, conditions, and policies.",
      "xiii. To allow Us to pursue available remedies or limit the damages that We may sustain.",
      "xiv. If you are a Patient User, to enable You to connect with (or share Personal Data with) the authorized Provider User to enable that individual to monitor Your progress and overall condition, as such Provider User deems appropriate.",
      "b. Personal Data We collect through the Online Education Platform will be stored on secure servers. Personal Data may be transmitted to third parties, which parties may store or maintain the data on their secure servers.",
      "c. Personal Data may be shared with third parties in certain instances:",
      "i. Personal Data of Patient Users will be shared with Provider User(s) that You have connected with as part of the Services. You can deny access to Provider Users by emailing hello@parentguidance.org.",
      'ii. Personal Data of Patient Users may be shared with service providers and other third parties ("Business Partners") that help Us run various aspects of Our business. These Business Partners are contractually bound to protect Your Personal Data and to use it only for the limited purpose(s) for which it is shared with Us. Business Partners\' use of Personal Data may include, but is not limited to, the provision of services such as data hosting, IT services, customer service, and payment processing.',
      "iii. Personal Data of Patient Users may be shared to (A) comply with legal processes or enforceable governmental requests, or as otherwise required by law; (B) cooperate with third parties in investigating acts or omissions that violate this Policy or the Terms of Use; or (C) bring legal action against someone who may be violating the Terms of Use or who may be causing intentional or unintentional injury or interference to the rights or property of Parent Guidance, including other users of Our Services.",
      "iv. Personal Data of Patient Users may be shared with advisory services providers to the Company, such as lawyers, auditors, accountants, or banks, when We have a legitimate business interest in doing so.",
      "v. Personal Data of Patient Users may be shared third parties in the event of a reorganization, merger, sale, joint venture, assignment, transfer, or other disposition of all or any portion of Parent Guidance's assets or membership interest (including in connection with any bankruptcy or similar proceedings).",
      "d. If We share Your Personal Data with a third party other than as provided above, You will be notified at the time of data collection or transfer, and You will have the option of not permitting the transfer.",
    ],
  },
  {
    heading: "5. How long do we retain Personal Data?",
    paragraphs: [
      "a. We will retain Your Personal Data for as long as You maintain a User Account and up to six years after the account is closed. The exact period of retention will depend on the type of Personal Data, Our contractual obligation to You, and applicable law. We keep Your Personal Data for as long as necessary to fulfill the purpose for which it was collected, unless otherwise required or necessary pursuant to a legitimate business purpose outlined in this Policy. At the end of the applicable retention period, We will remove Your Personal Data from Our databases and will request that Our Business Partners remove Your Personal Data from their databases. If there is any data that We are unable, for technical reasons, to delete entirely from Our systems, We will put in place appropriate measures to prevent any further processing of such data. We retain anonymized data indefinitely.",
      "b. Once We disclose Your Personal Data to third parties, We may not be able to access that Personal Data any longer and cannot force the deletion or modification of any such information by the parties to whom We have made those disclosures. Written requests for deletion of Personal Data other than as described should be directed to hello@parentguidance.org.",
    ],
  },
  {
    heading: "6. Our policy regarding cookies",
    paragraphs: [
      "Cookies are small files that a web server sends to Your computer or device when You visit a web site that uses cookies to keep track of Your activity on that site. Cookies also exist within applications when a browser is needed to view certain content or display certain content within the application. Cookies hold a small amount of data specific to that website, which can later be used to help remember information You enter into the site (like Your email or other contact info), preferences selected, and movement within the site. If You return to a previously visited web site or application (and Your browser has cookies enabled), the web browser sends the small file to the web server, which tells it what activity You engaged in the last time You used the web site or application, and the server can use the cookie to do things like expedite logging in and retrieving user data and keeping Your browser session secure.",
      "a. We use cookies and other technologies to, among other things, better serve You with more tailored information, and to facilitate efficient and secure access to the Online Education Platform. We only use essential cookies, which are cookies necessary for Us to provide the Services. You may disable cookies on a browser as set forth below but doing so may affect the functionality of the Services.",
      "b. We may also collect information using pixel tags, web beacons, clear GIFs, or other similar technologies. These may be used in connection with some web site or application pages and HTML-formatted email messages to, among other things, track the actions of users and email recipients, and compile statistics about usage and response rates.",
      'c. If You prefer, You can usually choose to set Your browser to remove cookies and reject cookies. If You enable a do not track ("DNT") signal or otherwise configure Your browser to prevent Parent Guidance from collecting cookies, You will need to reenter Your user name each time You visit the login page.',
    ],
  },
  {
    heading: "7. How do we protect your Personal Data?",
    paragraphs: [
      "a. Parent Guidance is committed to protecting the security and confidentiality of Your Personal Data. We use a combination of reasonable physical, technical, and administrative security controls to maintain the security and integrity of Your Personal Data, to protect against any anticipated threats or hazards to the security or integrity of such information, and to protect against unauthorized access to or use of such information in Our possession or control that could result in substantial harm or inconvenience to You. However, Internet data transmissions, whether wired or wireless, cannot be guaranteed to be 100% secure. As a result, We cannot ensure the security of information You transmit to Us. By using the Online Education Platform, You are assuming this risk as to all Personal Data.",
      "b. The information collected by Parent Guidance and stored on secure servers, is protected by a combination of technical, administrative, and physical security safeguards, such as authentication, encryption, backups, and access controls. If Parent Guidance learns of a security concern, We may attempt to notify You and provide information on protective steps, if available, through the email address that You have provided to Us. Depending on where You live, You may have a legal right to receive such notices in writing.",
      "c. You are solely responsible for protecting information entered or generated via the Platform that is stored on Your device and/or removable device storage. Parent Guidance has no access to or control over Your device's security settings, and it is up to You to implement any device level security features and protections You feel are appropriate (for example, password protection, encryption, remote wipe capability, two factor authentication, etc.). We recommend that You take any and all appropriate steps to secure any device that You use to access Our Online Education Platform.",
      "d. NOTWITHSTANDING ANY OF THE STEPS TAKEN BY US, IT IS NOT POSSIBLE TO GUARANTEE THE SECURITY OR INTEGRITY OF DATA TRANSMITTED OVER THE INTERNET. THERE IS NO GUARANTEE THAT YOUR PERSONAL DATA WILL NOT BE ACCESSED, DISCLOSED, ALTERED, OR DESTROYED DESPITE THE IMPLEMENTATION OF OUR PHYSICAL, TECHNICAL, OR ADMINISTRATIVE SAFEGUARDS. THEREFORE, WE DO NOT AND CANNOT ENSURE OR WARRANT THE SECURITY OR INTEGRITY OF ANY PERSONAL DATA YOU TRANSMIT TO US AND YOU TRANSMIT SUCH PERSONAL DATA AT YOUR OWN RISK.",
      "e. In instances where You have authorized the Company to use and disclose Your Personal Data for certain purposes, You may withdraw Your consent in the future. You may withdraw Your consent by sending a request in writing to the addresses shown below. Your withdrawal will not be effective until We receive Your request and will not apply to uses and disclosures that We have already made in reliance on Your consent.",
      "i. Cook Center for Human Connection, d/b/a Parent Guidance, 1955 W Grove Pkwy #300, Pleasant Grove, UT 84062, with a copy to hello@parentguidance.org.",
    ],
  },
  {
    heading: "8. How can you protect your Personal Data?",
    paragraphs: [
      "a. In addition to securing Your device, as discussed above, be advised that Parent Guidance will NEVER send You an email requesting confidential information such as account numbers, usernames, passwords, or social security numbers, and You should NEVER respond to any email requesting such information. If You receive such an email that looks like it is from Parent Guidance, DO NOT RESPOND to the email and DO NOT click on any links and/or open any attachments in the email. Notify Parent Guidance support at hello@parentguidance.org.",
      "b. You are responsible for taking reasonable precautions to protect Your user ID, password, and other User Account information from disclosure to third parties, and You are not permitted to circumvent the use of required encryption technologies. You should immediately notify Us at hello@parentguidance.org if You know of or suspect any unauthorized use or disclosure of Your user ID, password, and/or other User Account information, or any other security concern.",
    ],
  },
  {
    heading: "9. Your rights",
    paragraphs: [
      "You have certain rights relating to Your Personal Data, subject to applicable data protection laws. These rights may include:",
      "i. to access Your Personal Data held by Us.",
      "ii. to erasure/deletion of Your Personal Data, to the extent permitted by applicable data protection laws.",
      "iii. to receive communications related to the processing of Your Personal Data that are concise, transparent, intelligible, and easily accessible.",
      "iv. to restrict the processing of Your Personal Data, to the extent permitted by law (while We verify or investigate Your concerns with this information).",
      "v. to object to the further processing of Your Personal Data, including the right to object to marketing party, if possible.",
      "vi. to request that Your Personal Data be transferred to a third party.",
      "vii. to receive Your Personal Data in a structured, commonly used, and machine-readable format.",
      "viii. to lodge a complaint with a supervisory authority.",
      "ix. to rectify inaccurate Personal Data and, taking into account the purpose of processing the Personal Data, ensure it is complete.",
      'x. to not be subject to a decision based solely on automated processing, including profiling, which produces legal effects ("Automated Decision-Making").',
      "a. Where the processing of Your Personal Data by Us is based on consent, You have the right to withdraw that consent without detriment at any time or to exercise any of the rights listed above by emailing Us at hello@parentguidance.org.",
      "b. Updating, correcting, or deleting Personal Data",
      "i. You can change Your email address and other contact information by contacting us at hello@parentguidance.org. If You need to make changes or corrections to other information, You may contact us at hello@parentguidance.org. Please note that in order to comply with certain requests to limit use of Your Personal Data, We may need to terminate Your account and Your ability to access and use the Services, and You agree that We will not be liable to You for such termination, or for any refunds of prepaid fees paid by You. You can deactivate Your account by request at hello@parentguidance.org.",
      "ii. Although We will use reasonable efforts to do so, You understand that it may not be technologically possible to remove from Our systems every record of Your Personal Data. The need to back up Our systems to protect information from inadvertent loss means a copy of Your Personal Data may exist in a non erasable form that will be difficult or impossible for Us to locate or remove.",
      "c. Opt out of communications from Parent Guidance",
      "We will not market third party services to You without Your consent. We only send emails to You regarding Your account unless We have Your express consent to do otherwise. You can choose to filter these emails using Your email client settings, but We do not provide an option for You to opt out of these emails.",
      "d. Information submission by minors",
      "We do not knowingly collect Personal Data from individuals under the age of 18. Our Services are not directed to individuals under the age of 18, except with express permission of the individual's parent or legal guardian. We request that these individuals not provide Personal Data to Us, unless the parent or legal guardian has consented to the same and provided the required affirmation of age and permissions set forth in the Parent Guidance Terms of Use. If We learn that Personal Data from users less than 18 years of age has been collected, and that the other aforementioned conditions are not met, We will deactivate the account and take reasonable measures to promptly delete such data from Our records.",
      "If You are aware of a user under the age of 18 using the Web Site, please contact Us at hello@parentguidance.org. Parent Guidance will internally confirm that the aforementioned conditions have been met, or will take other appropriate action(s) consistent with this Privacy Policy and the Terms of Use.",
      "If You are a resident of California under the age of 18 and have registered for an account with Us, You may ask Us to remove content or information that You have posted to Our Platform.",
      "e. California Residents",
      'California residents may request and obtain from Us, once a year, free of charge, a list of third parties, if any, to which We disclosed their Personal Data for direct marketing purposes during the preceding calendar year and the categories of Personal Data shared with those third parties. If You are a California resident and wish to obtain that information, please submit Your request by sending Us an email at hello@parentguidance.org with "California Privacy Rights" in the subject line.',
    ],
  },
  {
    heading: "10. Contact us with additional questions or concerns",
    paragraphs: [
      "If You have any questions about this Policy, please contact Us by email at hello@parentguidance.org, or write to Us at Cook Center for Human Connection, d/b/a Parent Guidance, 1955 W Grove Pkwy #300, Pleasant Grove, UT 84062. Please note that email communications are not always secure; so please do not include sensitive information in Your emails to Us.",
    ],
  },
];
