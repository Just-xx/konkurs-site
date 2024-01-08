

export const createSettingsBlocks = (settings, updater) => {
  const blocks = settings.map(group => [...group.map(opt => ({
    id: opt.id,
    label: opt.label,
    type: opt.type,
    state: [opt.value, newVal => updater(opt.id, newVal)],
    selectOptions: opt.selectOptions,
    active: opt.active,
    choice: opt.choice
  }))])

  return blocks;
}