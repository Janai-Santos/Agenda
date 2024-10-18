document.addEventListener('DOMContentLoaded', () => {
    const dataAtualElem = document.getElementById('data-atual');
    const iccElem = document.getElementById('icc');
    const vimElem = document.getElementById('vim');
    const obsoletosElem = document.getElementById('obsoletos');
    const backlogElem = document.getElementById('backlog');
    const mensagemElem = document.getElementById('mensagem');
    const datePicker = document.getElementById('date-picker');

    // Dados simulados (que viriam do Excel ou JSON)
    const agendaDados = {
        '2024-10-18': { ICC: 'Victor', VIM: 'Victor', Obsoletos: 'Janaí', Backlog: 'Janaí' },
        '2024-10-19': { ICC: '', VIM: '', Obsoletos: '', Backlog: '' },
        '2024-10-20': { ICC: '', VIM: '', Obsoletos: '', Backlog: '' },
        '2024-10-21': { ICC: 'Janaí', VIM: 'Ana', Obsoletos: 'Victor', Backlog: 'Victor' },
        '2024-10-22': { ICC: 'Janaí', VIM: 'Ana', Obsoletos: 'Victor', Backlog: 'Victor' },
        '2024-10-23': { ICC: 'Janaí', VIM: 'Ana', Obsoletos: 'Victor', Backlog: 'Victor' },
        '2024-10-24': { ICC: 'Janaí', VIM: 'Ana', Obsoletos: 'Victor', Backlog: 'Victor' },
        '2024-10-25': { ICC: 'Janaí', VIM: 'Ana', Obsoletos: 'Victor', Backlog: 'Victor' },
        '2024-10-26': { ICC: '', VIM: '', Obsoletos: '', Backlog: '' },
        '2024-10-27': { ICC: '', VIM: '', Obsoletos: '', Backlog: '' },
        '2024-10-28': { ICC: 'Victor', VIM: 'Janaí', Obsoletos: 'Janaí', Backlog: 'Janaí' },
        '2024-10-29': { ICC: 'Victor', VIM: 'Janaí', Obsoletos: 'Janaí', Backlog: 'Janaí' },
        '2024-10-30': { ICC: 'Victor', VIM: 'Janaí', Obsoletos: 'Janaí', Backlog: 'Janaí' },
        '2024-10-31': { ICC: 'Victor', VIM: 'Janaí', Obsoletos: 'Janaí', Backlog: 'Janaí' },
        '2024-11-01': { ICC: 'Victor', VIM: 'Janaí', Obsoletos: 'Janaí', Backlog: 'Janaí' },
        '2024-11-02': { ICC: '', VIM: '', Obsoletos: '', Backlog: '' },
        '2024-11-03': { ICC: '', VIM: '', Obsoletos: '', Backlog: '' },
        '2024-11-04': { ICC: 'Janaí', VIM: 'Victor', Obsoletos: 'Victor', Backlog: 'Victor' },
        '2024-11-05': { ICC: 'Janaí', VIM: 'Victor', Obsoletos: 'Victor', Backlog: 'Victor' },
        '2024-11-06': { ICC: 'Janaí', VIM: 'Victor', Obsoletos: 'Victor', Backlog: 'Victor' },
        '2024-11-07': { ICC: 'Janaí', VIM: 'Victor', Obsoletos: 'Victor', Backlog: 'Victor' },
        '2024-11-08': { ICC: 'Janaí', VIM: 'Victor', Obsoletos: 'Victor', Backlog: 'Victor' },
        '2024-11-09': { ICC: '', VIM: '', Obsoletos: '', Backlog: '' },
        '2024-11-10': { ICC: '', VIM: '', Obsoletos: '', Backlog: '' },
        '2024-11-11': { ICC: 'Victor', VIM: 'Ana', Obsoletos: 'Janaí', Backlog: 'Janaí' },
        '2024-11-12': { ICC: 'Victor', VIM: 'Ana', Obsoletos: 'Janaí', Backlog: 'Janaí' },
        '2024-11-13': { ICC: 'Victor', VIM: 'Ana', Obsoletos: 'Janaí', Backlog: 'Janaí' },
        '2024-11-14': { ICC: 'Victor', VIM: 'Ana', Obsoletos: 'Janaí', Backlog: 'Janaí' },
        '2024-11-15': { ICC: '', VIM: '', Obsoletos: '', Backlog: '' },
        '2024-11-16': { ICC: '', VIM: '', Obsoletos: '', Backlog: '' },
        '2024-11-17': { ICC: '', VIM: '', Obsoletos: '', Backlog: '' },
        '2024-11-18': { ICC: 'Janaí', VIM: 'Janaí', Obsoletos: 'Victor', Backlog: 'Victor' },
        '2024-11-19': { ICC: 'Janaí', VIM: 'Janaí', Obsoletos: 'Victor', Backlog: 'Victor' },
        '2024-11-20': { ICC: 'Janaí', VIM: 'Janaí', Obsoletos: 'Victor', Backlog: 'Victor' },
        '2024-11-21': { ICC: 'Janaí', VIM: 'Janaí', Obsoletos: 'Victor', Backlog: 'Victor' },
        '2024-11-22': { ICC: 'Janaí', VIM: 'Janaí', Obsoletos: 'Victor', Backlog: 'Victor' },
        '2024-11-23': { ICC: '', VIM: '', Obsoletos: '', Backlog: '' },
        '2024-11-24': { ICC: '', VIM: '', Obsoletos: '', Backlog: '' },
        '2024-11-25': { ICC: 'Victor', VIM: 'Victor', Obsoletos: 'Janaí', Backlog: 'Janaí' },
        '2024-11-26': { ICC: 'Victor', VIM: 'Victor', Obsoletos: 'Janaí', Backlog: 'Janaí' },
        '2024-11-27': { ICC: 'Victor', VIM: 'Victor', Obsoletos: 'Janaí', Backlog: 'Janaí' },
        '2024-11-28': { ICC: 'Victor', VIM: 'Victor', Obsoletos: 'Janaí', Backlog: 'Janaí' },
        '2024-11-29': { ICC: 'Victor', VIM: 'Victor', Obsoletos: 'Janaí', Backlog: 'Janaí' },
        '2024-11-30': { ICC: '', VIM: '', Obsoletos: '', Backlog: '' },
        '2024-12-01': { ICC: '', VIM: '', Obsoletos: '', Backlog: '' },
        '2024-12-02': { ICC: 'Janaí', VIM: 'Ana', Obsoletos: 'Victor', Backlog: 'Victor' },
        '2024-12-03': { ICC: 'Janaí', VIM: 'Ana', Obsoletos: 'Victor', Backlog: 'Victor' },
        '2024-12-04': { ICC: 'Janaí', VIM: 'Ana', Obsoletos: 'Victor', Backlog: 'Victor' },
        '2024-12-05': { ICC: 'Janaí', VIM: 'Ana', Obsoletos: 'Victor', Backlog: 'Victor' },
        '2024-12-06': { ICC: 'Janaí', VIM: 'Ana', Obsoletos: 'Victor', Backlog: 'Victor' },
        '2024-12-07': { ICC: '', VIM: '', Obsoletos: '', Backlog: '' },
        '2024-12-08': { ICC: '', VIM: '', Obsoletos: '', Backlog: '' },
        '2024-12-09': { ICC: 'Victor', VIM: 'Janaí', Obsoletos: 'Janaí', Backlog: 'Janaí' },
        '2024-12-10': { ICC: 'Victor', VIM: 'Janaí', Obsoletos: 'Janaí', Backlog: 'Janaí' },
        '2024-12-11': { ICC: 'Victor', VIM: 'Janaí', Obsoletos: 'Janaí', Backlog: 'Janaí' },
        '2024-12-12': { ICC: 'Victor', VIM: 'Janaí', Obsoletos: 'Janaí', Backlog: 'Janaí' },
        '2024-12-13': { ICC: 'Victor', VIM: 'Janaí', Obsoletos: 'Janaí', Backlog: 'Janaí' },
        '2024-12-14': { ICC: '', VIM: '', Obsoletos: '', Backlog: '' },
        '2024-12-15': { ICC: '', VIM: '', Obsoletos: '', Backlog: '' },
        '2024-12-16': { ICC: 'Janaí', VIM: 'Victor', Obsoletos: 'Victor', Backlog: 'Victor' },
        '2024-12-17': { ICC: 'Janaí', VIM: 'Victor', Obsoletos: 'Victor', Backlog: 'Victor' },
        '2024-12-18': { ICC: 'Janaí', VIM: 'Victor', Obsoletos: 'Victor', Backlog: 'Victor' },
        '2024-12-19': { ICC: 'Janaí', VIM: 'Victor', Obsoletos: 'Victor', Backlog: 'Victor' },
        '2024-12-20': { ICC: 'Janaí', VIM: 'Victor', Obsoletos: 'Victor', Backlog: 'Victor' },
        '2024-12-21': { ICC: '', VIM: '', Obsoletos: '', Backlog: '' },
        '2024-12-22': { ICC: '', VIM: '', Obsoletos: '', Backlog: '' },
        '2024-12-23': { ICC: 'Victor', VIM: 'Ana', Obsoletos: 'Janaí', Backlog: 'Janaí' },
        '2024-12-24': { ICC: 'Victor', VIM: 'Ana', Obsoletos: 'Janaí', Backlog: 'Janaí' },
        '2024-12-25': { ICC: '', VIM: '', Obsoletos: '', Backlog: '' },
        '2024-12-26': { ICC: 'Victor', VIM: 'Ana', Obsoletos: 'Janaí', Backlog: 'Janaí' },
        '2024-12-27': { ICC: 'Victor', VIM: 'Ana', Obsoletos: 'Janaí', Backlog: 'Janaí' },
        '2024-12-28': { ICC: '', VIM: '', Obsoletos: '', Backlog: '' },
        '2024-12-29': { ICC: '', VIM: '', Obsoletos: '', Backlog: '' },
        '2024-12-30': { ICC: 'Janaí', VIM: 'Janaí', Obsoletos: 'Victor', Backlog: 'Victor' },
        '2024-12-31': { ICC: 'Janaí', VIM: 'Janaí', Obsoletos: 'Victor', Backlog: 'Victor' }
        };
        
       
    

    // Mostrar a data atual
    const hoje = new Date();
    dataAtualElem.textContent = hoje.toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    // Atualiza a agenda conforme a data escolhida
    function atualizarAgenda(dataSelecionada) {
        const dadosDia = agendaDados[dataSelecionada];

        if (dadosDia) {
            iccElem.textContent = dadosDia.ICC;
            vimElem.textContent = dadosDia.VIM;
            obsoletosElem.textContent = dadosDia.Obsoletos;
            backlogElem.textContent = dadosDia.Backlog;
            mensagemElem.textContent = '';
        } else {
            iccElem.textContent = '';
            vimElem.textContent = '';
            obsoletosElem.textContent = '';
            backlogElem.textContent = '';
            mensagemElem.textContent = 'Não há dados disponíveis para esta data.';
        }
    }

    // Atualiza a agenda para a data de hoje
    const dataFormatadaHoje = hoje.toISOString().split('T')[0];
    atualizarAgenda(dataFormatadaHoje);

    // Quando o usuário seleciona outra data
    datePicker.addEventListener('change', (e) => {
        const dataSelecionada = e.target.value;
        atualizarAgenda(dataSelecionada);
    });
});




