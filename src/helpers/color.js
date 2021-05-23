const color = colors => {
  if (colors.includes('grass')) {
    return '#63BB5B';
  } else if (colors.includes('fire')) {
    return '#FF9C54';
  } else if (colors.includes('water')) {
    return '#4E90D5';
  } else if (colors.includes('electric')) {
    return '#F3D23B';
  } else if (colors.includes('ice')) {
    return '#74CEC0';
  } else if (colors.includes('poison')) {
    return '#AB6AC8';
  } else if (colors.includes('ground')) {
    return '#D97746';
  } else if (colors.includes('rock')) {
    return '#C7B78B';
  } else if (colors.includes('bug')) {
    return '#90C12C';
  } else if (colors.includes('dragon')) {
    return '#0A6DC4';
  } else if (colors.includes('normal')) {
    return '#f9199A';
  } else if (colors.includes('flying')) {
    return '#8FA8DD';
  } else if (colors.includes('fighting')) {
    return '#D80A49';
  } else if (colors.includes('psychic')) {
    return '#F97176';
  } else if (colors.includes('ghost')) {
    return '#5269AC';
  } else if (colors.includes('dark')) {
    return '#5A5366';
  } else if (colors.includes('steel')) {
    return '#5A8EA1';
  } else {
    return '#EC8FE6';
  }
};

export default color;
