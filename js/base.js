var body = '';

$(document).ready(function () {
  // Navigation active state handled in index.html inline script

  // Render Projects
  $.each(myProject, function (i, value) {
    var slide = '';
    $.each(value.img, function (j, val) {
      // Create slide items using Flowbite classes
      slide += `
        <div class="hidden duration-700 ease-in-out" data-carousel-item="${j === 0 ? 'active' : ''}">
            <img src="img/${val}" class="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="img${j}">
        </div>`;
    });

    var indicators = '';
    $.each(value.img, function (j, val) {
        indicators += `<button type="button" class="w-3 h-3 rounded-full bg-white/50 hover:bg-white" aria-current="${j === 0 ? 'true' : 'false'}" aria-label="Slide ${j+1}" data-carousel-slide-to="${j}"></button>`;
    });

    var html = `
      <div class="w-full md:w-1/2 lg:w-1/3 p-4" data-aos="fade-up" data-aos-delay="${(i % 3) * 100}">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full group/card">
          
          <div id="carousel-${i}" class="relative w-full h-64" data-carousel="slide">
            <!-- Carousel wrapper -->
            <div class="relative h-64 overflow-hidden rounded-t-2xl">
                 ${slide}
            </div>
            <!-- Slider indicators -->
            <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                ${indicators}
            </div>
            <!-- Slider controls (Hidden by default, shown on hover) -->
            <button type="button" class="opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:w-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                    <span class="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" class="opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:w-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    <span class="sr-only">Next</span>
                </span>
            </button>
          </div>

          <div class="p-6 flex flex-col flex-grow">
            <h5 class="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">${value.title}</h5>
            <div class="font-normal text-gray-600 dark:text-gray-400 text-sm flex-grow line-clamp-4 prose dark:prose-invert">
              ${value.text}
            </div>
            
            <button class="mt-4 text-blue-600 dark:text-blue-400 font-medium text-sm hover:underline self-start" data-modal-target="modal-${i}" data-modal-toggle="modal-${i}">
              Read More <i class="bi bi-arrow-right ml-1"></i>
            </button>
          </div>
        </div>
      </div>
      
      <!-- Read More Modal -->
      <div id="modal-${i}" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
          <div class="relative p-4 w-full max-w-2xl max-h-full">
              <!-- Modal content -->
              <div class="relative bg-white rounded-2xl shadow dark:bg-gray-800">
                  <!-- Modal header -->
                  <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                          ${value.title}
                      </h3>
                      <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="modal-${i}">
                          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                          </svg>
                          <span class="sr-only">Close modal</span>
                      </button>
                  </div>
                  <!-- Modal body -->
                  <div class="p-4 md:p-5 space-y-4">
                      <div class="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                         ${value.text}
                      </div>
                  </div>
              </div>
          </div>
      </div>
    `;
    $('#rowProject').append(html);
  });

  // Render Customers
  $.each(customer, function (i, value) {
    var html = `
      <div class="p-2 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5" data-aos="zoom-in" data-aos-delay="${(i % 5) * 50}">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 flex flex-col items-center justify-center h-full hover:shadow-xl transition-all duration-300 hover:scale-105 group">
          <img src="img/${value.logo}" class="max-h-20 max-w-full object-contain mb-3 grayscale group-hover:grayscale-0 transition-all duration-300" alt="${value.name}" onerror="this.src='img/ahmadsofuwan.jpg'; this.classList.add('opacity-50')">
          <h5 class="text-sm font-semibold text-center text-gray-800 dark:text-gray-200">${value.name}</h5>
        </div>
      </div>
    `;
    $('#rowCustomer').append(html);
  });

  // Render Skills
  $.each(skills, function (i, value) {
    var html = `
      <div class="mb-6 w-full md:w-1/2 px-4" data-aos="fade-right" data-aos-delay="${(i % 2) * 100}">
        <div class="flex items-center justify-between mb-2">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-md p-2 border border-gray-100 dark:border-gray-700">
                    <img src="img/${value.logo}" alt="${value.name}" class="max-w-full max-h-full object-contain" onerror="this.src='img/ahmadsofuwan.jpg'">
                </div>
                <span class="text-base font-semibold text-gray-800 dark:text-white">${value.name}</span>
            </div>
            <span class="text-sm font-bold text-blue-600 dark:text-blue-400">${value.persentage}%</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 shadow-inner overflow-hidden relative">
            <div class="${value.bgClass || 'bg-blue-600'} h-2.5 rounded-full transition-all duration-1000 ease-out relative overflow-hidden group" style="width: 0%" data-target-width="${value.persentage}%">
                <div class="absolute top-0 left-0 w-full h-full bg-white opacity-20 -skew-x-12 transform -translate-x-full group-hover:animate-shine"></div>
            </div>
        </div>
      </div>
    `;
    $('#skill').append(html);
  });

  // Animate skill bars
  setTimeout(() => {
      $('[data-target-width]').each(function() {
          $(this).css('width', $(this).attr('data-target-width'));
      });
  }, 500);

  // Initialize flowbite carousels and modals for dynamically injected elements
  setTimeout(() => {
      if (typeof initCarousels === 'function') initCarousels();
      if (typeof initModals === 'function') initModals();
  }, 100);
});

// Render Repositories
$(document).ready(function () {
  $.ajax({
    url: 'https://api.github.com/users/ahmadsofuwan/repos?sort=updated&per_page=100',
    type: 'get',
    dataType: 'json',
  })
    .done(function (repo) {
      $('#cout-repo').text(repo.length);
      $.each(repo, function (i, val) {
        var html = `
            <li class="py-3 sm:py-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-xl px-4 transition-colors duration-200 group">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <div class="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-xs shadow-md group-hover:scale-110 transition-transform">
                            ${i + 1}
                        </div>
                    </div>
                    <div class="flex-1 min-w-0">
                        <a href="${val.html_url}" target="_blank" class="text-sm font-semibold text-gray-900 truncate dark:text-white hover:text-indigo-500 transition-colors duration-200 block">
                            ${val.name}
                        </a>
                        <p class="text-xs text-gray-500 truncate dark:text-gray-400 mt-0.5">
                            <span class="font-medium text-gray-700 dark:text-gray-300">${val.language || 'Code'}</span> • ${new Date(val.updated_at).toLocaleDateString()}
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        <span class="flex items-center gap-1 text-xs px-2.5 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 rounded-full border border-yellow-200 dark:border-yellow-800">
                           <i class="bi bi-star-fill text-[10px]"></i>
                           ${val.stargazers_count}
                        </span>
                    </div>
                </div>
            </li>
        `;
        $('#repo').append(html);
      });
    })
    .fail(function() {
        $('#cout-repo').text("Error");
        $('#repo').append('<li class="text-red-500 text-center py-4 text-sm font-medium">Gagal memuat repository GitHub. Pastikan Anda terhubung ke internet.</li>');
    });
});
