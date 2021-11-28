import React from 'react';
import Icon1 from '../../images/svg-4.svg'
import Icon2 from '../../images/svg-6.svg'
import Icon3 from '../../images/svg-5.svg'
import Icon4 from '../../images/svg-7.svg'
import { 
    ChallengesContainer,
    ChallengesH1,
    ChallengesWrapper,
    ChallengesCard,
    ChalllengesIcon,
    ChallengesH2,
    ChallengesP
} from './ChallengesElements';

const Challenges = () => {
    return (
        <ChallengesContainer id="challenges">
            <ChallengesH1>Featured Challenges</ChallengesH1>
            <ChallengesWrapper>
                <ChallengesCard>
                    <ChalllengesIcon src={Icon1} />
                    <ChallengesH2>Roast Me challenge</ChallengesH2>
                    <ChallengesP>This command will remove the single build dependency from your project.</ChallengesP>
                </ChallengesCard>
                <ChallengesCard>
                    <ChalllengesIcon src={Icon2} />
                    <ChallengesH2>Standing Challenge</ChallengesH2>
                    <ChallengesP>This command will remove the single build dependency from your project.</ChallengesP>
                </ChallengesCard>
                <ChallengesCard>
                    <ChalllengesIcon src={Icon3} />
                    <ChallengesH2>Lorem Ipsium challenge</ChallengesH2>
                    <ChallengesP>This command will remove the single build dependency from your project.</ChallengesP>
                </ChallengesCard>
                <ChallengesCard>
                    <ChalllengesIcon src={Icon4} />
                    <ChallengesH2>Lorem Ipsium challenge</ChallengesH2>
                    <ChallengesP>This command will remove the single build dependency from your project.</ChallengesP>
                </ChallengesCard>
            </ChallengesWrapper>
        </ChallengesContainer>
    )
}

export default Challenges
