# WhatsApp & AI-Assisted Dialog Workflow

**Version:** 1.0
**Date:** 2025-10-19

## Overview

This document describes the priority interface for the platform: **WhatsApp-based AI-assisted dialog**. This approach prioritizes conversational interactions over traditional web UI, making the platform accessible and intuitive for all users.

## Key Principles

1. **WhatsApp as Primary Interface**: Users (especially contractors) interact primarily through WhatsApp
2. **AI-Mediated Communication**: The AI agent structures, formats, and facilitates all communication
3. **Natural Language Processing**: Users can communicate naturally without learning complex UI patterns
4. **Automated Workflow Management**: The AI handles state transitions, notifications, and coordination

## Workflow Phases

### Phase 1: Project Request Creation
- **Contractor** sends project description via WhatsApp
- **AI** processes and structures the information
- **AI** confirms receipt and explains the process
- **AI** notifies available developers

### Phase 2: Developer Proposals
- **Developer** requests available projects (via platform or WhatsApp)
- **AI** sends project summaries
- **Developer** submits proposal (price, MVP scope, timeline)
- **AI** formats and presents proposal to contractor via WhatsApp

### Phase 3: Negotiation & Acceptance
- **Contractor** asks questions or negotiates via WhatsApp
- **AI** forwards questions to developer
- **Developer** responds with adjusted proposal
- **AI** presents counter-proposal to contractor
- **Contractor** accepts: "ACEITO proposta X"

### Phase 4: Formalization
- **AI** notifies developer of acceptance
- **AI** creates initial payment link via Stripe
- **AI** sends payment link to contractor via WhatsApp
- **Contractor** completes payment
- **Stripe** confirms payment to AI
- **AI** notifies developer to start development

### Phase 5: Development Cycle
- **Developer** notifies AI of partial delivery
- **AI** prepares validation instructions
- **AI** notifies contractor with testing instructions via WhatsApp
- **Contractor** provides feedback (accept/corrections)
  - If corrections needed: AI forwards to developer
  - If accepted: AI generates payment link for milestone
- Cycle repeats for each milestone

### Phase 6: Finalization
- **Developer** requests final approval
- **AI** sends final report + validation instructions to contractor
- **Contractor** approves or cancels via WhatsApp
  - **Approval**: AI generates final payment link → payment → project completion
  - **Cancellation**: AI processes closure with feedback

## Benefits of This Approach

1. **Lower Barrier to Entry**: No need to learn a complex web interface
2. **24/7 Accessibility**: WhatsApp is always available on mobile devices
3. **Natural Interactions**: Conversational interface feels intuitive
4. **Automated Coordination**: AI handles scheduling, reminders, and state management
5. **Structured Communication**: AI ensures all necessary information is collected
6. **Multi-language Support**: AI can translate and localize conversations

## Implementation Considerations

- WhatsApp Business API integration
- Natural Language Understanding (NLU) for intent recognition
- Context management for multi-turn conversations
- Stripe API integration for payment links
- Notification system for developers
- State machine for workflow phases
- Audit trail for all interactions

## Related Diagrams

See `whatsapp-ai-workflow.mermaid` for the sequence diagram visualization.
