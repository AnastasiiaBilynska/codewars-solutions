// https://www.codewars.com/kata/56c2a067585d9ac8280003c9/solutions/javascript/me/best_practices

function match(candidate, job) {
  for (let jobSkill of job.skills) {
    if (!matchSkillsName(candidate, jobSkill)) {
      return false;
    }
  }
  return true;
}

function matchSkillsName(candidate, jobSkill) {
  const filteredCandidatesName = candidate.skills.filter(
    (skill) => skill.name === jobSkill.name
  );
  for (let skill of filteredCandidatesName) {
    if (skill.preference === "avoid") {
      return false;
    } else if (matchExperience(skill, jobSkill.idealYears)) {
      return true;
    }
    return false;
  }
  return false;
}

function matchExperience(skill, idealYears) {
  if (skill.experience >= idealYears) {
    return true;
  } else if (
    skill.preference === "desired" &&
    skill.experience * 1.5 >= idealYears
  ) {
    return true;
  }
  return false;
}

function matchSkillsSubtitutions(candidate, job) {
  for (let jobSkill of job.skills["substitutions"]) {
    const filteredSubtitutions = candidate.skills.filter(
      (skill) => skill.name === jobSkill
    );
    matchExperience(skill, jobSkill.idealYears) ? true : false;
  }
}
