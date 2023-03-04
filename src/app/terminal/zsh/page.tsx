import { CodePreview } from '@/components/CodePreview';
import { getHighlighter } from '@/libs/shiki';

export const revalidate = 1800 // revalidate every 30 minutes
export const metadata = {
  title: 'Zsh',
};

const zshConfig = `# Enable Powerlevel10k instant prompt. Should stay close to the top of ~/.zshrc.
# Initialization code that may require console input (password prompts, [y/n]
# confirmations, etc.) must go above this block; everything else may go below.
if [[ -r "\${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-\${(%):-%n}.zsh" ]]; then
  source "\${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-\${(%):-%n}.zsh"
fi

USE_POWERLINE="true"
source /usr/share/zsh/zsh-config
source /usr/share/zsh-theme-powerlevel10k/powerlevel10k.zsh-theme

# To customize prompt, run \`p10k configure\` or edit ~/.p10k.zsh.
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh

# Tune history config
setopt append_history
setopt extended_history
setopt hist_expire_dups_first
setopt hist_ignore_dups # ignore duplication command history list
setopt hist_ignore_space
setopt hist_verify
setopt inc_append_history
setopt share_history # share command history data

### Added by Zinit's installer
if [[ ! -f $HOME/.local/share/zinit/zinit.git/zinit.zsh ]]; then
    print -P "%F{33} %F{220}Installing %F{33}ZDHARMA-CONTINUUM%F{220} Initiative Plugin Manager (%F{33}zdharma-continuum/zinit%F{220})…%f"
    command mkdir -p "$HOME/.local/share/zinit" && command chmod g-rwX "$HOME/.local/share/zinit"
    command git clone https://github.com/zdharma-continuum/zinit "$HOME/.local/share/zinit/zinit.git" && \\
        print -P "%F{33} %F{34}Installation successful.%f%b" || \\
        print -P "%F{160} The clone has failed.%f%b"
fi

source "$HOME/.local/share/zinit/zinit.git/zinit.zsh"
autoload -Uz _zinit
(( \${+_comps} )) && _comps[zinit]=_zinit

# Load a few important annexes, without Turbo
# (this is currently required for annexes)
zinit light-mode for \\
    zdharma-continuum/zinit-annex-as-monitor \\
    zdharma-continuum/zinit-annex-bin-gem-node \\
    zdharma-continuum/zinit-annex-patch-dl \\
    zdharma-continuum/zinit-annex-rust \\
    zdharma-continuum/fast-syntax-highlighting \\
    zdharma-continuum/history-search-multi-word \\
    larkery/zsh-histdb \\
    zsh-users/zsh-autosuggestions \\
    zsh-users/zsh-completions

### End of Zinit's installer chunk

# zsh-histdb-config
. /usr/share/zsh/zsh-histdb-config

# Export paths
export PATH=$HOME/.local/bin:$HOME/.cargo/bin:$PATH

# asdf
. /opt/asdf-vm/asdf.sh

# My aliases
alias ls="exa -laahg --icons --group-directories-first --extended"
alias cat="bat --style=auto"
alias vi="nvim"
alias vim="nvim"`;

export default async function FishConfig() {
  const highlighter = await getHighlighter();

  const code = highlighter.codeToHtml(zshConfig, { lang: 'zsh' });

  return <CodePreview code={code} raw={zshConfig} />;
}
