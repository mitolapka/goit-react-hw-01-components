import {Section, Title, StatList, StatItem, StatLabel, StatPercentage} from './Statistics.styled.js'

export const Statistics = ({ label, stats }) => {
    return (
      
        <Section className="statistics">
        
      {!!label && <Title className="title">{label}</Title>}
      <StatList className="stat-list">
        {stats.map(stat => (
          <StatItem key={stat.id} className="item">
            <StatLabel className="label">{stat.label}</StatLabel>
            <StatPercentage className="percentage">{stat.percentage}%</StatPercentage>
          </StatItem>
        ))}
      </StatList>
    </Section>
    
  );
};